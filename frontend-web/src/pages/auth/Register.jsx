import React from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, ShieldCheck, UserPlus } from 'lucide-react';

const Register = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-bg-surface border border-brand-gray p-8 rounded-sm shadow-xl relative">
        <div className="absolute bottom-0 right-0 w-1 h-12 bg-accent-red"></div>
        <div className="absolute bottom-0 right-0 w-12 h-1 bg-accent-red"></div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-brand-dark uppercase tracking-widest font-mono">
            Pilot <span className="text-accent-red">Enlistment</span>
          </h2>
          <p className="text-brand-slate text-sm mt-2">Ghi danh vào hạm đội C3 Gundam</p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-brand-slate uppercase mb-2 tracking-widest">Họ và tên</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-gray"><User size={18} /></div>
              <input type="text" className="block w-full pl-10 pr-3 py-3 bg-white border border-brand-gray text-text-main text-sm focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition-colors" placeholder="Amuro Ray" />
            </div>
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-brand-slate uppercase mb-2 tracking-widest">Email liên lạc</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-gray"><Mail size={18} /></div>
              <input type="email" className="block w-full pl-10 pr-3 py-3 bg-white border border-brand-gray text-text-main text-sm focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition-colors" placeholder="pilot@c3gundam.com" />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-bold text-brand-slate uppercase mb-2 tracking-widest">Mật khẩu</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-gray"><Lock size={18} /></div>
              <input type="password" className="block w-full pl-10 pr-3 py-3 bg-white border border-brand-gray text-text-main text-sm focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition-colors" placeholder="••••••••" />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-bold text-brand-slate uppercase mb-2 tracking-widest">Xác nhận lại</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-gray"><ShieldCheck size={18} /></div>
              <input type="password" className="block w-full pl-10 pr-3 py-3 bg-white border border-brand-gray text-text-main text-sm focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition-colors" placeholder="••••••••" />
            </div>
          </div>

          <div className="md:col-span-2 flex items-center gap-2">
            <input type="checkbox" id="terms" className="accent-accent-red w-4 h-4 cursor-pointer" />
            <label htmlFor="terms" className="text-xs text-brand-slate cursor-pointer">Tôi đồng ý với các điều khoản phục vụ và chính sách bảo mật của Pilot.</label>
          </div>

          <button className="md:col-span-2 bg-accent-red hover:bg-[#d6002d] text-white font-black py-4 uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,71,87,0.3)]">
            <UserPlus size={20} /> Hoàn tất ghi danh
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