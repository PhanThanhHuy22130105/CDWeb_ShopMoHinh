import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, ShieldCheck, UserPlus, Phone, Fingerprint } from 'lucide-react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Mật khẩu xác nhận không khớp!');
      return;
    }
    if (!agreeTerms) {
      setError('Bạn cần đồng ý với các điều khoản phục vụ!');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, fullName, email, password, phone }),
      });

      const textData = await response.text(); 

      if (response.ok) {
        setSuccess('Ghi danh thành công! Đang chuyển hướng đến trạm đăng nhập...');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setError(textData || 'Đăng ký thất bại!');
      }
    } catch (err) {
      setError('Không thể kết nối đến trạm máy chủ!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-bg-surface border border-brand-gray p-8 rounded-sm shadow-xl relative">
        <div className="absolute bottom-0 right-0 w-1 h-12 bg-accent-red"></div>
        <div className="absolute bottom-0 right-0 w-12 h-1 bg-accent-red"></div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-brand-dark uppercase tracking-widest font-mono">
            Pilot <span className="text-accent-red">Enlistment</span>
          </h2>
          <p className="text-brand-slate text-sm mt-2">Ghi danh vào hạm đội Hobby Gundam</p>
        </div>

        <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Pilot ID */}
          <div>
            <label className="block text-xs font-bold text-brand-slate uppercase mb-2 tracking-widest">Pilot ID</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-gray"><Fingerprint size={18} /></div>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="block w-full pl-10 pr-3 py-3 bg-white border border-brand-gray text-text-main text-sm focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition-colors" 
                placeholder="amuro_ray93" 
              />
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-brand-slate uppercase mb-2 tracking-widest">Họ và tên</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-gray"><User size={18} /></div>
              <input 
                type="text" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="block w-full pl-10 pr-3 py-3 bg-white border border-brand-gray text-text-main text-sm focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition-colors" 
                placeholder="Amuro Ray" 
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-brand-slate uppercase mb-2 tracking-widest">Email liên lạc</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-gray"><Mail size={18} /></div>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full pl-10 pr-3 py-3 bg-white border border-brand-gray text-text-main text-sm focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition-colors" 
                placeholder="pilot@hobbygundam.com" 
              />
            </div>
          </div>

          {/* Số điện thoại */}
          <div>
            <label className="block text-xs font-bold text-brand-slate uppercase mb-2 tracking-widest">Số điện thoại</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-gray"><Phone size={18} /></div>
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="block w-full pl-10 pr-3 py-3 bg-white border border-brand-gray text-text-main text-sm focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition-colors" 
                placeholder="0987654321" 
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-bold text-brand-slate uppercase mb-2 tracking-widest">Mật khẩu</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-gray"><Lock size={18} /></div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full pl-10 pr-3 py-3 bg-white border border-brand-gray text-text-main text-sm focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition-colors" 
                placeholder="••••••••" 
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-bold text-brand-slate uppercase mb-2 tracking-widest">Xác nhận lại</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-gray"><ShieldCheck size={18} /></div>
              <input 
                type="password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="block w-full pl-10 pr-3 py-3 bg-white border border-brand-gray text-text-main text-sm focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition-colors" 
                placeholder="••••••••" 
              />
            </div>
          </div>

          <div className="md:col-span-2 flex items-center gap-2">
            <input 
              type="checkbox" 
              id="terms" 
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="accent-accent-red w-4 h-4 cursor-pointer" 
            />
            <label htmlFor="terms" className="text-xs text-brand-slate cursor-pointer">Tôi đồng ý với các điều khoản phục vụ và chính sách bảo mật của Pilot.</label>
          </div>

          {/* Vùng hiển thị lỗi/Thành công */}
          {error && <div className="md:col-span-2 text-accent-red text-sm font-bold text-center animate-pulse">{error}</div>}
          {success && <div className="md:col-span-2 text-green-600 text-sm font-bold text-center">{success}</div>}

          <button 
            type="submit" 
            disabled={isLoading}
            className="md:col-span-2 disabled:bg-gray-400 disabled:cursor-not-allowed bg-accent-red hover:bg-[#d6002d] text-white font-black py-4 uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,71,87,0.3)]"
          >
            <UserPlus size={20} /> {isLoading ? 'Đang xử lý...' : 'Hoàn tất ghi danh'}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-brand-slate">
          Đã là thành viên Pilot?{' '}
          <Link to="/login" className="text-accent-red font-bold hover:underline uppercase">Đăng nhập</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;