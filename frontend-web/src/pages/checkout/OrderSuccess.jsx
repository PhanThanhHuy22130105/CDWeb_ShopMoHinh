import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';

const OrderSuccess = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-16 flex justify-center items-center font-sans min-h-[60vh]">
      
      <div className="bg-bg-surface border border-brand-gray p-10 rounded-sm shadow-xl max-w-lg w-full text-center relative overflow-hidden">
        {/* Vạch trang trí */}
        <div className="absolute top-0 left-0 w-full h-2 bg-accent-green"></div>

        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-50 rounded-full flex justify-center items-center">
            <CheckCircle size={48} className="text-accent-green" />
          </div>
        </div>

        <h1 className="text-3xl font-black text-brand-dark uppercase tracking-widest font-mono mb-2">
          ĐẶT HÀNG <span className="text-accent-green">THÀNH CÔNG</span>
        </h1>
        <p className="text-brand-slate mb-8">Cảm ơn Pilot đã tin tưởng và mua sắm tại C3 Gundam. Đơn hàng của bạn đã được hệ thống ghi nhận!</p>

        <div className="bg-bg-main border border-brand-gray/50 rounded-sm p-4 text-left mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-brand-slate uppercase">Mã đơn hàng:</span>
            <span className="font-mono font-bold text-accent-red">#C3G-88421</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold text-brand-slate uppercase">Thời gian giao dự kiến:</span>
            <span className="font-bold text-text-main">2 - 3 ngày làm việc</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/" className="flex-1 bg-white border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white font-bold py-3 rounded-sm transition-colors flex justify-center items-center gap-2">
            <Package size={18} /> Xem đơn hàng
          </Link>
          <Link to="/" className="flex-1 bg-accent-red hover:bg-[#d6002d] text-white font-bold py-3 rounded-sm transition-colors shadow-md flex justify-center items-center gap-2">
            Tiếp tục mua sắm <ArrowRight size={18} />
          </Link>
        </div>

      </div>

    </div>
  );
};

export default OrderSuccess;