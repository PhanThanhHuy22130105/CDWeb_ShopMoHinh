import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, Plus, Filter, ArrowDownUp } from 'lucide-react';
import ProductCard from '../../components/ProductCard';

const ProductList = () => {
  // 1. Lấy tham số category từ URL
  const { category } = useParams();

  // 2. Chuẩn bị giỏ chứa dữ liệu từ Database
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 3. Dùng useEffect để hút dữ liệu mỗi khi category thay đổi
  useEffect(() => {
    setLoading(true);
    // Nếu có category (vd: /collections/hg) thì gọi API lọc, nếu không thì lấy tất cả
    const apiUrl = category 
      ? `http://localhost:8080/api/products/category/${category}`
      : 'http://localhost:8080/api/products';

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Lỗi lấy dữ liệu danh sách sản phẩm:", err);
        setLoading(false);
      });
  }, [category]); // Mỗi lần URL đổi chữ category, nó sẽ tự động chạy lại fetch này!

  // Từ điển dịch URL thành Tên hiển thị (Đã chuẩn hóa theo DB của bạn)
  const categoryMap = {
    'hg': 'HG 1/144 High Grade',
    'rg': 'RG 1/144 Real Grade',
    'mg': 'MG 1/100 Master Grade',
    'pg': 'PG 1/60 Perfect Grade',
    'tat-ca': 'Tất cả sản phẩm'
  };

  const displayTitle = categoryMap[category] || 'Danh mục sản phẩm';

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-6 font-sans">
      
      {/* Breadcrumb */}
      <nav className="text-sm text-brand-slate mb-6 flex items-center gap-2">
        <Link to="/" className="hover:text-accent-red transition-colors">Trang chủ</Link>
        <span>&gt;</span>
        <span className="text-accent-red font-bold uppercase">{displayTitle}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* ================= CỘT TRÁI: SIDEBAR LỌC ================= */}
        <div className="w-full lg:w-1/4 flex flex-col gap-4">
          
          <div className="bg-white border border-brand-gray rounded-sm overflow-hidden shadow-sm">
            <div className="bg-accent-red text-white font-bold px-4 py-3 uppercase text-sm">
              Danh mục sản phẩm
            </div>
            <ul className="flex flex-col text-sm text-text-main font-medium">
              {[
                { name: 'Tất cả sản phẩm', path: 'tat-ca' }
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

              {/* Đã sửa lại đường dẫn cho khớp với Database (hg, rg, mg...) */}
              {[
                { name: 'HG 1/144', path: 'hg' },
                { name: 'RG 1/144', path: 'rg' },
                { name: 'MG 1/100', path: 'mg' },
                { name: 'PG 1/60', path: 'pg' }
              ].map((cat, idx) => (
                <li key={idx} className="border-b border-brand-gray/30 last:border-0">
                  <Link 
                    to={`/collections/${cat.path}`} 
                    className={`flex items-center justify-between px-4 py-3 hover:text-accent-red transition-colors ${category === cat.path ? 'text-accent-red font-bold' : ''}`}
                  >
                    {cat.name} <ChevronRight size={16} className="text-brand-slate" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ... (Các khối Bộ lọc giá, Tình trạng giữ nguyên) ... */}
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
        </div>

        {/* ================= CỘT PHẢI: DANH SÁCH SẢN PHẨM ================= */}
        <div className="w-full lg:w-3/4 flex flex-col">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <img src="https://bizweb.dktcdn.net/100/382/833/themes/1088984/assets/img_3col_1.jpg?1777947443506" alt="Banner 1" className="w-full h-auto rounded-sm cursor-pointer hover:opacity-90 transition-opacity shadow-sm" />
            <img src="https://bizweb.dktcdn.net/100/382/833/themes/1088984/assets/img_3col_2.jpg?1777947443506" alt="Banner 2" className="w-full h-auto rounded-sm cursor-pointer hover:opacity-90 transition-opacity shadow-sm" />
            <img src="https://bizweb.dktcdn.net/100/382/833/themes/1088984/assets/img_3col_2.jpg?1777947443506" alt="Banner 3" className="w-full h-auto rounded-sm cursor-pointer hover:opacity-90 transition-opacity shadow-sm" />
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-brand-gray pb-4">
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
            </div>
          </div>

          {/* Lưới sản phẩm - Render từ API */}
          {loading ? (
            <div className="text-center py-12 text-brand-slate font-bold">Đang tải dữ liệu...</div>
          ) : products.length === 0 ? (
            <div className="text-center py-12 text-brand-slate">
              Chưa có sản phẩm nào trong danh mục này. Hãy vào Admin thêm nhé!
            </div>
          ) : (
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
                  hoverImage={prod.hoverImage}
                  inStock={prod.inStock}
                />
              ))}
            </div>
          )}

          {/* Phân trang (Pagination) */}
          {products.length > 0 && (
             <div className="mt-12 flex justify-center">
               <div className="flex gap-2">
                 <button className="w-10 h-10 flex items-center justify-center bg-accent-red text-white font-bold rounded-sm shadow-sm">1</button>
                 <button className="w-10 h-10 flex items-center justify-center bg-white border border-brand-gray text-brand-slate hover:border-accent-red hover:text-accent-red rounded-sm transition-colors shadow-sm">
                   <ChevronRight size={20} />
                 </button>
               </div>
             </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProductList;