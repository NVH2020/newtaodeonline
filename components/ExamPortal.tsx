import React, { useState, useMemo, useEffect } from 'react';
import { Question, Student, ExamCodeDefinition } from '../types';
import { API_ROUTING, DEFAULT_API_URL, TOPICS_DATA, EXAM_CODES } from '../config';
import { pickQuestionsSmart } from '../questions';

/**
 * Thành phần Cổng thông tin xác minh và chọn mã đề thi
 */
interface ExamPortalProps {
  grade: number;
  onBack: () => void;
  onStart: (config: any, student: Student, questions: Question[]) => void;
}

const ExamPortal: React.FC<ExamPortalProps> = ({ grade, onBack, onStart }) => {
  const [selectedCode, setSelectedCode] = useState<string>("");
  const [idInput, setIdInput] = useState("");
  const [sbdInput, setSbdInput] = useState("");
  const [verifiedStudent, setVerifiedStudent] = useState<Student | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<number[]>([]);
  const [dynamicCodes, setDynamicCodes] = useState<ExamCodeDefinition[]>([]);

  // Tải mã hệ thống chung cho khối lớp này
  useEffect(() => {
    const fetchSystemCodes = async () => {
      try {
        const url = new URL(DEFAULT_API_URL);
        url.searchParams.append("type", "getExamCodes");
        url.searchParams.append("idnumber", "SYSTEM");
        url.searchParams.append("grade", grade.toString());
        const resp = await fetch(url.toString());
        const res = await resp.json();
        if (res.status === "success") setDynamicCodes(res.data);
      } catch(e) {}
    };
    fetchSystemCodes();
  }, [grade]);

  // Kết hợp mã đề cố định và mã đề động
  const allAvailableCodes = useMemo(() => {
    const defaults = EXAM_CODES[grade] || [];
    const combined = [...defaults];
    dynamicCodes.forEach(dc => {
      if (!combined.find(c => c.code === dc.code)) combined.push(dc);
    });
    return combined;
  }, [grade, dynamicCodes]);

  const currentCodeDef = useMemo(() => allAvailableCodes.find(c => c.code === selectedCode), [selectedCode, allAvailableCodes]);

  // HÀM MỞ RỘNG CHUYÊN ĐỀ
  const getRelatedGrades = (currentGrade: number) => {
    if (currentGrade === 12) return [10, 11, 12];
    if (currentGrade === 11) return [10, 11];
    if (currentGrade === 10) return [10];
    if (currentGrade === 9) return [7, 8, 9];
    return [currentGrade];
  };

  const combinedTopics = useMemo(() => {
    const relatedGrades = getRelatedGrades(grade);
    let topics: { id: number; name: string; grade: number }[] = [];
    relatedGrades.forEach(g => {
      const gradeTopics = TOPICS_DATA[g] || [];
      topics = [...topics, ...gradeTopics.map(t => ({ ...t, grade: g }))];
    });
    return topics;
  }, [grade]);

  const handleVerify = async () => {
    if (!idInput || !sbdInput) return alert("Vui lòng nhập đầy đủ ID Giáo viên và Số báo danh!");
    setIsVerifying(true);
    setVerifiedStudent(null);
    const targetUrl = API_ROUTING[idInput.trim()] || DEFAULT_API_URL;
    try {
      const url = new URL(targetUrl);
      url.searchParams.append("type", "verifyStudent");
      url.searchParams.append("idnumber", idInput.trim());
      url.searchParams.append("sbd", sbdInput.trim());
      const resp = await fetch(url.toString());
      const result = await resp.json();
      if (result.status === "success") {
        setVerifiedStudent(result.data);
        const matrixUrl = new URL(targetUrl);
        matrixUrl.searchParams.append("type", "getExamCodes");
        matrixUrl.searchParams.append("idnumber", idInput.trim());
        const mResp = await fetch(matrixUrl.toString());
        const mResult = await mResp.json();
        if (mResult.status === "success") {
          setDynamicCodes(prev => {
            const newCodes = [...prev];
            mResult.data.forEach((dc: ExamCodeDefinition) => {
              if (!newCodes.find(c => c.code === dc.code)) newCodes.push(dc);
            });
            return newCodes;
          });
        }
      } else { alert("Xác minh thất bại: " + result.message); }
    } catch (e) { alert("Lỗi kết nối máy chủ xác minh!"); } 
    finally { setIsVerifying(false); }
  };

  const resolveCounts = (configValues: number[], targetTopics: number[]) => {
    if (configValues.length === targetTopics.length) return configValues;
    const total = configValues[0] || 0;
    return targetTopics.map((_, i) => Math.floor(total / targetTopics.length) + (i < total % targetTopics.length ? 1 : 0));
  };

  const handleStart = () => {
    if (!verifiedStudent || !selectedCode) return alert("Vui lòng xác minh thí sinh và chọn mã đề!");
    const fc = currentCodeDef?.fixedConfig;
    if (!fc) return alert("Cấu hình đề thi bị lỗi!");
    const finalConfig = { id: selectedCode, title: currentCodeDef.name, time: fc.duration, mcqPoints: fc.scoreMC, tfPoints: fc.scoreTF, saPoints: fc.scoreSA, gradingScheme: 1 };
    const topicsToPick = currentCodeDef.topics === 'manual' ? selectedTopics : (currentCodeDef.topics as number[]);
    if (topicsToPick.length === 0) return alert("Vui lòng chọn phạm vi chuyên đề!");
    const questions = pickQuestionsSmart(topicsToPick, { mc: resolveCounts(fc.numMC, topicsToPick), tf: resolveCounts(fc.numTF, topicsToPick), sa: resolveCounts(fc.numSA, topicsToPick) }, { mc3: resolveCounts(fc.mcL3, topicsToPick), mc4: resolveCounts(fc.mcL4, topicsToPick), tf3: resolveCounts(fc.tfL3, topicsToPick), tf4: resolveCounts(fc.tfL4, topicsToPick), sa3: resolveCounts(fc.saL3, topicsToPick), sa4: resolveCounts(fc.saL4, topicsToPick) });
    if (questions.length === 0) return alert("Ngân hàng đề hiện chưa đủ câu hỏi cho cấu hình này!");
    onStart(finalConfig, verifiedStudent, questions);
  };

  const isVip = verifiedStudent?.taikhoanapp?.toUpperCase().includes("VIP");

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-fade-in border border-slate-100 font-sans">
      <div className="bg-blue-700 p-8 text-white flex justify-between items-center shadow-lg border-b-8 border-blue-900">
        <div>
          <h2 className="text-3xl font-black mb-1 tracking-tighter uppercase">Xác Minh Danh Tính</h2>
          <p className="text-blue-100 text-sm font-bold uppercase tracking-widest opacity-80">Thiết lập bài làm của bạn</p>
        </div>
        <button onClick={onBack} className="bg-white/20 hover:bg-white/30 px-8 py-3 rounded-full transition font-black border border-white/40 flex items-center gap-2 active:scale-95">
          <i className="fas fa-arrow-left"></i> QUAY LẠI
        </button>
      </div>

      <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
       {/* Cột 1: Thông tin thí sinh */}
<div className="space-y-6">
  <h3 className="text-xl font-black text-slate-800 uppercase flex items-center gap-2 border-l-8 border-blue-600 pl-4">Xác Minh</h3>
  <div className="bg-slate-50 p-6 rounded-[2.5rem] border border-slate-200 shadow-inner space-y-4">
    {/* Input Section */}
    <div className="space-y-3">
      <div className="relative">
        <i className="fas fa-chalkboard-teacher absolute left-4 top-1/2 -translate-y-1/2 text-blue-400"></i>
        <input type="text" placeholder="ID BẢN QUYỀN" className="w-full p-4 pl-12 bg-white rounded-2xl shadow-sm border border-slate-100 focus:ring-4 focus:ring-blue-100 font-black outline-none uppercase" value={idInput} onChange={e => setIdInput(e.target.value)} />
      </div>
      <div className="relative">
        <i className="fas fa-id-card absolute left-4 top-1/2 -translate-y-1/2 text-blue-400"></i>
        <input type="text" placeholder="SỐ BÁO DANH" className="w-full p-4 pl-12 bg-white rounded-2xl shadow-sm border border-slate-100 focus:ring-4 focus:ring-blue-100 font-black outline-none uppercase" value={sbdInput} onChange={e => setSbdInput(e.target.value)} />
      </div>
      <button onClick={handleVerify} disabled={isVerifying} className="w-full py-5 bg-blue-700 text-white rounded-2xl font-black shadow-xl hover:bg-blue-800 transition active:scale-95 uppercase text-lg border-b-4 border-blue-900">
        {isVerifying ? <i className="fas fa-spinner fa-spin mr-2"></i> : <i className="fas fa-check-double mr-2"></i>}
        {isVerifying ? 'ĐANG XỬ LÝ...' : 'XÁC MINH ID'}
      </button>
    </div>
    
    {/* Thẻ thông tin Thí sinh (Verified Card) */}
    {verifiedStudent && (
      <div className="p-5 bg-white border border-blue-100 rounded-[2rem] shadow-sm space-y-3 animate-fade-in relative overflow-hidden">
        {/* Badge tích xanh ẩn dưới nền cho sang trọng */}
        <i className="fas fa-check-circle absolute -right-4 -bottom-4 text-blue-50 text-7xl rotate-12"></i>

        {/* 1. Tên + Tích xanh */}
        <div className="flex items-center gap-3 border-b border-slate-50 pb-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-md">
            <i className="fas fa-user"></i>
          </div>
          <div className="flex flex-col truncate">
            <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Thí sinh</span>
            <div className="flex items-center gap-1.5">
              <span className="font-black text-blue-900 uppercase truncate">{verifiedStudent.name}</span>
              <svg className="w-4 h-4 text-blue-500 fill-current" viewBox="0 0 20 20 shadow-sm"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            </div>
          </div>
        </div>

        {/* Danh sách thông tin dạng lưới 2 cột cho gọn */}
        <div className="grid grid-cols-2 gap-2">
          {/* Lớp */}
          <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-xl border border-slate-100">
            <i className="fas fa-graduation-cap text-indigo-500 text-xs"></i>
            <span className="text-[11px] font-black text-slate-600">Lớp: {verifiedStudent.class}</span>
          </div>
          {/* SBD */}
          <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-xl border border-slate-100">
            <i className="fas fa-hashtag text-pink-500 text-xs"></i>
            <span className="text-[11px] font-black text-slate-600">SBD: {verifiedStudent.sbd}</span>
          </div>
          {/* Số lần thi */}
          <div className="flex items-center gap-2 p-2 bg-emerald-50 rounded-xl border border-emerald-100">
            <i className="fas fa-redo text-emerald-600 text-xs"></i>
            <span className="text-[11px] font-black text-emerald-700">Max lần thi: {verifiedStudent.limit}</span>
          </div>
          {/* Số lần chuyển tab */}
          <div className="flex items-center gap-2 p-2 bg-orange-50 rounded-xl border border-orange-100">
            <i className="fas fa-external-link-square-alt text-orange-600 text-xs"></i>
            <span className="text-[11px] font-black text-orange-700">Max Tab: {verifiedStudent.limittab}</span>
          </div>
        </div>

       {/* Tài khoản VIP / App */}
<div className="pt-2 border-t border-slate-50">
  <div className={`flex items-center justify-between p-3 rounded-2xl border transition-all ${isVip ? 'bg-amber-50 border-amber-200 shadow-sm' : 'bg-slate-50 border-slate-100'}`}>
    
    {/* Vế trước: Chữ Tài khoản cố định */}
    <div className="flex items-center gap-2">
      <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${isVip ? 'bg-amber-100 text-amber-600' : 'bg-slate-200 text-slate-500'}`}>
        <i className={`fas ${isVip ? 'fa-gem' : 'fa-user-circle'} text-[10px]`}></i>
      </div>
      <span className={`text-[11px] font-black uppercase ${isVip ? 'text-amber-800' : 'text-slate-500'}`}>
        Tài khoản:
      </span>
    </div>

    {/* Vế sau: Trạng thái VIP óng ánh hoặc VIP0 */}
    <div className="flex items-center">
      {isVip ? (
        // Hiển thị VIP 1 trở lên (Vàng óng ánh)
        <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 px-3 py-1 rounded-full shadow-inner animate-pulse border border-amber-300">
          <i className="fas fa-crown text-[10px] text-amber-900"></i>
          <span className="text-[12px] font-black text-amber-900 drop-shadow-sm uppercase">
            {verifiedStudent.taikhoanapp || "VIP1"}
          </span>
          {/* Tích xanh nhỏ cho VIP */}
          <svg className="w-3 h-3 text-amber-800 fill-current" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
      ) : (
        // Hiển thị VIP0 hoặc trống (Xám đơn giản)
        <div className="flex items-center gap-1 bg-slate-200 px-3 py-1 rounded-full border border-slate-300">
          <i className="fas fa-user text-[8px] text-slate-500"></i>
          <span className="text-[11px] font-black text-slate-600 uppercase">
            {verifiedStudent.taikhoanapp && verifiedStudent.taikhoanapp.trim() !== "" ? verifiedStudent.taikhoanapp : "VIP0"}
          </span>
        </div>
      )}
    </div>

  </div>
</div>
      </div>
    )}
  </div>
</div>

        {/* Cột 2: Chọn mã đề */}
<div className="space-y-6">
  <h3 className="text-xl font-black text-slate-800 uppercase flex items-center gap-2 border-l-8 border-blue-600 pl-4">Đề Thi</h3>
  <div className="space-y-4">
    <div className="relative">
      <select className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-3xl font-black text-blue-800 focus:ring-4 focus:ring-blue-100 shadow-sm outline-none appearance-none" value={selectedCode} onChange={e => setSelectedCode(e.target.value)}>
        <option value="">-- CHỌN MÃ ĐỀ --</option>
        {allAvailableCodes.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
      </select>
      <i className="fas fa-chevron-down absolute right-6 top-1/2 -translate-y-1/2 text-blue-400 pointer-events-none"></i>
    </div>
    
    {currentCodeDef?.fixedConfig && (
      <div className="p-6 bg-blue-50 border border-blue-100 rounded-[2.5rem] shadow-inner space-y-4 text-center animate-fade-in">
        <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">Cấu hình đề thi</p>
        
        {/* Hàng 1: Thời gian và Tổng số câu */}
        <div className="flex justify-center gap-4">
          <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-blue-100 flex-1">
            <p className="text-2xl font-black text-blue-700">{currentCodeDef.fixedConfig.duration}</p>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Phút làm bài</p>
          </div>
          <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-blue-100 flex-1">
            <p className="text-2xl font-black text-blue-700">
              {(currentCodeDef.fixedConfig.numMC?.reduce((a, b) => a + b, 0) || 0) + 
               (currentCodeDef.fixedConfig.numTF?.reduce((a, b) => a + b, 0) || 0) + 
               (currentCodeDef.fixedConfig.numSA?.reduce((a, b) => a + b, 0) || 0)}
            </p>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Tổng số câu</p>
          </div>
        </div>

        {/* Hàng 2: Chi tiết từng loại câu hỏi - KHÔI PHỤC TẠI ĐÂY */}
        <div className="pt-2">
          <div className="bg-white/60 p-3 rounded-2xl border border-blue-100">
            <div className="grid grid-cols-3 divide-x divide-blue-100">
              <div>
                <p className="text-sm font-black text-blue-800">{currentCodeDef.fixedConfig.numMC?.reduce((a, b) => a + b, 0) || 0}</p>
                <p className="text-[8px] font-bold text-slate-500 uppercase">Trắc nghiệm</p>
              </div>
              <div>
                <p className="text-sm font-black text-indigo-800">{currentCodeDef.fixedConfig.numTF?.reduce((a, b) => a + b, 0) || 0}</p>
                <p className="text-[8px] font-bold text-slate-500 uppercase">Đúng/Sai</p>
              </div>
              <div>
                <p className="text-sm font-black text-emerald-800">{currentCodeDef.fixedConfig.numSA?.reduce((a, b) => a + b, 0) || 0}</p>
                <p className="text-[8px] font-bold text-slate-500 uppercase">T.Lời Ngắn</p>
              </div>
            </div>
          </div>
        </div>

        {/* Thông tin điểm số (Tùy chọn) */}
        <p className="text-[9px] font-bold text-blue-400 italic">
          * Ma trận đề thầy cô có thể tạo theo ý muốn khi đăng ký app.
        </p>
      </div>
    )}
  </div>
</div>

        {/* Cột 3 */}
        <div className="space-y-6">
          <h3 className="text-xl font-black text-slate-800 uppercase flex items-center gap-2 border-l-8 border-blue-600 pl-4">Phạm Vi Kiến Thức</h3>
          <div className="bg-slate-50 rounded-[2.5rem] p-6 border border-slate-200 h-[400px] overflow-y-auto shadow-inner no-scrollbar">
            {currentCodeDef?.topics === 'manual' ? (
              <div className="space-y-4">
                <p className="text-[10px] font-black text-slate-400 uppercase border-b pb-2 mb-4">Lựa chọn chuyên đề liên quan</p>
                {combinedTopics.map(t => (
                  <label key={t.id} className={`flex items-start gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer shadow-sm ${selectedTopics.includes(t.id) ? 'bg-blue-600 border-blue-700 text-white' : 'bg-white border-white'}`}>
                    <input type="checkbox" className="hidden" checked={selectedTopics.includes(t.id)} onChange={() => setSelectedTopics(prev => prev.includes(t.id) ? prev.filter(i => i !== t.id) : [...prev, t.id])} />
                    <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 mt-0.5 ${selectedTopics.includes(t.id) ? 'bg-white border-white text-blue-600' : 'bg-slate-50 border-slate-200'}`}>
                      {selectedTopics.includes(t.id) && <i className="fas fa-check text-xs"></i>}
                    </div>
                    <span className="text-[11px] font-black leading-tight">
                      <span className={`inline-block px-1.5 py-0.5 rounded text-[9px] mr-2 uppercase ${selectedTopics.includes(t.id) ? 'bg-blue-500' : 'bg-slate-200 text-slate-600'}`}>K{t.grade}</span>
                      {t.name}
                    </span>
                  </label>
                ))}
              </div>
            ) : (
              <div className="p-4 space-y-4">
                {(currentCodeDef?.topics as number[])?.map(tid => {
                  const topic = TOPICS_DATA[Math.floor(tid/100)]?.find(t => t.id === tid);
                  return topic ? (
                    <div key={tid} className="p-5 bg-white rounded-3xl border border-blue-50 shadow-sm flex items-center gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-xs shrink-0">{tid}</div>
                      <p className="text-[11px] font-black text-blue-900 leading-tight">{topic.name}</p>
                    </div>
                  ) : null;
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-10 border-t bg-slate-50 flex justify-center">
        <button onClick={handleStart} disabled={!verifiedStudent || !selectedCode} className="w-full max-w-2xl py-6 bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-[2rem] font-black text-2xl hover:scale-[1.02] transition-all shadow-2xl disabled:opacity-50 active:scale-95 uppercase border-b-8 border-blue-950 flex items-center justify-center gap-4">
          <i className="fas fa-play-circle text-4xl"></i> BẮT ĐẦU LÀM BÀI
        </button>
      </div>
    </div>
  );
};

export default ExamPortal;
