import React, { useState } from 'react';
import { Facebook, Twitter, MessageCircle, Send, Star } from 'lucide-react';
import RatingModal from './RatingModal';

const Footer: React.FC = () => {
  const [isRatingOpen, setIsRatingOpen] = useState(false);

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">THẦY HÀ - BẮC NINH</h2>
            <p className="text-gray-400">Đồng hành cùng các em trên con đường chinh phục tri thức.</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
             <button 
              onClick={() => setIsRatingOpen(true)}
              className="flex items-center gap-2 bg-yellow-600/10 hover:bg-yellow-600/20 text-yellow-500 border border-yellow-600/20 px-4 py-2 rounded-full text-sm font-bold transition-all"
            >
              <Star size={16} fill="currentColor" /> Đánh giá web
            </button>
            
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/hoctoanthayha.bg" target="_blank" rel="noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-lg">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/Math_teacher_Ha" target="_blank" rel="noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-sky-500 hover:text-white transition-all shadow-lg">
                <Twitter size={20} />
              </a>
              <a href="https://t.me" target="_blank" rel="noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-blue-400 hover:text-white transition-all shadow-lg">
                <Send size={20} />
              </a>
              <a href="https://zalo.me" target="_blank" rel="noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-blue-500 hover:text-white transition-all shadow-lg flex items-center justify-center font-bold text-[10px]">
                Zalo
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>Liên hệ thầy Hà để tham gia nhóm học tập. Phone: 0988.948.882. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <span className="hover:text-white cursor-pointer transition-colors">Điều khoản sử dụng</span>
             <span className="hover:text-white cursor-pointer transition-colors">Chính sách bảo mật</span>
          </div>
        </div>
      </div>

      <RatingModal isOpen={isRatingOpen} onClose={() => setIsRatingOpen(false)} />
    </footer>
  );
};

export default Footer;
