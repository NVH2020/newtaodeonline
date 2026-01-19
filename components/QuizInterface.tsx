
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ExamConfig, Question, UserAnswer, ExamResult, Student } from '../types';
import MathText from './MathText';

interface QuizInterfaceProps {
  config: ExamConfig;
  student: Student;
  questions: Question[];
  onFinish: (result: ExamResult) => void;
  isQuizMode?: boolean;
}

const QuizInterface: React.FC<QuizInterfaceProps> = ({ config, student, questions, onFinish, isQuizMode = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>(
    questions.map(q => ({ 
      questionId: q.id, 
      answer: q.type === 'true-false' ? [undefined, undefined, undefined, undefined] : null 
    }))
  );
  const TOTAL_TIME = config.time * 60; // giây
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  
  const [tabSwitches, setTabSwitches] = useState(0);
  const hasFinished = useRef(false);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleSubmit = useCallback(() => {
    if (hasFinished.current) return;
    hasFinished.current = true;

    let score = 0;
    questions.forEach((q, idx) => {
      const u = answers[idx].answer;
      if (q.type === 'mcq' && u === q.a) score += config.mcqPoints;
      else if (q.type === 'short-answer' && u?.toString().trim().toLowerCase() === q.a?.toString().trim().toLowerCase()) score += config.saPoints;
      else if (q.type === 'true-false') {
        const correctCount = q.s!.reduce((acc, s, si) => acc + ((u as any)[si] === s.a ? 1 : 0), 0);
        score += config.tfPoints * ([0, 0.1, 0.25, 0.5, 1][correctCount] || 0);
      }
    });

    const elapsedSeconds = TOTAL_TIME - timeLeft;
    const timeDisplay = formatTime(elapsedSeconds);

    onFinish({ 
    type: isQuizMode ? 'quiz' : 'exam',
    timestamp: new Date().toISOString(), 
    examCode: "'" + config.id, 
    sbd: "'" + student.sbd, 
    name: student.name, 
    className: student.class,
    school: student.school,
    phoneNumber: "'" + student.phoneNumber,   
    score, 
    totalTime: elapsedSeconds, // timeDisplay
       // THÊM 2 DÒNG NÀY VÀO ĐÂY:
    stk: "'" + student.stk || "",
    bank: student.bank || "",
    // -----------------------
    tabSwitches,
    details: answers 
  });
  }, [answers, config, questions, student, timeLeft, tabSwitches, isQuizMode, onFinish]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabSwitches(prev => {
          const newCount = prev + 1;
          if (newCount >= student.limittab) {
            alert(`Cảnh báo: Bạn đã chuyển tab ${newCount} lần, vượt quá giới hạn (${student.limittab}). Hệ thống sẽ tự động nộp bài!`);
            handleSubmit();
          } else {
            alert(`Cảnh báo: Bạn đã chuyển tab ${newCount} lần. Nếu vượt quá ${student.limittab} lần, hệ thống sẽ tự nộp bài!`);
          }
          return newCount;
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [student.limittab, handleSubmit]);

  useEffect(() => {
    if (config.id === 'QUIZ' && config.time > 900) return; 
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) { clearInterval(timer); handleSubmit(); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [config.id, config.time, handleSubmit]);

  const isAnswered = (idx: number) => {
    const ans = answers[idx].answer;
    if (questions[idx].type === 'true-false') return (ans as any[]).some(v => v !== undefined);
    return ans !== null && ans !== "";
  };

  const getQuestionStyle = (idx: number) => {
    const answered = isAnswered(idx);
    if (answered) return "bg-blue-800 text-white border-blue-900 shadow-md";
    const q = questions[idx];
    const p = q.part.toUpperCase();
    if (p.includes("PHẦN I")) return "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200";
    if (p.includes("PHẦN II")) return "bg-pink-100 text-pink-700 border-pink-200 hover:bg-pink-200";
    if (p.includes("PHẦN III")) return "bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200";
    return "bg-slate-100 text-slate-500 border-slate-200";
  };

  const currentQuestion = questions[currentIndex];
  const pStr = currentQuestion.part.toUpperCase();
  const colorSet = pStr.includes("PHẦN I") ? { bg: "bg-blue-600", text: "text-blue-600" } : 
                   pStr.includes("PHẦN II") ? { bg: "bg-pink-600", text: "text-pink-600" } :
                   { bg: "bg-orange-600", text: "text-orange-600" };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 font-sans">
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100">
           <div className="space-y-3 mb-6">
              <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                 <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest">Tài khoản hiện tại</p>
                 <p className="font-black text-blue-700 truncate">{student.taikhoanapp || "FREE_USER"}</p>
              </div>
              <div className={`p-4 rounded-2xl border transition-colors ${tabSwitches > 0 ? 'bg-red-50 border-red-200' : 'bg-slate-50 border-slate-100'}`}>
                 <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Vi phạm chuyển tab</p>
                 <p className={`font-black ${tabSwitches > 0 ? 'text-red-600' : 'text-slate-700'}`}>{tabSwitches} / {student.limittab}</p>
              </div>
           </div>

          <div className="grid grid-cols-5 gap-2">
            {questions.map((_, i) => (
              <button key={i} onClick={() => setCurrentIndex(i)} className={`aspect-square rounded-xl font-black text-xs transition-all border-2 flex items-center justify-center ${getQuestionStyle(i)} ${currentIndex === i ? 'ring-4 ring-yellow-400 scale-110 z-10' : ''}`}>
                {i + 1}
              </button>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-[2rem] shadow-xl text-center border border-slate-100">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Thời gian còn lại</p>
          <p className={`text-4xl font-black ${timeLeft < 300 && config.time < 900 ? 'text-red-600 animate-pulse' : 'text-slate-800'}`}>
            {formatTime(timeLeft)}
          </p>
          <button onClick={() => confirm("Bạn có chắc chắn muốn nộp bài?") && handleSubmit()} className="w-full mt-6 py-4 bg-red-600 text-white rounded-2xl font-black shadow-lg hover:bg-red-700 transition active:scale-95 border-b-4 border-red-800 uppercase text-sm">Nộp Bài Thi</button>
        </div>
      </div>

     <div className="lg:col-span-3">
        {/* KHUNG CÂU HỎI CHÍNH - Thêm relative và overflow-hidden */}
        <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-50 min-h-[600px] flex flex-col animate-fade-in relative overflow-hidden" key={currentIndex}>
          
          {/* --- LỚP PHỦ WATERMARK BẢO MẬT (Nằm dưới nội dung) --- */}
          <div className="absolute inset-0 pointer-events-none z-0 flex flex-wrap justify-around align-content-around opacity-[0.07] select-none" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="text-slate-900 font-black text-lg p-10 whitespace-nowrap" style={{ transform: 'rotate(-25deg)' }}>
                {student.phoneNumber} - {student.name}
              </div>
            ))}
          </div>

          {/* --- NỘI DUNG CÂU HỎI (Nằm trên Watermark) --- */}
          <div className="relative z-10 flex flex-col flex-grow">
            <div className="mb-8">
              <div className="flex flex-col gap-2 mb-6">
                 <span className={`w-fit px-3 py-1 ${colorSet.bg} text-white text-[11px] font-black rounded shadow-md uppercase`}>ID: {currentQuestion.id}</span>
                 <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${colorSet.text}`}>{currentQuestion.part}</span>
              </div>
              <div className="text-xl md:text-2xl font-semibold text-slate-800 leading-relaxed">
                 <span className="text-blue-600 font-black mr-2 select-none">Câu {currentIndex+1}.</span>
                 <MathText content={currentQuestion.question} />
              </div>
            </div>

            <div className="flex-grow space-y-4">
              {/* Câu hỏi trắc nghiệm MCQ */}
              {currentQuestion.type === 'mcq' && currentQuestion.shuffledOptions?.map((opt, i) => (
                <label key={i} className={`flex items-center p-5 rounded-2xl border-2 transition-all cursor-pointer group ${answers[currentIndex].answer === opt ? 'border-blue-500 bg-blue-50/50' : 'border-slate-100 hover:border-blue-100 bg-slate-50/30'}`}>
                  <input type="radio" className="hidden" checked={answers[currentIndex].answer === opt} onChange={() => { const n = [...answers]; n[currentIndex].answer = opt; setAnswers(n); }} />
                  <span className={`w-10 h-10 rounded-full flex items-center justify-center font-black mr-4 border-2 transition-colors shrink-0 ${answers[currentIndex].answer === opt ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-300 border-slate-200 group-hover:border-blue-200'}`}>{String.fromCharCode(65+i)}</span>
                  <MathText className="text-base md:text-lg font-bold text-slate-700" content={opt} />
                </label>
              ))}
              
              {/* Câu hỏi trả lời ngắn */}
              {currentQuestion.type === 'short-answer' && (
                <input type="text" className="w-full p-5 border-2 border-blue-100 rounded-2xl font-black bg-slate-50 text-blue-900 outline-none" placeholder="Nhập đáp án của bạn...(dùng dấu chấm (.) thay dấu phẩy(,) nhé). Ví dụ: 6.04" value={answers[currentIndex].answer as string || ''} onChange={e => { const n = [...answers]; n[currentIndex].answer = e.target.value; setAnswers(n); }} />
              )}
              
              {/* Câu hỏi Đúng/Sai */}
              {currentQuestion.type === 'true-false' && currentQuestion.s?.map((s, si) => (
                <div key={si} className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 group hover:border-blue-200 transition-colors shadow-sm">
                  <div className="text-slate-700 font-bold text-base md:text-lg flex items-start flex-1">
                    <span className="text-blue-600 font-black mr-3">{String.fromCharCode(97+si)}.</span>
                    <MathText content={s.text} />
                  </div>
                  <div className="flex gap-2 shrink-0">
                    {[true, false].map(v => (
                      <button key={v?1:0} onClick={() => { const n = [...answers]; (n[currentIndex].answer as any)[si] = v; setAnswers(n); }} className={`px-6 py-2 rounded-xl font-black border-2 transition-all shadow-sm text-xs ${ (answers[currentIndex].answer as any)[si] === v ? (v ? 'bg-blue-600 text-white border-blue-600' : 'bg-red-600 text-white border-red-600') : 'bg-white text-slate-300 border-slate-200 hover:border-blue-100'}`}>
                        {v?'ĐÚNG':'SAI'}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Nút điều hướng */}
            <div className="mt-10 flex justify-between gap-4">
              <button disabled={currentIndex === 0} onClick={() => setCurrentIndex(p => p - 1)} className="flex-1 py-4 rounded-2xl font-black border-2 border-slate-100 text-slate-400 hover:text-blue-600 hover:border-blue-100 disabled:opacity-30 transition-all active:scale-95 text-xs uppercase">Câu Trước</button>
              <button disabled={currentIndex === questions.length - 1} onClick={() => setCurrentIndex(p => p + 1)} className="flex-1 py-4 rounded-2xl font-black border-2 border-slate-100 text-slate-400 hover:text-blue-600 hover:border-blue-100 disabled:opacity-30 transition-all active:scale-95 text-xs uppercase">Câu Tiếp</button>
            </div>
          </div> 
          {/* Hết phần z-10 */}

        </div>
      </div>
    </div>
  );
};

export default QuizInterface;
