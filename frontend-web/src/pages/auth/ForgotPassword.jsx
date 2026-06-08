import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, Send } from 'lucide-react';

const ForgotPassword = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-bg-surface border border-brand-gray p-8 rounded-sm shadow-xl">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-brand-dark uppercase tracking-widest font-mono">
            Recover <span className="text-accent-red">Access</span>
          </h2>
          <p className="text-brand-slate text-sm mt-2">Hệ thống sẽ gửi mã khôi phục qua email của bạn</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-brand-slate uppercase mb-2 tracking-widest">Nhập Email Pilot</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-gray"><Mail size={18} /></div>
              <input type="email" className="block w-full pl-10 pr-3 py-3 bg-white border border-brand-gray text-text-main text-sm focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition-colors" placeholder="pilot@c3gundam.com" />
            </div>
          </div>

          <button className="w-full bg-accent-red hover:bg-[#d6002d] text-white font-black py-4 uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-md">
            <Send size={18} /> Gửi mã xác nhận
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link to="/login" className="text-sm text-brand-slate hover:text-accent-red flex items-center justify-center gap-2 transition-colors">
            <ArrowLeft size={16} /> Quay lại đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;