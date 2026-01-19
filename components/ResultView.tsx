
import React, { useState } from 'react';
import { ExamResult, Question } from '../types';
import MathText from './MathText';

interface ResultViewProps {
  result: ExamResult;
  questions: Question[];
  onBack: () => void;
}

const ResultView: React.FC<ResultViewProps> = ({ result, questions, onBack }) => {
  const [showReview, setShowReview] = useState(false);
  // Thêm useEffect để tự động quét công thức khi nhấn nút "Xem lại bài làm"
React.useEffect(() => {
  if (showReview) {
    const timer = setTimeout(() => {
      if ((window as any).MathJax && (window as any).MathJax.typesetPromise) {
        (window as any).MathJax.typesetPromise();
      }
    }, 300); // Đợi giao diện render xong rồi quét
    return () => clearTimeout(timer);
  }
}, [showReview]);

  const btnStyle = "w-full sm:w-64 py-4 bg-blue-600 text-white rounded-full font-black text-lg hover:bg-blue-700 transition shadow-xl flex items-center justify-center gap-3 active:scale-95 border-b-4 border-blue-800";

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in pb-20 font-sans">
      <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-200 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
        </div>
        <h2 className="text-4xl font-black text-slate-800 mb-2 uppercase tracking-tight">KẾT QUẢ BÀI THI</h2>
        <p className="text-slate-500 mb-10 font-bold uppercase text-xs tracking-widest">Hệ thống học tập và kiểm tra Online chuyên nghiệp</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10 text-left">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-inner">
            <p className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-[0.2em]">Họ tên thí sinh</p>
            <p className="font-black text-slate-800 text-xl leading-tight">{result.name}</p>
            <p className="text-sm text-slate-500 mt-1 font-bold">SBD: {result.sbd} • Lớp: {result.className}</p>
          </div>
          <div className="bg-blue-600 p-8 rounded-3xl shadow-2xl flex flex-col justify-center transform hover:scale-105 transition">
            <p className="text-[10px] font-black text-white/70 uppercase mb-2 tracking-[0.2em]">Tổng điểm</p>
            <p className="text-6xl font-black text-white">{result.score.toFixed(2)}</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-inner">
            <p className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-[0.2em]">Thời gian hoàn thành</p>
            <p className="font-black text-slate-800 text-xl leading-tight">{result.totalTime}</p>
            <p className="text-sm text-slate-500 mt-1 font-bold">{new Date(result.timestamp).toLocaleDateString('vi-VN')} {new Date(result.timestamp).toLocaleTimeString('vi-VN')}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6 border-t border-slate-100">
          <button onClick={() => setShowReview(!showReview)} className={btnStyle}>
            {showReview ? 'ĐÓNG XEM CHI TIẾT' : 'XEM LẠI BÀI LÀM'}
          </button>
          <button onClick={onBack} className={btnStyle}>
            VỀ TRANG CHỦ
          </button>
        </div>
      </div>

      {showReview && (
  <div className="space-y-8 animate-fade-in">
    <div className="flex items-center justify-between px-6">
      <h3 className="text-2xl font-black text-slate-800 uppercase border-l-8 border-blue-600 pl-4">
        Chi tiết bài làm
      </h3>
    </div>

    {questions.map((q, idx) => {
      const u = result.details[idx].answer;
      // Logic kiểm tra đúng/sai cho từng loại câu hỏi
      const isCorrect = q.type === 'true-false' 
        ? (Array.isArray(u) && q.s ? u.every((v: any, i: any) => v === q.s![i].a) : false)
        : u?.toString().trim().toLowerCase() === q.a?.toString().trim().toLowerCase();

      return (
        <div key={q.id} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden group">
          {/* Header câu hỏi */}
          <div className={`p-6 flex justify-between items-center ${isCorrect ? 'bg-emerald-50/50' : 'bg-red-50/50'}`}>
            <div className="flex items-center gap-4">
              <span className={`w-12 h-12 flex items-center justify-center rounded-2xl font-black text-xl ${isCorrect ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'}`}>
                {idx + 1}
              </span>
              <div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ID: {q.id}</span>
                <h4 className="font-bold text-slate-700 uppercase text-xs">{q.part}</h4>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10">
            {/* 1. Nội dung câu hỏi chính */}
            <div className="text-xl font-bold text-slate-800 mb-8 leading-relaxed">
              <MathText content={q.question} />
            </div>

            {/* 2. Hiển thị danh sách phương án cho câu TRẮC NGHIỆM (nếu có) */}
            {q.type !== 'true-false' && q.o && q.o.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {q.o.map((opt, i) => {
                  const label = String.fromCharCode(65 + i);
                  const isUserChoice = u === label;
                  const isRightAnswer = q.a === label;
                  
                  return (
                    <div key={i} className={`p-4 rounded-2xl border-2 flex gap-4 items-start ${isUserChoice ? (isCorrect ? 'border-emerald-500 bg-emerald-50' : 'border-red-500 bg-red-50') : (isRightAnswer ? 'border-emerald-500 border-dashed bg-emerald-50/30' : 'border-slate-50 bg-slate-50')}`}>
                      <span className={`w-8 h-8 shrink-0 flex items-center justify-center rounded-lg font-black ${isUserChoice ? (isCorrect ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white') : 'bg-white text-slate-400 border'}`}>
                        {label}
                      </span>
                      <div className="text-slate-700 font-medium pt-1"><MathText content={opt} /></div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* 3. Hiển thị danh sách các ý cho câu ĐÚNG/SAI */}
{q.type === 'true-false' && q.s && q.s.length > 0 && (
  <div className="space-y-4 mb-8">
    {q.s.map((item, i) => {
      // Lấy câu trả lời của học sinh (u[i] vì câu đúng sai lưu mảng boolean)
      const userAns = Array.isArray(u) ? u[i] : undefined;
      const isSubCorrect = userAns === item.a;
      const label = String.fromCharCode(97 + i); // a, b, c, d

      return (
        <div 
          key={i} 
          className={`p-5 rounded-2xl border-2 flex flex-col sm:flex-row justify-between items-center gap-4 
            ${userAns === undefined ? 'border-slate-100 bg-slate-50' : 
            (isSubCorrect ? 'border-emerald-100 bg-emerald-50/50' : 'border-red-100 bg-red-50/50')}`}
        >
          <div className="flex gap-4 w-full">
            <span className="font-black text-blue-600">{label}.</span>
            {/* SỬA TẠI ĐÂY: item.q -> item.text */}
            <div className="text-slate-700 font-medium">
              <MathText content={item.text} /> 
            </div>
          </div>

          <div className="flex gap-2 shrink-0 items-center">
            {/* Hiển thị lựa chọn của học sinh */}
            <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
              <div className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase transition-all ${userAns === true ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400'}`}>Đúng</div>
              <div className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase transition-all ${userAns === false ? 'bg-red-600 text-white shadow-sm' : 'text-slate-400'}`}>Sai</div>
            </div>

            {/* Đáp án đúng của hệ thống */}
            <div className="ml-2 flex items-center text-emerald-700 font-bold text-[10px] bg-emerald-100 px-3 py-2 rounded-xl border border-emerald-200 uppercase">
              <i className="fas fa-check-circle mr-1"></i> {item.a ? 'Đúng' : 'Sai'}
            </div>
          </div>
        </div>
      );
    })}
  </div>
)}
            {/* 4. Tổng kết đáp án (Dành cho Trắc nghiệm và Trả lời ngắn) */}
            {q.type !== 'true-false' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Phương án đã chọn</p>
                  <div className={`text-lg font-black ${isCorrect ? 'text-emerald-600' : 'text-red-600'}`}>{u || "Không trả lời"}</div>
                </div>
                <div className="md:border-l md:pl-6 border-slate-200">
                  <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-1">Đáp án đúng</p>
                  <div className="text-lg font-black text-emerald-700">{q.a}</div>
                </div>
              </div>
            )}

            {/* 5. Giải thích chi tiết */}
            {q.explanation && (
              <div className="mt-8 p-6 bg-blue-50/50 rounded-3xl border-2 border-blue-100 border-dashed">
                <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-2">Hướng dẫn giải</p>
                <div className="text-slate-700 leading-relaxed italic"><MathText content={q.explanation} /></div>
              </div>
            )}
          </div>
        </div>
      );
    })}
  </div>
)}
    </div>
  );
};

export default ResultView;
