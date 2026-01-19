import React, { useState } from 'react';
import { DEFAULT_API_URL, ADMIN_CONFIG } from '../config';

interface VipModalProps {
  user: any;
  onClose: () => void;
}

const VipModal: React.FC<VipModalProps> = ({ user, onClose }) => {
  const [step, setStep] = useState<'benefits' | 'form'>('benefits');
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState({
    name: '',
    class: '',
    school: ''
  });

  const benefits = [
    { icon: 'fa-infinity', title: 'Không giới hạn', desc: 'Làm bài kiểm tra & QuiZ không giới hạn số lượt mỗi ngày.' },
    { icon: 'fa-file-pdf', title: 'Tải tài liệu', desc: 'Tải file PDF đề thi và lời giải chi tiết ngay sau khi làm.' },
    { icon: 'fa-robot', title: 'Trợ lý AI Pro', desc: 'Sử dụng trợ lý học tập thông minh không bị giới hạn câu hỏi.' },
    { icon: 'fa-medal', title: 'Bảng vàng VIP', desc: 'Tên nổi bật lấp lánh trên bảng xếp hạng Top 10 toàn quốc.' }
  ];

  const handleRegisterVip = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return alert("Vui lòng đăng nhập trước khi đăng ký VIP!");
    
    setLoading(true);
    try {
      const res = await fetch(DEFAULT_API_URL, {
        method: 'POST',
        body: JSON.stringify({
          type: 'requestVip',
          phone: user.phoneNumber,
          ...info
        })
      });
      const data = await res.json();
      if (data.status === 'success') {
        alert("Gửi yêu cầu thành công! Thầy cô sẽ duyệt VIP cho em trong vòng 24h.");
        onClose();
      }
    } catch (e) {
      alert("Lỗi kết nối!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-md">
      <div className="bg-white w-full max-w-lg rounded-[3rem] overflow-hidden shadow-2xl animate-scale-up border-4 border-amber-400">
        
        {/* Header lấp lánh */}
        <div className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 p-8 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
             <div className="absolute top-[-20px] left-[-20px] w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>
          <i className="fas fa-crown text-4xl mb-2 drop-shadow-lg"></i>
          <h2 className="text-3xl font-black uppercase tracking-tighter italic">Nâng Cấp VIP1</h2>
          <p className="text-[10px] font-bold opacity-90 uppercase tracking-[0.3em]">Đặc quyền cao cấp dành cho cao thủ</p>
        </div>

        <div className="p-8">
          {step === 'benefits' ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-orange-50 rounded-2xl border border-orange-100 group hover:bg-white hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-500 shadow-sm group-hover:scale-110 transition-transform">
                      <i className={`fas ${b.icon} text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-800 uppercase">{b.title}</h4>
                      <p className="text-[10px] text-slate-500 font-medium">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => user ? setStep('form') : alert("Vui lòng đăng nhập trước!")}
                  className="w-full py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl font-black shadow-xl shadow-orange-200 uppercase tracking-widest text-sm hover:brightness-110 transition-all active:scale-95"
                >
                  Sẵn sàng đăng ký VIP
                </button>
                <button onClick={onClose} className="text-slate-400 text-[10px] font-black uppercase">Đóng lại</button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleRegisterVip} className="space-y-4 animate-fade-in">
              <p className="text-center font-bold text-slate-600 text-sm mb-4 italic">Bổ sung thông tin để Admin duyệt VIP</p>
              
              <input required placeholder="Họ và tên chính xác" className="w-full p-4 bg-slate-50 rounded-2xl font-bold border-2 border-transparent focus:border-amber-400 outline-none" 
                value={info.name} onChange={e => setInfo({...info, name: e.target.value})} />

              <div className="grid grid-cols-2 gap-3">
                 <select required className="p-4 bg-slate-50 rounded-2xl font-bold border-2 border-transparent"
                  onChange={e => setInfo({...info, class: e.target.value})}>
                  <option value="">Chọn lớp</option>
                  {(ADMIN_CONFIG.CLASS_ID || []).map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <input required placeholder="Trường học" className="p-4 bg-slate-50 rounded-2xl font-bold border-2 border-transparent focus:border-amber-400 outline-none"
                  value={info.school} onChange={e => setInfo({...info, school: e.target.value})} />
              </div>

              <div className="p-4 bg-blue-50 rounded-2xl text-blue-700 text-[10px] font-bold">
                <i className="fas fa-info-circle mr-2"></i>
                Hệ thống đang kết nối với SĐT: <span className="underline">{user?.phoneNumber}</span>
              </div>

              <button disabled={loading} className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black shadow-xl uppercase tracking-widest text-sm">
                {loading ? 'ĐANG GỬI YÊU CẦU...' : 'XÁC NHẬN GỬI ADMIN'}
              </button>
              <button type="button" onClick={() => setStep('benefits')} className="w-full text-slate-400 text-[10px] font-black uppercase">Quay lại</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default VipModal;
