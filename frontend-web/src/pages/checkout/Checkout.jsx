import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronDown, CreditCard, Banknote, ShieldCheck } from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();
    navigate('/order-success');
  };

  return (
    // Xóa max-w-1440px và dùng flex để tạo layout chia đôi màn hình chuẩn Sapo
    <div className="min-h-screen bg-white flex flex-col lg:flex-row font-sans text-text-main">
      
      {/* CỘT TRÁI: FORM THÔNG TIN (Nền trắng) */}
      <div className="w-full lg:w-[55%] xl:w-[60%] bg-white p-6 lg:p-12 lg:pr-16 flex justify-end">
        <div className="w-full max-w-2xl">
          
          {/* Logo */}
          <div className="mb-6 flex justify-center lg:justify-start">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-16 h-16 bg-brand-dark flex items-center justify-center rounded-sm">
                {/* Giả lập logo C3 Gundam */}
                <div className="w-8 h-8 border-2 border-white transform rotate-45 flex items-center justify-center">
                  <div className="w-4 h-4 bg-white transform -rotate-45"></div>
                </div>
              </div>
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Cột thông tin mua hàng */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-800">Thông tin mua hàng</h2>
                <Link to="/login" className="text-brand-blue text-sm hover:underline flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  Đăng nhập
                </Link>
              </div>

              <form id="checkout-form" onSubmit={handleCheckout} className="space-y-3">
                <input type="email" placeholder="Email" className="w-full p-2.5 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm" />
                <input type="text" placeholder="Họ và tên" className="w-full p-2.5 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm" />
                
                {/* Số điện thoại có cờ VN (giả lập) */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-lg">🇻🇳</span> <ChevronDown size={14} className="text-gray-400 ml-1" />
                  </div>
                  <input type="tel" placeholder="Số điện thoại" className="w-full pl-16 p-2.5 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm" />
                </div>

                <input type="text" placeholder="Địa chỉ" className="w-full p-2.5 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm" />
                
                <div className="relative">
                  <select className="w-full p-2.5 border border-gray-300 rounded-sm appearance-none focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm text-gray-500">
                    <option>Tỉnh thành</option>
                    <option>Hồ Chí Minh</option>
                    <option>Hà Nội</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
                </div>

                <div className="relative">
                  <select className="w-full p-2.5 border border-gray-300 rounded-sm appearance-none focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm text-gray-500">
                    <option>Quận huyện</option>
                    <option>Quận 1</option>
                    <option>Quận 6</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
                </div>

                <div className="relative">
                  <select className="w-full p-2.5 border border-gray-300 rounded-sm appearance-none focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm text-gray-500">
                    <option>Phường xã</option>
                    <option>Phường Bến Nghé</option>
                    <option>Phường Bình Tây</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
                </div>

                <label className="flex items-center gap-2 text-sm text-gray-700 mt-4 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-brand-blue" /> Giao hàng đến địa chỉ khác
                </label>

                <textarea rows="3" placeholder="Note (tùy chọn)" className="w-full p-2.5 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm mt-2"></textarea>
              </form>
            </div>

            {/* Cột Shipping & Payment */}
            <div className="flex-1 mt-8 lg:mt-0">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Shipping</h2>
              <div className="bg-[#e1f0f4] text-[#4d8a9e] p-4 rounded-sm text-sm mb-8 border border-[#c4e3ed]">
                Vui lòng nhập thông tin giao hàng
              </div>

              <h2 className="text-lg font-bold text-gray-800 mb-4">Payment</h2>
              <div className="border border-gray-300 rounded-sm divide-y divide-gray-300">
                
                <label className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" className="w-4 h-4 accent-brand-blue" />
                    <span className="text-sm">Chuyển khoản qua ngân hàng</span>
                  </div>
                  <CreditCard size={24} className="text-blue-500" />
                </label>

                <label className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" className="w-4 h-4 accent-brand-blue" />
                    <span className="text-sm">Thanh toán qua Techcombank VietQR</span>
                  </div>
                  <ShieldCheck size={24} className="text-red-500" />
                </label>

                <label className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" className="w-4 h-4 accent-brand-blue" />
                    <span className="text-sm">Thanh toán qua MoMo QR đa năng</span>
                  </div>
                  <div className="bg-[#A50064] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">momo</div>
                </label>

                <label className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" defaultChecked className="w-4 h-4 accent-brand-blue" />
                    <span className="text-sm">Thanh toán khi giao hàng (COD)</span>
                  </div>
                  <Banknote size={24} className="text-green-600" />
                </label>

              </div>
            </div>
          </div>

          <div className="mt-12 text-sm text-brand-blue border-t border-gray-200 pt-4 flex gap-4">
            <Link to="#" className="hover:underline">Chính sách bảo mật</Link>
            <Link to="#" className="hover:underline">Điều khoản sử dụng</Link>
          </div>
        </div>
      </div>

      {/* CỘT PHẢI: TÓM TẮT ĐƠN HÀNG (Nền xám nhạt) */}
      <div className="w-full lg:w-[45%] xl:w-[40%] bg-[#fafafa] p-6 lg:p-12 lg:pl-16 border-l border-gray-200 flex justify-start">
        <div className="w-full max-w-md">
          
          <h2 className="text-lg font-bold text-gray-800 mb-6 border-b border-gray-200 pb-4">Đơn hàng (2 sản phẩm)</h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img src="https://via.placeholder.com/60/FFFFFF/111827?text=Jolteon" alt="item" className="w-14 h-14 border border-gray-300 rounded-md object-contain p-1 bg-white" />
                  <span className="absolute -top-2 -right-2 bg-brand-blue text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-sm">1</span>
                </div>
                <span className="text-sm text-gray-700 max-w-[180px] font-medium leading-snug">POKEMON PLASTIC MODEL COLLECTION QUICK! 26 Jolteon...</span>
              </div>
              <span className="text-sm text-gray-700 font-medium">160.000đ</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img src="https://via.placeholder.com/60/FFFFFF/111827?text=Armored" alt="item" className="w-14 h-14 border border-gray-300 rounded-md object-contain p-1 bg-white" />
                  <span className="absolute -top-2 -right-2 bg-brand-blue text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-sm">1</span>
                </div>
                <span className="text-sm text-gray-700 max-w-[180px] font-medium leading-snug">30MM ARMORED CORE VI FIRES OF RUBICON Balam Industr...</span>
              </div>
              <span className="text-sm text-gray-700 font-medium">880.000đ</span>
            </div>
          </div>

          <div className="flex gap-2 mb-6 border-y border-gray-200 py-6">
            <input type="text" placeholder="Nhập mã giảm giá" className="flex-1 p-2.5 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm" />
            <button className="bg-[#78a2c2] hover:bg-brand-blue text-white px-6 py-2.5 rounded-sm text-sm font-bold transition-colors">
              Áp dụng
            </button>
          </div>

          <div className="space-y-3 mb-6 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Tạm tính</span>
              <span className="font-medium">1.040.000đ</span>
            </div>
            <div className="flex justify-between">
              <span>Phí vận chuyển</span>
              <span>-</span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 flex justify-between items-center mb-8">
            <span className="text-base text-gray-700">Tổng cộng</span>
            <span className="text-2xl text-brand-blue font-bold">1.040.000đ</span>
          </div>

          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
            <Link to="/cart" className="text-brand-blue text-sm hover:underline flex items-center gap-1">
              <ChevronLeft size={16} /> Quay về giỏ hàng
            </Link>
            <button 
              form="checkout-form"
              type="submit"
              className="w-full md:w-auto bg-brand-blue hover:bg-[#2580a5] text-white px-8 py-3 rounded-sm font-bold transition-colors shadow-sm"
            >
              ĐẶT HÀNG
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Checkout;