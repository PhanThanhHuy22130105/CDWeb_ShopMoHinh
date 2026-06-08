import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Heart, ShoppingCart, ChevronDown, LogIn, UserPlus } from 'lucide-react';
import headerImg from "../assets/Gemini_Generated_Image_uuzjytuuzjytuuzj.png";
const Header = () => {
  return (
    <header 
      className="w-full bg-cover bg-center bg-no-repeat border-b border-brand-slate py-5 relative"
      style={{ backgroundImage: `url(${headerImg})` }} 
    >
      <div className="absolute inset-0 bg-brand-dark/60"></div>
      <div className="max-w-[1440px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* 1. Logo */}
        <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 border-2 border-white transform rotate-45 flex items-center justify-center">
              <div className="w-6 h-6 bg-accent-red transform -rotate-45"></div>
            </div>
            <span className="text-2xl font-black text-white tracking-widest uppercase ml-2 font-mono">
              C3 <span className="text-accent-red">Gundam</span>
            </span>
          </Link>
        </div>

        {/* 2. Thanh tìm kiếm */}
        <div className="flex-1 w-full max-w-2xl flex">
          <input 
            type="text" 
            placeholder="Tìm sản phẩm..." 
            className="w-full bg-white text-black py-2.5 px-4 rounded-l-sm focus:outline-none focus:ring-2 focus:ring-accent-red"
          />
          <button className="bg-accent-red hover:bg-[#d6002d] text-white px-6 rounded-r-sm transition-colors flex items-center justify-center">
            <Search size={20} />
          </button>
        </div>

        {/* 3. Account & Cart */}
        <div className="flex items-center gap-6 text-white">
          
          {/* Tài khoản - Dropdown Menu */}
          <div className="relative group cursor-pointer z-50">
            <div className="flex items-center gap-3 group-hover:text-accent-red transition-colors py-2">
              <User size={28} className="text-brand-gray group-hover:text-accent-red transition-colors" />
              <div className="flex flex-col text-sm">
                <span className="flex items-center gap-1 text-brand-gray group-hover:text-accent-red transition-colors">
                  Tài khoản <ChevronDown size={14} />
                </span>
                <span className="font-bold text-white">Đăng nhập ngay</span>
              </div>
            </div>

            {/* Vùng ẩn hiện khi Hover */}
            <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="absolute -top-2 right-12 w-4 h-4 bg-white transform rotate-45 border-l border-t border-gray-200 z-0"></div>
              
              <div className="flex flex-col p-3 relative z-10 gap-2">
                <Link 
                  to="/login" 
                  className="flex items-center gap-2 px-3 py-2.5 text-text-main hover:bg-gray-100 hover:text-accent-red rounded-sm transition-colors text-sm font-bold"
                >
                  <LogIn size={18} /> Đăng nhập
                </Link>
                <Link 
                  to="/register" 
                  className="flex items-center gap-2 px-3 py-2.5 bg-accent-red text-white hover:bg-[#d6002d] rounded-sm transition-colors text-sm font-bold shadow-sm"
                >
                  <UserPlus size={18} /> Đăng ký
                </Link>
              </div>
            </div>
          </div>

          {/* Icon Yêu thích */}
          <Heart size={24} className="text-brand-gray hover:text-accent-red cursor-pointer transition-colors" />

          {/* Giỏ hàng */}
          <Link to="/cart" className="relative cursor-pointer group flex items-center gap-2">
            <div className="relative">
              <ShoppingCart size={28} className="text-white group-hover:text-accent-red transition-colors" />
              <span className="absolute -top-2 -right-2 bg-accent-red text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-brand-dark">
                0
              </span>
            </div>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;