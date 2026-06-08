import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-bg-surface border border-brand-gray p-8 rounded-sm shadow-xl relative overflow-hidden group">
        {/* Đường kẻ trang trí HUD */}
        <div className="absolute top-0 left-0 w-1 h-12 bg-accent-red"></div>
        <div className="absolute top-0 left-0 w-12 h-1 bg-accent-red"></div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-brand-dark uppercase tracking-widest font-mono">
            Pilot <span className="text-accent-red">Login</span>
          </h2>
          <p className="text-brand-slate text-sm mt-2">Nhập mã định danh để kết nối hệ thống</p>
        </div>

        <form className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-brand-slate uppercase mb-2 tracking-widest">Email / Pilot ID</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-gray">
                <Mail size={18} />
              </div>
              <input 
                type="email" 
                className="block w-full pl-10 pr-3 py-3 bg-white border border-brand-gray text-text-main text-sm focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition-colors"
                placeholder="pilot@c3gundam.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="block text-xs font-bold text-brand-slate uppercase tracking-widest">Password</label>
              <Link to="/forgot-password" size={24} className="text-xs text-accent-red hover:underline uppercase font-bold">Quên mật khẩu?</Link>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-gray">
                <Lock size={18} />
              </div>
              <input 
                type={showPassword ? "text" : "password"} 
                className="block w-full pl-10 pr-10 py-3 bg-white border border-brand-gray text-text-main text-sm focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition-colors"
                placeholder="••••••••"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-brand-gray hover:text-brand-dark"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-accent-red hover:bg-[#d6002d] text-white font-black py-4 uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,71,87,0.3)]">
            <LogIn size={20} /> Khởi động hệ thống
          </button>
        </form>

        {/* Hoặc đăng nhập bằng */}
        <div className="mt-8">
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-brand-gray"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="px-2 bg-bg-surface text-brand-slate font-bold">Hoặc kết nối qua</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-2.5 bg-white border border-brand-gray hover:bg-gray-50 transition-all text-text-main text-sm font-bold">
              <i className="fa-brands fa-google text-red-500"></i> Google
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 bg-white border border-brand-gray hover:bg-[#1877F2] hover:text-white transition-all text-text-main text-sm font-bold">
              <i className="fa-brands fa-facebook text-[#1877F2] hover:text-white"></i> Facebook
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-brand-slate">
          Chưa có tài khoản Pilot?{' '}
          <Link to="/register" className="text-accent-red font-bold hover:underline uppercase">Đăng ký ngay</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;