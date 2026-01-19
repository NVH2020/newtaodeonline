
import React, { useState, useEffect } from 'react';
import { DANHGIA_URL, ADMIN_CONFIG, OTHER_APPS, DEFAULT_API_URL } from '../config';
import { AppUser, Student } from '../types';
import { GoogleGenAI, Type } from "@google/generative-ai";


// 1. Cách lấy Key trong Vite (Thầy phải đặt trong file .env là VITE_GEMINI_KEY)
const API_KEY = import.meta.env.VITE_GEMINI_KEY; 
const genAI = new GoogleGenAI(API_KEY);

export async function askGemini(prompt) {
  try {
    // 2. Dùng model 1.5-flash cho nhanh và miễn phí
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Lỗi gọi Gemini:", error);
    return "Có lỗi xảy ra khi gọi AI!";
  }
}

interface LandingPageProps {
  onSelectGrade: (grade: number) => void;
  onSelectQuiz: (num: number, pts: number, quizStudent: Partial<Student>) => void;
  user: AppUser | null;
  onOpenAuth: () => void;
  onOpenVip: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onSelectGrade, onSelectQuiz, user, onOpenAuth, onOpenVip }) => {
  const [showQuizModal, setShowQuizModal] = useState<{ num: number, pts: number } | null>(null);
  const [teacherTool, setTeacherTool] = useState<'matrix' | 'word' | null>(null);
  const [teacherId, setTeacherId] = useState('');
  const [isTeacherVerified, setIsTeacherVerified] = useState(false);
  const [teacherData, setTeacherData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // Form states cho Ma trận
  const [matrixForm, setMatrixForm] = useState({
    code: '', name: '', duration: 45, mcCount: 12, mcScore: 0.5, tfCount: 2, tfScore: 1, saCount: 4, saScore: 0.5
  });

  // Form states cho Word Import
  const [wordForm, setWordForm] = useState({
    examCode: '', fulltime: 45, mintime: 15, tab: 3, close: '', mcq_pts: 0.25, tf_pts: 1, sa_pts: 0.5
  });

  const handleTeacherVerify = async () => {
    if (!teacherId) return alert("Vui lòng nhập ID Giáo viên!");
    setLoading(true);
    try {
      const res = await fetch(`${DEFAULT_API_URL}?type=checkTeacher&idgv=${teacherId}`);
      const data = await res.json();
      if (data.status === 'success') {
        setIsTeacherVerified(true);
        setTeacherData(data.data);
      } else {
        alert(data.message);
      }
    } catch (e) { alert("Lỗi kết nối!"); }
    finally { setLoading(false); }
  };

  const handleSaveMatrix = async () => {
    setLoading(true);
    try {
      const payload = {
        type: 'saveMatrix',
        idNumber: teacherId,
        makiemtra: matrixForm.code,
        name: matrixForm.name,
        topics: 'manual',
        duration: matrixForm.duration,
        numMC: JSON.stringify([matrixForm.mcCount]),
        scoreMC: matrixForm.mcScore,
        numTF: JSON.stringify([matrixForm.tfCount]),
        scoreTF: matrixForm.tfScore,
        numSA: JSON.stringify([matrixForm.saCount]),
        scoreSA: matrixForm.saScore
      };
      const res = await fetch(DEFAULT_API_URL, { method: 'POST', body: JSON.stringify(payload) });
      alert("Đã lưu ma trận đề!");
      setTeacherTool(null);
    } catch (e) { alert("Lỗi lưu ma trận!"); }
    finally { setLoading(false); }
  };

  const handleWordImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setLoading(true);
    try {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const text = event.target?.result as string;
        // Sử dụng Gemini để phân tích text đề thi
        /* Corrected: Replaced process.env.GEMINI_API_KEY with process.env.API_KEY per guidelines */
        const ai = new GoogleGenAI(API_KEY);
        const prompt = `Phân tích văn bản đề thi sau đây và chuyển đổi sang định dạng JSON mảng các câu hỏi.
        Mỗi câu hỏi có: part (Phần I, II, hoặc III), type (mcq, true-false, short-answer), question (nội dung câu hỏi), o (mảng phương án cho mcq), a (đáp án đúng), explanation (giải thích nếu có).
        Văn bản: ${text.substring(0, 10000)}`;

        const response = await ai.models.generateContent({
          model: 'gemini-1.5-flash',
          contents: prompt,
          config: { responseMimeType: "application/json" }
        });

        /* response.text is a property, accessing it directly as per guidelines */
        const questions = JSON.parse(response.text() || '[]');
        
        // Gửi lên server
        const payload = {
          type: 'saveExamFromWord',
          config: { ...wordForm, idNumber: teacherId },
          questions: questions
        };
        await fetch(DEFAULT_API_URL, { method: 'POST', body: JSON.stringify(payload) });
        alert("Import đề từ Word thành công!");
        setTeacherTool(null);
      };
      reader.readAsText(file); // Ở môi trường thực tế sẽ dùng Mammoth.js để đọc .docx, ở đây demo qua text
    } catch (e) { alert("Lỗi khi xử lý file!"); }
    finally { setLoading(false); }
  };

  return (
    <div className="flex flex-col gap-6 pb-12 font-sans overflow-x-hidden">
      {/* 1. NÚT CHỨC NĂNG CHÍNH */}
      <div className="flex justify-center flex-wrap gap-4 mt-8">
        <button onClick={() => setShowQuizModal({ num: 20, pts: 0.5 })} 
          className="px-8 py-5 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl font-black shadow-xl hover:scale-105 transition-all flex items-center gap-3">
          <i className="fas fa-gift text-2xl"></i> SĂN QUÀ QUIZ
        </button>

        <button onClick={() => { setTeacherTool('matrix'); setIsTeacherVerified(false); }} 
          className="px-8 py-5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl font-black shadow-xl hover:scale-105 transition-all flex items-center gap-3">
          <i className="fas fa-th-list text-2xl"></i> TẠO MA TRẬN ĐỀ
        </button>

        <button onClick={() => { setTeacherTool('word'); setIsTeacherVerified(false); }} 
          className="px-8 py-5 bg-gradient-to-r from-emerald-500 to-teal-700 text-white rounded-2xl font-black shadow-xl hover:scale-105 transition-all flex items-center gap-3">
          <i className="fas fa-file-word text-2xl"></i> TẠO ĐỀ TỪ WORD
        </button>
      </div>

      {/* MODAL TỔNG CHO GIÁO VIÊN */}
      {teacherTool && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-md">
          <div className="bg-white w-full max-w-2xl rounded-[3rem] p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-black text-indigo-700 uppercase italic">
                {teacherTool === 'matrix' ? 'Cấu hình Ma trận đề' : 'Import đề từ Word'}
              </h2>
              <button onClick={() => setTeacherTool(null)} className="text-slate-300 hover:text-red-500"><i className="fas fa-times text-2xl"></i></button>
            </div>

            {!isTeacherVerified ? (
              <div className="space-y-6 py-10 text-center">
                <i className="fas fa-user-shield text-6xl text-indigo-200 mb-4"></i>
                <p className="font-bold text-slate-600">Vui lòng nhập ID bản quyền để tiếp tục</p>
                <input type="text" placeholder="Nhập ID Giáo viên..." className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl font-black text-center text-xl outline-none focus:border-indigo-500" value={teacherId} onChange={e => setTeacherId(e.target.value)} />
                <button onClick={handleTeacherVerify} disabled={loading} className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest shadow-lg">
                  {loading ? 'Đang kiểm tra...' : 'Xác minh ID'}
                </button>
              </div>
            ) : (
              <div className="animate-fade-in space-y-6">
                <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-sm"><i className="fas fa-chalkboard-teacher"></i></div>
                  <div>
                    <p className="text-[10px] font-black text-indigo-400 uppercase">Giáo viên: {teacherData.name}</p>
                    <p className="text-xs font-bold text-slate-600 italic">Bản quyền đã kích hoạt</p>
                  </div>
                </div>

                {teacherTool === 'matrix' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input placeholder="Mã kiểm tra (Ví dụ: 45P-K12)" className="p-4 bg-slate-50 rounded-xl font-bold" value={matrixForm.code} onChange={e=>setMatrixForm({...matrixForm, code: e.target.value})} />
                    <input placeholder="Tên đề thi" className="p-4 bg-slate-50 rounded-xl font-bold" value={matrixForm.name} onChange={e=>setMatrixForm({...matrixForm, name: e.target.value})} />
                    <div className="space-y-1">
                       <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Thời gian (phút)</label>
                       <input type="number" className="w-full p-4 bg-slate-50 rounded-xl font-bold" value={matrixForm.duration} onChange={e=>setMatrixForm({...matrixForm, duration: parseInt(e.target.value)})} />
                    </div>
                    <div className="space-y-1">
                       <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Số câu TN - Điểm/câu</label>
                       <div className="flex gap-2">
                         <input type="number" className="w-1/2 p-4 bg-slate-50 rounded-xl font-bold" value={matrixForm.mcCount} onChange={e=>setMatrixForm({...matrixForm, mcCount: parseInt(e.target.value)})} />
                         <input type="number" step="0.1" className="w-1/2 p-4 bg-slate-50 rounded-xl font-bold" value={matrixForm.mcScore} onChange={e=>setMatrixForm({...matrixForm, mcScore: parseFloat(e.target.value)})} />
                       </div>
                    </div>
                    <button onClick={handleSaveMatrix} disabled={loading} className="col-span-full py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase shadow-xl mt-4">
                      Lưu cấu hình ma trận
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input placeholder="Mã đề (Exams)" className="p-4 bg-slate-50 rounded-xl font-bold" value={wordForm.examCode} onChange={e=>setWordForm({...wordForm, examCode: e.target.value})} />
                      <input placeholder="Ngày khóa (dd/mm/yyyy)" className="p-4 bg-slate-50 rounded-xl font-bold" value={wordForm.close} onChange={e=>setWordForm({...wordForm, close: e.target.value})} />
                      <input type="number" placeholder="Tổng thời gian" className="p-4 bg-slate-50 rounded-xl font-bold" value={wordForm.fulltime} onChange={e=>setWordForm({...wordForm, fulltime: parseInt(e.target.value)})} />
                      <input type="number" placeholder="Min nộp bài" className="p-4 bg-slate-50 rounded-xl font-bold" value={wordForm.mintime} onChange={e=>setWordForm({...wordForm, mintime: parseInt(e.target.value)})} />
                    </div>
                    
                    <div className="relative border-2 border-dashed border-indigo-200 rounded-3xl p-10 text-center hover:bg-indigo-50 transition-all cursor-pointer">
                      <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept=".txt,.docx" onChange={handleWordImport} />
                      <i className="fas fa-cloud-upload-alt text-5xl text-indigo-400 mb-4"></i>
                      <p className="font-black text-indigo-600">Click để chọn File Word đề thi</p>
                      <p className="text-[10px] text-slate-400 uppercase mt-2">Hỗ trợ định dạng Phần I, II, III chuẩn mẫu</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* (Phần cũ của LandingPage như Carousel, News... giữ nguyên) */}
    </div>
  );
};

export default LandingPage;
