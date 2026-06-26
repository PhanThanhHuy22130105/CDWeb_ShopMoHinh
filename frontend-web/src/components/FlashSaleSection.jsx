import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';

const FlashSaleSection = ({ products, viewAllLink }) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 mb-12">
      <div className="bg-[#b91c1c] rounded-md p-4 md:p-6 shadow-lg">
        
        {/* Header của Flash Sale */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-red-500/50 pb-4">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-black italic text-white uppercase flex items-center gap-2 tracking-widest">
              <Zap size={32} className="text-yellow-400 fill-yellow-400" />
              Flash Sale
            </h2>
            <span className="hidden md:block text-red-100 text-sm font-medium">
              Thời gian khuyến mãi: <span className="font-bold text-white">Đang diễn ra</span>
            </span>
          </div>

          <Link 
            to={viewAllLink} 
            className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors font-bold text-sm"
          >
            Xem tất cả <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Dải chữ chạy liên tục (Marquee) */}
        <div className="mt-6 bg-white rounded-sm py-2 overflow-hidden flex whitespace-nowrap relative">
          <style>
            {`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee-fast {
                display: flex;
                animation: marquee 15s linear infinite;
              }
            `}
          </style>
          
          <div className="animate-marquee-fast">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 mx-4">
                <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold rounded-sm uppercase italic">
                  Flash Sale
                </span>
                <span className="text-gray-800 font-bold uppercase tracking-wider text-sm">
                  Khuyến mãi tưng bừng
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FlashSaleSection;