
import React, { useState } from 'react';
/* Added DANHGIA_URL to imports to fix missing name error on line 27 */
import { DEFAULT_API_URL, DANHGIA_URL } from '../config';

interface AuthModalProps {
  onClose: () => void;
  onSuccess: (userData: any) => void;
}

const AuthModal = ({ onClose, onSuccess }: { onClose: () => void, onSuccess: (u: any) => void }) => {
  const [isRegisterMode, setIsRegisterMode] = useState(false); // Chuyển đổi giữa Đăng nhập/Đăng ký
 // 1. Khai báo các biến như bạn yêu cầu
const [accountInfo, setAccountInfo] = useState({ phone: '', pass: '' });
const [accountVipInfo, setAccountVipInfo] = useState({ phone: '', pass: '', vip: '' });
const [loading, setLoading] = useState(false);

// 2. Hàm xử lý Xác minh (Đăng ký & Đăng nhập)
const handleAuthSubmit = async (mode: 'login' | 'register') => {
  if (!accountInfo.phone || !accountInfo.pass) {
    alert("Em vui lòng nhập đầy đủ SĐT và mật khẩu nhé!");
    return;
  }
  
  setLoading(true);
  try {
    const type = mode === 'register' ? 'register' : 'checkLogin';
    // Gửi yêu cầu qua GET để nhận phản hồi Đúng/Sai từ Google
    const response = await fetch(`${DANHGIA_URL}?type=${type}&phone=${accountInfo.phone}&pass=${accountInfo.pass}`);
    const result = await response.json();

    if (result.status === "success") {
      alert(result.message);
      
      if (mode === 'login') {
        // ĐĂNG NHẬP THÀNH CÔNG: Lưu thông tin vào accountVipInfo để sẵn sàng nâng cấp
        setAccountVipInfo({ 
          phone: result.data.phone, 
          pass: accountInfo.pass, 
          vip: result.data.vip 
        });
        
        // Gọi hàm onSuccess của App để vào giao diện chính
        onSuccess({
          phoneNumber: result.data.phone,
          vip: result.data.vip
        });
      } else {
        // ĐĂNG KÝ THÀNH CÔNG: Chuyển về tab Đăng nhập
        setIsRegisterMode(false);
      }
    } else {
      // ĐÂY LÀ CHỖ CHẶN: Nếu sai pass hoặc trùng SĐT, nó sẽ hiện lỗi và KHÔNG cho vào
      alert("⚠️ " + result.message);
    }
  } catch (error) {
    alert("Lỗi kết nối. Em kiểm tra mạng hoặc thử lại nhé!");
  } finally {
    setLoading(false);
  }
};
/* Added missing closing bracket for the component */
return null; // Component UI not fully provided in snippet, but export must work
};

 export default AuthModal;
