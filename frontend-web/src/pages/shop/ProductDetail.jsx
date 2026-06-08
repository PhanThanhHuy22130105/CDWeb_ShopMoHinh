import React, { useState } from 'react';
import { ShoppingCart, Star, ShieldCheck, Minus, Plus, Zap, FileText, Settings, Gift } from 'lucide-react';
import ProductCard from '../../components/ProductCard';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = {
    id: 5,
    name: "Mô hình Perfect Grade (PG) 1/60 Unleashed RX-78-2 Gundam",
    price: "6.500.000",
    oldPrice: "7.000.000",
    grade: "PG 1/60",
    brand: "Bandai Namco",
    status: "Còn hàng (Sẵn kho HCM)",
    images: [
      "https://via.placeholder.com/600x600/FFFFFF/25274D?text=PG+UNLEASHED+RX-78-2+MAIN",
      "https://via.placeholder.com/150x150/F4F7F6/25274D?text=ANGLE+1",
      "https://via.placeholder.com/150x150/F4F7F6/25274D?text=ANGLE+2",
      "https://via.placeholder.com/150x150/F4F7F6/25274D?text=WEAPON"
    ],
    description: "Mô hình PG Unleashed RX-78-2 Gundam là đỉnh cao công nghệ chế tạo Gunpla kỷ niệm 40 năm của Bandai. Sản phẩm sở hữu hệ thống khung xương thế hệ mới (Evolution Link System) với nhiều lớp khớp động phức tạp, cho phép mô hình cử động linh hoạt vượt trội so với các phiên bản cũ.\n\nCác tấm giáp ngoài có cơ chế mở độc đáo (Open-Hatch Feature) giúp để lộ các chi tiết cơ khí mạ chrome bên trong cùng cụm đèn LED phát sáng đa điểm ở mắt, ngực và buồng lái. Đây là siêu phẩm bắt buộc phải có đối với mọi Pilot đam mê dòng Mecha.",
    specs: [
      { label: "Tỷ lệ mô hình", value: "1/60 (Kích thước lớn)" },
      { label: "Chiều cao hoàn thiện", value: "Khoảng 30 cm" },
      { label: "Chất liệu thành phần", value: "Nhựa PS • ABS • PP • PVC" },
      { label: "Phụ kiện đi kèm", value: "Beam Rifle, Beam Saber x2, Shield, Core Fighter, Cụm đèn LED" },
      { label: "Yêu cầu kỹ năng", value: "Cơ bản đến Trung cấp (Không cần sơn keo)" }
    ]
  };

  const relatedProducts = [
    { id: 1, name: "Mô hình MG 1/100 RX-93 v Gundam Ver.Ka", price: "1.650.000", oldPrice: "1.800.000", isNew: true },
    { id: 2, name: "Mô hình RG 1/144 MSN-04 Sazabi", price: "1.150.000", oldPrice: "", isNew: false },
    { id: 3, name: "Mô hình HG 1/144 Gundam Aerial", price: "350.000", oldPrice: "400.000", isNew: true },
    { id: 6, name: "Kìm Cắt Nhựa Mô Hình GodHand SPN-120", price: "1.200.000", oldPrice: "", isNew: false }
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-8">
      
      {/* Breadcrumb */}
      <nav className="text-sm text-brand-slate font-mono mb-6">
        <span className="hover:text-accent-red cursor-pointer transition-colors">Trang chủ</span>
        <span className="mx-2">/</span>
        <span className="hover:text-accent-red cursor-pointer transition-colors">Gundam Bandai</span>
        <span className="mx-2">/</span>
        <span className="text-brand-dark font-bold">{product.name}</span>
      </nav>

      {/* KHỐI TRÊN: Ảnh và Mua Hàng */}
      <div className="flex flex-col md:flex-row gap-10 mb-12">
        {/* Cột Trái: Ảnh */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="w-full aspect-square bg-white border border-brand-gray rounded-sm overflow-hidden flex items-center justify-center p-4 shadow-sm">
            <img src={product.images[0]} alt="Main" className="w-full h-full object-contain" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, idx) => (
              <div key={idx} className={`aspect-square bg-white border cursor-pointer rounded-sm overflow-hidden shadow-sm ${idx === 0 ? 'border-accent-red' : 'border-brand-gray hover:border-brand-slate'}`}>
                <img src={img} alt={`thumb-${idx}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* CỘT PHẢI: Thông tin và form đặt hàng */}
        <div className="w-full md:w-1/2 flex flex-col">
          
          {/* Thông tin cơ bản */}
          <div className="border-b border-brand-gray pb-6 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-accent-red text-white text-[10px] px-2 py-0.5 font-bold rounded-sm font-mono">{product.grade}</span>
              <span className="text-brand-slate text-xs font-mono">Thương hiệu: <span className="text-brand-dark font-bold">{product.brand}</span></span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-brand-dark leading-tight mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center text-accent-yellow">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-current" />)}
              </div>
              <span className="text-brand-slate border-l border-brand-gray pl-4 text-accent-green font-bold font-mono">{product.status}</span>
            </div>
          </div>

          {/* Giá cả */}
          <div className="bg-white border border-brand-gray shadow-sm p-6 rounded-sm mb-6">
            <div className="flex items-end gap-4">
              <span className="text-4xl font-black text-accent-red font-mono">{product.price}đ</span>
              <span className="text-lg text-brand-slate line-through font-mono mb-1">{product.oldPrice}đ</span>
            </div>
            <p className="text-xs text-brand-slate mt-2 flex items-center gap-1">
              <Zap size={14} className="text-accent-yellow" /> Tích lũy 65.000 điểm Pilot Point khi mua sản phẩm này
            </p>
          </div>

          {/* Cụm Số lượng & Nút Mua */}
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-brand-slate uppercase w-24">Số lượng:</span>
              <div className="flex items-center border border-brand-gray rounded-sm bg-white shadow-sm">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 text-brand-slate hover:text-brand-dark transition-colors"><Minus size={16} /></button>
                <input type="text" value={quantity} readOnly className="w-12 bg-transparent text-center text-text-main font-mono font-bold focus:outline-none" />
                <button onClick={() => setQuantity(quantity + 1)} className="p-3 text-brand-slate hover:text-brand-dark transition-colors"><Plus size={16} /></button>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <button className="flex-1 bg-white border-2 border-accent-red text-accent-red hover:bg-accent-red hover:text-white font-black uppercase tracking-wider py-4 rounded-sm transition-all flex items-center justify-center gap-2 shadow-sm">
                <ShoppingCart size={20} /> Thêm vào giỏ
              </button>
              
              <button className="flex-1 bg-accent-red shadow-[0_0_15px_rgba(255,71,87,0.3)] hover:shadow-[0_0_25px_rgba(255,71,87,0.5)] hover:-translate-y-0.5 hover:bg-[#d6002d] text-white font-black uppercase tracking-wider py-4 rounded-sm transition-all duration-300">
                Mua ngay
              </button>
            </div>
          </div>

          {/* HAI KHỐI THÔNG TIN BỔ SUNG */}
          <div className="flex flex-col gap-4 mt-auto">
            
            {/* Khối Khuyến Mãi */}
            <div className="bg-white border border-brand-gray shadow-sm rounded-sm p-4">
              <h3 className="text-brand-dark font-bold font-mono mb-3 flex items-center gap-2 uppercase text-sm">
                <Gift size={18} className="text-accent-red" /> Khuyến mãi - Ưu đãi
              </h3>
              <ul className="text-sm text-brand-slate space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent-red font-bold mt-0.5">•</span> 
                  Giảm 10.000đ cho đơn hàng bất kỳ
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-red font-bold mt-0.5">•</span> 
                  Giảm 5% khi mua hàng ở lần tiếp theo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-red font-bold mt-0.5">•</span> 
                  Freeship cho các đơn hàng có giá trị trên 1.000.000đ
                </li>
              </ul>
            </div>

            {/* Khối Chính Sách */}
            <div className="bg-white border border-brand-gray shadow-sm rounded-sm p-4">
              <h3 className="text-brand-dark font-bold font-mono mb-3 flex items-center gap-2 uppercase text-sm">
                <ShieldCheck size={18} className="text-accent-red" /> Chính sách hỗ trợ
              </h3>
              <ul className="text-sm text-brand-slate space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent-red font-bold mt-0.5">•</span> 
                  Miễn phí vận chuyển tại TP.HCM với đơn hàng trên 1.000.000đ
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-red font-bold mt-0.5">•</span> 
                  Cam kết chính hãng 100%
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-red font-bold mt-0.5">•</span> 
                  Hỗ trợ đổi với lỗi từ NSX
                </li>
              </ul>
            </div>
            
          </div>

        </div>
      </div>

      {/* KHỐI GIỮA: MÔ TẢ CHI TIẾT & THÔNG SỐ */}
      <div className="bg-white border border-brand-gray shadow-sm rounded-sm overflow-hidden mb-12">
        <div className="flex border-b border-brand-gray bg-brand-gray/10 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('description')}
            className={`flex items-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${activeTab === 'description' ? 'border-accent-red text-accent-red bg-white' : 'border-transparent text-brand-slate hover:text-brand-dark'}`}
          >
            <FileText size={16} /> Mô tả sản phẩm
          </button>
          <button 
            onClick={() => setActiveTab('specs')}
            className={`flex items-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${activeTab === 'specs' ? 'border-accent-red text-accent-red bg-white' : 'border-transparent text-brand-slate hover:text-brand-dark'}`}
          >
            <Settings size={16} /> Thông số kỹ thuật
          </button>
        </div>

        <div className="p-6 text-text-main text-sm leading-relaxed whitespace-pre-line">
          {activeTab === 'description' ? (
            <div>{product.description}</div>
          ) : (
            <div className="max-w-2xl">
              <table className="w-full border-collapse">
                <tbody>
                  {product.specs.map((spec, index) => (
                    <tr key={index} className="border-b border-brand-gray/30 last:border-0">
                      <td className="py-3 font-bold text-brand-slate w-1/3 font-mono">{spec.label}</td>
                      <td className="py-3 text-text-main">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* KHỐI DƯỚI: SẢN PHẨM LIÊN QUAN */}
      <div className="w-full">
        <div className="flex items-center justify-between border-b-2 border-brand-gray mb-6 pb-2">
          <h2 className="text-xl font-black text-brand-dark uppercase tracking-widest font-mono flex items-center gap-2">
            <span className="w-1.5 h-5 bg-accent-red block"></span>
            Sản phẩm <span className="text-accent-red">liên quan</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map(prod => (
            <ProductCard 
              key={prod.id} 
              id={prod.id}
              name={prod.name}
              price={prod.price}
              oldPrice={prod.oldPrice}
              isNew={prod.isNew}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductDetail;