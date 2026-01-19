import React, { useState } from 'react';
import { X, Star, Users } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

interface RatingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Hàm tạo hiệu ứng pháo hoa chúc mừng
const fireConfetti = () => {
  const emojis = ['🎉', '✨', '⭐', '❤️', '🔥'];
  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement('div');
    confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    // Style trực tiếp để không cần file CSS bên ngoài
    confetti.style.position = 'fixed';
    confetti.style.top = '-20px';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.fontSize = '24px';
    confetti.style.zIndex = '999';
    confetti.style.pointerEvents = 'none';
    confetti.style.transition = 'transform 5s linear, opacity 5s';
    
    document.body.appendChild(confetti);
    
    // Tạo hiệu ứng rơi ngay lập tức
    setTimeout(() => {
      confetti.style.transform = `translateY(110vh) rotate(${Math.random() * 360}deg)`;
      confetti.style.opacity = '0';
    }, 100);

    // Xóa emoji sau khi rơi xong
    setTimeout(() => confetti.remove(), 5000);
  }
};

const RatingModal: React.FC<RatingModalProps> = ({ isOpen, onClose }) => {
  const { ratingData, addRating } = useApp();
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [hasRated, setHasRated] = useState(false);

  if (!isOpen) return null;

  const handleRate = (stars: number) => {
    addRating(stars);
    setHasRated(true);
    
    // GỌI HIỆU ỨNG Ở ĐÂY (Bạn đã xóa nhầm chỗ này)
    if (stars >= 4) fireConfetti(); 

    setTimeout(() => {
      onClose();
      // Reset lại trạng thái để lần sau mở ra vẫn đánh giá được
      setTimeout(() => setHasRated(false), 300);
    }, 3000); // Tăng lên 3s để các em kịp nhìn thông báo cảm ơn
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md relative overflow-hidden animate-fade-in border border-white">
        
        {/* Nút đóng */}
        <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full z-10 text-gray-400">
          <X size={24} />
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-2 uppercase tracking-tighter">Đánh giá hệ thống</h2>
            <div className="flex items-center justify-center gap-2 text-yellow-500 mb-1">
              <Star size={28} fill="currentColor" />
              <span className="text-4xl font-black text-gray-900">{ratingData.average.toFixed(1)}</span>
            </div>
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-1">
              <Users size={12} /> {ratingData.total} học sinh đã tham gia
            </p>
          </div>

          {!hasRated ? (
            <>
              {/* Khu vực chọn sao */}
              <div className="flex justify-center gap-3 mb-10">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(null)}
                    onClick={() => handleRate(star)}
                    className="transition-all hover:scale-125 active:scale-90"
                  >
                    <Star
                      size={42}
                      fill={(hoveredStar !== null ? star <= hoveredStar : false) ? "#eab308" : "none"}
                      className={(hoveredStar !== null ? star <= hoveredStar : false) ? "text-yellow-500" : "text-gray-200"}
                      strokeWidth={2}
                    />
                  </button>
                ))}
              </div>

              {/* Bảng chi tiết tỉ lệ % */}
              <div className="space-y-3 bg-gray-50 p-5 rounded-3xl border border-gray-100">
                {[5, 4, 3, 2, 1].map(star => {
                  const count = ratingData.breakdown[star] || 0;
                  const percentage = ratingData.total > 0 ? (count / ratingData.total) * 100 : 0;
                  return (
                    <div key={star} className="flex items-center gap-3">
                      <span className="text-[10px] font-black text-gray-400 w-4">{star}★</span>
                      <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-yellow-400 rounded-full transition-all duration-1000" 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 w-8 text-right">{Math.round(percentage)}%</span>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            /* Thông báo cảm ơn */
            <div className="py-10 text-center animate-bounce-slow">
              <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                <Star size={40} fill="currentColor" />
              </div>              
              <p className="font-black text-gray-900 uppercase tracking-tighter text-xl">Bạn quá tuyệt vời ❤️</p>
              <p className="text-gray-500 font-bold text-sm">Cảm ơn em đã đóng góp ý kiến nhé!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RatingModal;
