import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Calendar, Clock, ChevronRight } from 'lucide-react';
import ProductCard from '../../components/ProductCard'; // Import thêm ProductCard

const Cart = () => {
  const navigate = useNavigate();
  
  // Dữ liệu giỏ hàng hiện tại
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "POKEMON PLASTIC MODEL COLLECTION QUICK! 26 Jolteon",
      price: 160000,
      quantity: 1,
      image: "https://via.placeholder.com/100x100/FFFFFF/111827?text=Jolteon"
    },
    {
      id: 2,
      name: "30MM ARMORED CORE VI FIRES OF RUBICON Balam Industries",
      price: 880000,
      quantity: 1,
      image: "https://via.placeholder.com/100x100/FFFFFF/111827?text=Armored+Core"
    }
  ]);

  // Dữ liệu Sản phẩm gợi ý "Có thể bạn thích"
  const suggestedProducts = [
    { id: 10, name: "Mô hình HG 1/144 Gundam Calibarn", price: "450.000", oldPrice: "500.000", isNew: true, image: "https://via.placeholder.com/300x300/FFFFFF/111827?text=Calibarn" },
    { id: 11, name: "Mô hình MG 1/100 Gundam Barbatos", price: "1.200.000", oldPrice: "", isNew: false, image: "https://via.placeholder.com/300x300/FFFFFF/111827?text=Barbatos" },
    { id: 12, name: "Mô hình RG 1/144 Hi-Nu Gundam", price: "1.100.000", oldPrice: "1.250.000", isNew: true, image: "https://via.placeholder.com/300x300/FFFFFF/111827?text=Hi-Nu" },
    { id: 13, name: "Mô hình PG 1/60 Strike Rouge", price: "4.500.000", oldPrice: "", isNew: false, image: "https://via.placeholder.com/300x300/FFFFFF/111827?text=Strike+Rouge" }
  ];

  const updateQuantity = (id, delta) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-8 font-sans">
      
      {/* Breadcrumb */}
      <nav className="text-sm text-brand-slate mb-6">
        <Link to="/" className="hover:text-accent-red transition-colors">Trang chủ</Link>
        <span className="mx-2">&gt;</span>
        <span className="text-accent-red font-bold">Giỏ hàng</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* CỘT TRÁI: Danh sách sản phẩm trong giỏ */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-2xl font-black text-brand-dark mb-6">Giỏ hàng của bạn</h1>
          
          <div className="bg-bg-surface border border-brand-gray rounded-sm overflow-hidden shadow-sm">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 p-4 border-b border-brand-gray bg-brand-gray/10 text-brand-dark font-bold text-sm uppercase">
              <div className="col-span-6">Thông tin sản phẩm</div>
              <div className="col-span-2 text-center">Đơn giá</div>
              <div className="col-span-2 text-center">Số lượng</div>
              <div className="col-span-2 text-right">Thành tiền</div>
            </div>

            {/* Cart Items */}
            <div className="divide-y divide-brand-gray/50">
              {cartItems.map(item => (
                <div key={item.id} className="grid grid-cols-12 gap-4 p-4 items-center">
                  {/* Info */}
                  <div className="col-span-6 flex gap-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-contain border border-brand-gray/30 p-1 rounded-sm bg-white" />
                    <div className="flex flex-col justify-center">
                      <Link to={`/product/${item.id}`} className="font-bold text-sm text-text-main hover:text-accent-red transition-colors line-clamp-2">
                        {item.name}
                      </Link>
                      <button onClick={() => removeItem(item.id)} className="text-accent-red text-xs flex items-center gap-1 mt-2 hover:underline w-fit">
                        <Trash2 size={14} /> Xóa
                      </button>
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="col-span-2 text-center text-accent-red font-bold font-mono">
                    {item.price.toLocaleString('vi-VN')}đ
                  </div>
                  
                  {/* Quantity */}
                  <div className="col-span-2 flex justify-center">
                    <div className="flex items-center border border-brand-gray rounded-sm">
                      <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 text-brand-slate hover:bg-brand-gray/20">-</button>
                      <input type="text" value={item.quantity} readOnly className="w-8 text-center text-sm font-bold focus:outline-none" />
                      <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 text-brand-slate hover:bg-brand-gray/20">+</button>
                    </div>
                  </div>
                  
                  {/* Total */}
                  <div className="col-span-2 text-right text-accent-red font-bold font-mono">
                    {(item.price * item.quantity).toLocaleString('vi-VN')}đ
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CỘT PHẢI: Thông tin đơn hàng */}
        <div className="w-full lg:w-1/3">
          <div className="bg-bg-surface border border-brand-gray rounded-sm p-6 shadow-sm sticky top-4">
            <h2 className="text-lg font-bold text-brand-dark mb-4 border-b border-brand-gray pb-2">Thông tin đơn hàng</h2>
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-text-main font-bold">Tổng tiền</span>
              <span className="text-2xl font-black text-accent-red font-mono">{totalAmount.toLocaleString('vi-VN')}đ</span>
            </div>

            {/* Freeship Bar */}
            <div className="bg-accent-green text-white text-center text-sm py-2 font-bold rounded-sm mb-6 shadow-sm">
              Đơn hàng được miễn phí vận chuyển
            </div>

            {/* Thời gian giao hàng */}
            <div className="mb-6">
              <h3 className="font-bold text-sm text-brand-dark mb-3">Thời gian giao hàng</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Calendar size={16} className="text-brand-slate" /></div>
                  <input type="text" placeholder="Chọn ngày" className="w-full pl-9 pr-3 py-2 text-sm border border-brand-gray rounded-sm focus:outline-none focus:border-accent-red" />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Clock size={16} className="text-brand-slate" /></div>
                  <select className="w-full pl-9 pr-3 py-2 text-sm border border-brand-gray rounded-sm focus:outline-none focus:border-accent-red appearance-none text-brand-slate">
                    <option>Chọn thời gian</option>
                    <option>Sáng (08:00 - 12:00)</option>
                    <option>Chiều (13:00 - 17:00)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mb-6">
              <button 
                onClick={() => navigate('/checkout')}
                className="w-full bg-accent-red hover:bg-[#d6002d] text-white font-bold py-3 rounded-sm transition-colors shadow-md"
              >
                Thanh toán ngay
              </button>
              <Link to="/" className="w-full bg-accent-yellow hover:bg-[#e59400] text-white font-bold py-3 rounded-sm transition-colors text-center shadow-sm">
                Tiếp tục mua hàng
              </Link>
            </div>

            {/* Mã giảm giá */}
            <div>
              <p className="text-sm font-bold text-text-main mb-2">Các mã giảm giá có thể áp dụng:</p>
              <div className="flex flex-wrap gap-2">
                {['C3WELCOME', 'C3GUNDAM', 'FREESHIP', 'C3VIP'].map(code => (
                  <span key={code} className="bg-accent-red text-white text-xs font-bold px-2 py-1 rounded-sm flex items-center gap-1 cursor-pointer hover:bg-brand-dark transition-colors">
                    {code} <ChevronRight size={12} />
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* TẦNG DƯỚI CÙNG: CÓ THỂ BẠN THÍCH */}
      <div className="w-full mt-16">
        <div className="flex items-center justify-between border-b-2 border-brand-gray mb-6 pb-2">
          <h2 className="text-xl font-black text-brand-dark uppercase tracking-widest font-mono flex items-center gap-2">
            <span className="w-1.5 h-5 bg-accent-red block"></span>
            Có thể bạn <span className="text-accent-red">thích</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {suggestedProducts.map(prod => (
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
      </div>

    </div>
  );
};

export default Cart;