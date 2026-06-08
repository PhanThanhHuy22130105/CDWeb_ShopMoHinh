import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom'; 

const ProductCard = ({ id, name, price, oldPrice, image, isNew }) => {
  return (
    <Link 
      to={`/product/${id}`} 
      className="bg-bg-surface rounded-sm border border-brand-gray hover:border-accent-red transition-all duration-300 group overflow-hidden flex flex-col h-full cursor-pointer shadow-md hover:shadow-xl block"
    >
      
      {/* Khối Hình Ảnh */}
      <div className="relative aspect-square overflow-hidden bg-white p-4 flex items-center justify-center border-b border-brand-gray/30">
        {isNew && (
          <span className="absolute top-2 left-2 bg-accent-red text-white text-[10px] font-bold px-2 py-1 rounded-sm z-10 font-mono tracking-wider shadow-sm">
            NEW
          </span>
        )}
        <img 
          src={image || "https://bizweb.dktcdn.net/thumb/large/100/382/833/products/2-ec9ce41a-b1db-4b50-990d-f870540aa530.jpg?v=1778580781213"} 
          alt={name} 
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Khối Thông Tin */}
      <div className="p-4 flex flex-col flex-1 bg-bg-surface">
        <h3 className="text-text-main font-bold text-sm hover:text-accent-red transition-colors line-clamp-2 flex-1 h-[40px] leading-tight">
          {name}
        </h3>
        
        <div className="mt-4 flex items-end justify-between border-t border-brand-gray/50 pt-3">
          <div className="flex flex-col">
            {oldPrice && (
              <span className="text-brand-slate text-xs line-through font-mono">
                {oldPrice}đ
              </span>
            )}
            <span className="text-accent-red font-bold text-lg font-mono">
              {price}đ
            </span>
          </div>
          
          <button 
            onClick={(e) => e.preventDefault()} 
            className="bg-brand-blue hover:bg-brand-teal text-white p-2 rounded-sm transition-colors shadow-sm"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
      
    </Link>
  );
};

export default ProductCard;