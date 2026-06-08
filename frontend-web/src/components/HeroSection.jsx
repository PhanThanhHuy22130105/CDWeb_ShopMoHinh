import React from 'react';
import { ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
const categories = [
    { name: 'Đặt Trước', path: 'preorder', isHot: true, icon: '🔥' },
    { name: 'Có Sẵn', path: 'cosan', isHot: true, icon: '📦' },
    { name: 'Gundam Bandai', path: 'gundam-bandai', hasSub: true },
    { name: 'Gundam Assemble', path: 'gundam-assemble', hasSub: true },
    { name: 'TCG Card', path: 'tcg-card', hasSub: true },
    { name: 'Pokemon', path: 'pokemon', hasSub: true },
    { name: 'Dòng Kit Khác', path: 'other-kits', hasSub: true },
    { name: 'Phụ Kiện', path: 'phu-kien' },
    { name: 'Khuyến Mãi', path: 'khuyen-mai', isHot: true, icon: '🎁' },
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 py-6">
      
      <div className="flex flex-col lg:flex-row gap-4">
        
{/* CỘT TRÁI: Sidebar */}
        <div className="hidden lg:block w-1/4 bg-bg-surface border border-brand-gray rounded-sm shadow-lg h-fit">
          <ul className="flex flex-col py-2 text-sm text-text-main font-medium">
            {categories.map((cat, idx) => (
              <li key={idx} className="border-b border-brand-gray/50 last:border-0">
                <Link 
                  to={`/collections/${cat.path}`} 
                  className={`flex items-center justify-between px-4 py-3 hover:bg-brand-gray/20 hover:text-accent-red transition-colors ${cat.isHot ? 'text-accent-red font-bold' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    {cat.icon && <span>{cat.icon}</span>}
                    <span>{cat.name}</span>
                  </div>
                  {cat.hasSub && <ChevronRight size={16} className="text-brand-slate" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CỘT GIỮA: Main Banner */}
        <div className="w-full lg:w-2/4 relative group cursor-pointer rounded-sm overflow-hidden border border-brand-gray">
          <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-brand-dark/50 hover:bg-accent-red text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all z-10 backdrop-blur-sm">
            <ArrowLeft size={20} />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-brand-dark/50 hover:bg-accent-red text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all z-10 backdrop-blur-sm">
            <ArrowRight size={20} />
          </button>
          
          <img 
            src="https://bizweb.dktcdn.net/100/382/833/themes/1088984/assets/slider_2.jpg?1777947443506" 
            alt="Main Banner" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* CỘT PHẢI: Sub Banners */}
        <div className="w-full lg:w-1/4 flex flex-col gap-4">
          <div className="flex-1 rounded-sm overflow-hidden border border-brand-gray cursor-pointer group">
            <img src="https://bizweb.dktcdn.net/100/382/833/themes/1088984/assets/banner_right_1.jpg?1777947443506" alt="Sub 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
          </div>
          <div className="flex-1 rounded-sm overflow-hidden border border-brand-gray cursor-pointer group">
            <img src="https://bizweb.dktcdn.net/100/382/833/themes/1088984/assets/banner_right_2.jpg?1777947443506" alt="Sub 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
          </div>
          <div className="flex-1 rounded-sm overflow-hidden border border-brand-gray cursor-pointer group">
            <img src="https://bizweb.dktcdn.net/100/382/833/themes/1088984/assets/banner_right_3.jpg?1777947443506" alt="Sub 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
          </div>
        </div>
        
      </div>

      {/* TẦNG 2: Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {[
          "BANDAI GUNPLA", 
          "GUNDAM CARD GAME", 
          "POKEMON KIT", 
          "30 MINUTES MISSIONS"
        ].map((title, idx) => (
          <div key={idx} className="relative h-24 md:h-32 rounded-sm overflow-hidden group cursor-pointer border border-brand-gray">
            {/* Lớp phủ đen trong suốt để nổi bật chữ */}
            <div className="absolute inset-0 bg-brand-dark/50 group-hover:bg-accent-red/40 transition-colors z-10"></div>
            
            <img 
              src={`https://bizweb.dktcdn.net/100/382/833/themes/1088984/assets/image_set_1.jpg?1777947443506text=${title.replace(/ /g, '+')}`} 
              alt={title} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            <div className="absolute inset-0 z-20 flex items-center justify-center p-2 text-center">
              <h3 className="text-white font-black font-mono tracking-wider text-sm md:text-base drop-shadow-md">
                {title}
              </h3>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default HeroSection;