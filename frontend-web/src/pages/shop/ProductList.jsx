import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Thêm useParams
import { ChevronRight, Plus, Filter, ArrowDownUp } from 'lucide-react';
import ProductCard from '../../components/ProductCard';

const ProductList = () => {
  // Lấy tham số category từ URL
  const { category } = useParams();

  // Từ điển dịch URL thành Tên hiển thị
  const categoryMap = {
    'preorder': 'Đặt trước (Preorder)',
    'cosan': 'Hàng có sẵn',
    'gundam-bandai': 'Gundam Bandai',
    'gundam-assemble': 'Gundam Assemble',
    'tcg-card': 'Thẻ bài TCG',
    'pokemon': 'Mô hình Pokemon',
    'other-kits': 'Dòng Kit Khác',
    'phu-kien': 'Phụ kiện',
    'khuyen-mai': 'Khuyến mãi HOT'
  };

  // Xác định tiêu đề sẽ hiển thị (nếu không có trong từ điển thì in mặc định)
  const displayTitle = categoryMap[category] || 'Danh mục sản phẩm';

  // Dữ liệu giả lập cho danh sách sản phẩm
  const products = [
    { id: 20, name: "GUNDAM ASSEMBLE Deluxe Set 02 [DX02]", price: "1.499.000", oldPrice: "", isNew: false, image: "https://bizweb.dktcdn.net/thumb/large/100/382/833/products/2-2c7b0231-7014-4cf5-b9f6-b09c97acb830.jpg?v=1779263750013" },
    { id: 21, name: "GUNDAM ASSEMBLE Deluxe Set 01 [DX01]", price: "999.000", oldPrice: "", isNew: false, image: "https://bizweb.dktcdn.net/thumb/large/100/382/833/products/2-39fd0153-38bb-4411-88e6-ac639b15fec7.jpg?v=1779263796757" },
    { id: 22, name: "GUNDAM ASSEMBLE Expansion Pack 05", price: "299.000", oldPrice: "", isNew: true, image: "https://bizweb.dktcdn.net/thumb/large/100/382/833/products/2-e0749269-c649-4440-aa6b-38660edb1dfb.jpg?v=1777039912547" },
    { id: 23, name: "GUNDAM ASSEMBLE Expansion Pack 04", price: "299.000", oldPrice: "", isNew: false, image: "https://bizweb.dktcdn.net/thumb/large/100/382/833/products/2-39889642-396f-47b4-aa21-bcd71a1ec5b0.jpg?v=1777039745503" },
    { id: 24, name: "GUNDAM ASSEMBLE Expansion Pack 03", price: "299.000", oldPrice: "", isNew: false, image: "https://bizweb.dktcdn.net/thumb/large/100/382/833/products/2-3ca06a7d-a7c0-4423-bd85-6752154646e6.jpg?v=1773843868070" },
    { id: 25, name: "GUNDAM ASSEMBLE Expansion Pack 02", price: "299.000", oldPrice: "", isNew: true, image: "https://bizweb.dktcdn.net/thumb/large/100/382/833/products/2-f5ba4982-7f57-491a-b405-0c3550c91ff0.jpg?v=1772963268350" },
    { id: 26, name: "GUNDAM ASSEMBLE Expansion Pack 01", price: "299.000", oldPrice: "", isNew: false, image: "https://bizweb.dktcdn.net/thumb/large/100/382/833/products/2-f92781e2-1ee1-4f77-9707-c7390f576dc5.jpg?v=1773843846810" },
    { id: 27, name: "GUNDAM ASSEMBLE Paint Pack 01 [PA01]", price: "399.000", oldPrice: "450.000", isNew: false, image: "https://bizweb.dktcdn.net/thumb/large/100/382/833/products/2-29b9f7c8-a06e-4ae8-90a1-2af31d855486.jpg?v=1773843901767" },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-6 font-sans">
      
      {/* Breadcrumb - HIỂN THỊ TÊN ĐỘNG */}
      <nav className="text-sm text-brand-slate mb-6 flex items-center gap-2">
        <Link to="/" className="hover:text-accent-red transition-colors">Trang chủ</Link>
        <span>&gt;</span>
        <span className="text-accent-red font-bold uppercase">{displayTitle}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* ================= CỘT TRÁI: SIDEBAR LỌC ================= */}
        <div className="w-full lg:w-1/4 flex flex-col gap-4">
          
          {/* Khối Danh mục sản phẩm - ĐÃ THAY BẰNG <Link> */}
          <div className="bg-white border border-brand-gray rounded-sm overflow-hidden shadow-sm">
            <div className="bg-accent-red text-white font-bold px-4 py-3 uppercase text-sm">
              Danh mục sản phẩm
            </div>
            <ul className="flex flex-col text-sm text-text-main font-medium">
              {[
                { name: 'Đặt Trước', path: 'preorder' },
                { name: 'Có Sẵn', path: 'cosan' }
              ].map((cat, idx) => (
                <li key={idx} className="border-b border-brand-gray/30 last:border-0">
                  <Link 
                    to={`/collections/${cat.path}`} 
                    className={`block px-4 py-3 hover:text-accent-red transition-colors ${category === cat.path ? 'text-accent-red font-bold' : ''}`}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}

              {[
                { name: 'Gundam Bandai', path: 'gundam-bandai' },
                { name: 'Gundam Assemble', path: 'gundam-assemble' },
                { name: 'TCG Card', path: 'tcg-card' },
                { name: 'Pokemon', path: 'pokemon' },
                { name: 'Dòng Kit Khác', path: 'other-kits' }
              ].map((cat, idx) => (
                <li key={idx} className="border-b border-brand-gray/30 last:border-0">
                  <Link 
                    to={`/collections/${cat.path}`} 
                    className={`flex items-center justify-between px-4 py-3 hover:text-accent-red transition-colors ${category === cat.path ? 'text-accent-red font-bold' : ''}`}
                  >
                    {cat.name} <Plus size={16} className="text-brand-slate" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Block Vàng: Bộ lọc sản phẩm */}
          <div className="bg-accent-yellow text-brand-dark p-4 rounded-sm shadow-sm">
            <h3 className="font-black uppercase text-lg flex items-center gap-2">
              <Filter size={20} /> Bộ lọc sản phẩm
            </h3>
            <p className="text-sm mt-1 font-medium">Giúp bạn tìm sản phẩm nhanh hơn</p>
          </div>

          {/* Khối Tình trạng */}
          <div className="bg-white border border-brand-gray rounded-sm overflow-hidden shadow-sm">
            <div className="bg-accent-red text-white font-bold px-4 py-2 uppercase text-sm">Tình trạng</div>
            <div className="p-4 space-y-3 text-sm text-brand-slate">
              <label className="flex items-center gap-3 cursor-pointer hover:text-brand-dark">
                <input type="checkbox" className="w-4 h-4 accent-accent-red cursor-pointer" /> Còn hàng
              </label>
              <label className="flex items-center gap-3 cursor-pointer text-text-main font-bold">
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-accent-red cursor-pointer" /> Tất cả sản phẩm
              </label>
            </div>
          </div>

          {/* Khối Chọn mức giá */}
          <div className="bg-white border border-brand-gray rounded-sm overflow-hidden shadow-sm">
            <div className="bg-accent-red text-white font-bold px-4 py-2 uppercase text-sm">Chọn mức giá</div>
            <div className="p-4 space-y-3 text-sm text-brand-slate">
              {['Dưới 2 triệu', 'Từ 2 triệu - 6 triệu', 'Từ 6 triệu - 15 triệu', 'Từ 15 triệu - 20 triệu', 'Trên 20 triệu'].map(price => (
                <label key={price} className="flex items-center gap-3 cursor-pointer hover:text-brand-dark">
                  <input type="checkbox" className="w-4 h-4 accent-accent-red cursor-pointer" /> {price}
                </label>
              ))}
            </div>
          </div>

          {/* Khối Loại sản phẩm */}
          <div className="bg-white border border-brand-gray rounded-sm overflow-hidden shadow-sm">
            <div className="bg-accent-red text-white font-bold px-4 py-2 uppercase text-sm">Loại sản phẩm</div>
            <div className="p-4 space-y-3 text-sm text-brand-slate">
              {['Gundam Assemble', 'KIT BANDAI', 'TCG Card'].map(type => (
                <label key={type} className="flex items-center gap-3 cursor-pointer hover:text-brand-dark">
                  <input type="checkbox" className="w-4 h-4 accent-accent-red cursor-pointer" /> {type}
                </label>
              ))}
            </div>
          </div>

        </div>

        {/* ================= CỘT PHẢI: DANH SÁCH SẢN PHẨM ================= */}
        <div className="w-full lg:w-3/4 flex flex-col">
          
          {/* 3 Banners trên cùng */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <img src="https://bizweb.dktcdn.net/100/382/833/themes/1088984/assets/img_3col_1.jpg?1777947443506" alt="Banner 1" className="w-full h-auto rounded-sm cursor-pointer hover:opacity-90 transition-opacity shadow-sm" />
            <img src="https://bizweb.dktcdn.net/100/382/833/themes/1088984/assets/img_3col_2.jpg?1777947443506" alt="Banner 2" className="w-full h-auto rounded-sm cursor-pointer hover:opacity-90 transition-opacity shadow-sm" />
            <img src="https://bizweb.dktcdn.net/100/382/833/themes/1088984/assets/img_3col_2.jpg?1777947443506" alt="Banner 3" className="w-full h-auto rounded-sm cursor-pointer hover:opacity-90 transition-opacity shadow-sm" />
          </div>

          {/* Header & Thanh Sắp xếp */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-brand-gray pb-4">
            
            {/* TIÊU ĐỀ LỚN - HIỂN THỊ TÊN ĐỘNG */}
            <h1 className="text-2xl md:text-3xl font-black text-brand-dark uppercase tracking-widest font-mono">
              {displayTitle}
            </h1>
            
            <div className="flex items-center gap-4 text-sm flex-wrap">
              <span className="font-bold flex items-center gap-1 text-text-main">
                <ArrowDownUp size={16} /> Sắp xếp:
              </span>
              <span className="text-accent-red font-bold cursor-pointer">Mặc định</span>
              <span className="text-brand-slate hover:text-accent-red cursor-pointer transition-colors">Tên A-Z</span>
              <span className="text-brand-slate hover:text-accent-red cursor-pointer transition-colors">Tên Z-A</span>
              <span className="text-brand-slate hover:text-accent-red cursor-pointer transition-colors">Hàng mới</span>
              <span className="text-brand-slate hover:text-accent-red cursor-pointer transition-colors">Giá thấp đến cao</span>
              <span className="text-brand-slate hover:text-accent-red cursor-pointer transition-colors">Giá cao xuống thấp</span>
            </div>
          </div>

          {/* Lưới sản phẩm */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {products.map(prod => (
              <ProductCard 
                key={prod.id} 
                id={prod.id}
                name={prod.name}
                price={prod.price}
                oldPrice={prod.oldPrice}
                isNew={prod.isNew}
                image={prod.image}
              />
            ))}
          </div>

          {/* Phân trang (Pagination) */}
          <div className="mt-12 flex justify-center">
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center bg-accent-red text-white font-bold rounded-sm shadow-sm">1</button>
              <button className="w-10 h-10 flex items-center justify-center bg-white border border-brand-gray text-brand-slate hover:border-accent-red hover:text-accent-red font-bold rounded-sm transition-colors shadow-sm">2</button>
              <button className="w-10 h-10 flex items-center justify-center bg-white border border-brand-gray text-brand-slate hover:border-accent-red hover:text-accent-red font-bold rounded-sm transition-colors shadow-sm">3</button>
              <button className="w-10 h-10 flex items-center justify-center bg-white border border-brand-gray text-brand-slate hover:border-accent-red hover:text-accent-red rounded-sm transition-colors shadow-sm">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductList;