import React from 'react';
import { Link } from 'react-router-dom'; // QUAN TRỌNG: Phải import Link
import { Menu, Gift } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-brand-gray shadow-sm hidden md:block relative z-40">
      <div className="max-w-[1440px] mx-auto flex items-center">
        
        {/* Nút Danh mục sản phẩm (Màu xanh navy) */}
        <div className="bg-brand-dark text-white flex items-center gap-3 px-6 py-3.5 cursor-pointer hover:bg-[#1a1c3d] transition-colors w-[25%] lg:w-1/4">
          <Menu size={20} />
          <span className="font-bold uppercase tracking-wider text-sm">Danh mục sản phẩm</span>
        </div>

        {/* CÁC MENU NGANG */}
        <div className="flex-1 px-4 lg:px-8 flex items-center justify-between">
          <ul className="flex items-center gap-6 lg:gap-8 text-sm text-brand-slate uppercase font-medium">
            <li>
              <Link to="/collections/preorder" className="hover:text-accent-red transition-colors font-bold text-text-main">
                Đặt Trước
              </Link>
            </li>
            <li>
              <Link to="/collections/cosan" className="hover:text-accent-red transition-colors">
                Có Sẵn
              </Link>
            </li>
            <li>
              <Link to="/collections/gundam-bandai" className="hover:text-accent-red transition-colors flex items-center gap-1">
                Gundam Bandai <span className="text-[10px]">▼</span>
              </Link>
            </li>
            <li>
              <Link to="/collections/gundam-assemble" className="hover:text-accent-red transition-colors flex items-center gap-1">
                Gundam Assemble <span className="text-[10px]">▼</span>
              </Link>
            </li>
            <li>
              <Link to="/collections/tcg-card" className="hover:text-accent-red transition-colors flex items-center gap-1">
                TCG Card <span className="text-[10px]">▼</span>
              </Link>
            </li>
            <li>
              <Link to="/collections/pokemon" className="hover:text-accent-red transition-colors flex items-center gap-1">
                Pokemon <span className="text-[10px]">▼</span>
              </Link>
            </li>
          </ul>

          <Link to="/collections/khuyen-mai" className="flex items-center gap-2 bg-accent-red/10 text-accent-red px-4 py-2 rounded-sm hover:bg-accent-red hover:text-white transition-colors cursor-pointer flex-shrink-0 ml-4">
            <Gift size={16} />
            <span className="font-bold text-sm">Khuyến mãi HOT</span>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;