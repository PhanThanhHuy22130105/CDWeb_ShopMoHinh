import React from 'react';
import { Heart, Search, Shuffle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, price, oldPrice, image, hoverImage, isNew, inStock = true }) => {
  // Dữ liệu ảnh mẫu
  const defaultImg = image || "https://bizweb.dktcdn.net/thumb/large/100/382/833/products/2-ec9ce41a-b1db-4b50-990d-f870540aa530.jpg";
  const hoverImg = hoverImage || "https://bizweb.dktcdn.net/thumb/large/100/382/833/products/3-ec9ce41a-b1db-4b50-990d-f870540aa530.jpg";

  return (
    <div className="bg-white rounded-sm border border-gray-200 hover:border-accent-red transition-all duration-300 group relative overflow-hidden flex flex-col h-full shadow-sm hover:shadow-lg">

      {/* Nút Yêu thích nổi góc trên */}
      <button className="absolute top-3 right-3 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-accent-red hover:text-white transition-colors text-gray-500">
        <Heart size={20} />
      </button>

      {/* KHỐI HÌNH ẢNH */}
      <Link to={`/product/${id}`} className="relative w-full aspect-square bg-black overflow-hidden z-0">
        {isNew && (
          <span className="absolute top-2 left-2 bg-accent-red text-white text-[10px] font-bold px-2 py-1 rounded-sm z-10 font-mono tracking-wider shadow-sm">
            NEW
          </span>
        )}

        {/* Ảnh 1: Hiện mặc định */}
        <img
          src={defaultImg}
          alt={name}
          className="absolute inset-0 w-full h-full object-contain transition-all duration-500 opacity-100 group-hover:opacity-0"
        />

        {/* Ảnh 2: Khi hover sẽ hiện lên */}
        <img
          src={hoverImg}
          alt={name}
          className="absolute inset-0 w-full h-full object-contain transition-all duration-500 opacity-0 group-hover:opacity-100 transform scale-100 group-hover:scale-90 group-hover:-translate-y-3"
        />
      </Link>

      <div className="p-4 bg-white relative z-10 flex flex-col flex-1 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-[52px]">
        <Link to={`/product/${id}`}>
          <h3 className="text-gray-800 font-medium text-sm hover:text-accent-red transition-colors line-clamp-2 h-[40px] leading-tight">
            {name}
          </h3>
        </Link>

        <div className="mt-2 flex items-end gap-3">
          <span className="text-accent-red font-bold text-lg font-sans">
            {price}₫
          </span>
          {oldPrice && (
            <span className="text-gray-400 text-sm line-through font-sans mb-[2px]">
              {oldPrice}₫
            </span>
          )}
        </div>

        <p className="text-gray-600 text-sm mt-3">
          Tình trạng: {inStock ? 'Còn hàng' : 'Hết hàng'}
        </p>
      </div>

      <div className="absolute bottom-4 left-0 w-full px-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none group-hover:pointer-events-auto">
        <button
          onClick={(e) => {
            e.preventDefault();
            // Xử lý logic Add to Cart ở đây
          }}
          className="flex-1 bg-accent-red hover:bg-[#d6002d] text-white h-10 rounded-sm font-bold text-sm transition-colors"
        >
          Thêm vào giỏ
        </button>

        <button
          onClick={(e) => e.preventDefault()}
          className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-accent-red hover:text-accent-red rounded-sm transition-colors text-gray-700 bg-white"
        >
          <Shuffle size={18} />
        </button>

        <button
          onClick={(e) => e.preventDefault()}
          className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-accent-red hover:text-accent-red rounded-sm transition-colors text-gray-700 bg-white"
        >
          <Search size={18} />
        </button>
      </div>

    </div>
  );
};

export default ProductCard;