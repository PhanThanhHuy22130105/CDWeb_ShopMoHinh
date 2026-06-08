import React from 'react';

const TopBar = () => {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Banner ngang trên cùng */}
      <div className="w-full bg-brand-dark flex justify-center border-b border-brand-slate">
        <img 
          src="https://bizweb.dktcdn.net/100/382/833/themes/1088984/assets/banner_top.jpg?1777947443506" 
          alt="Top Banner" 
          className="w-full object-cover h-[35px] md:h-[45px]"
        />
      </div>

      {/* 2. Dải text thông tin */}
      <div className="w-full bg-bg-surface border-b border-brand-gray py-2 text-sm text-brand-slate">
        <div className="max-w-[1440px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="flex items-center gap-2 text-xs md:text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-red block"></span>
            Tư vấn trực tiếp & giao hàng nhanh trong nội thành HCM
          </p>
          <div className="font-bold mt-2 md:mt-0 flex items-center gap-2">
            <span className="uppercase text-xs tracking-wider text-text-main">Hotline</span>
            <span className="bg-brand-gray/20 text-accent-red px-3 py-1 rounded-sm text-sm tracking-widest font-mono">
              0384792023
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;