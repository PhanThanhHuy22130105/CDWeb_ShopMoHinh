import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';

const Home = () => {
  // Data giả cho Hàng Mới Về
  const newArrivals = [
    { id: 1, name: "Mô hình MG 1/100 RX-93 v Gundam", price: "1.650.000", oldPrice: "", isNew: true },
    { id: 2, name: "Mô hình RG 1/144 MSN-04 Sazabi", price: "1.150.000", oldPrice: "", isNew: true },
    { id: 3, name: "Mô hình HG 1/144 Gundam Aerial", price: "350.000", oldPrice: "", isNew: true },
    { id: 4, name: "Pokemon Model Kit Quick!! 01", price: "180.000", oldPrice: "", isNew: true },
  ];

  // Data giả cho Hàng Bán Chạy
  const bestSellers = [
    { id: 10, name: "Kìm Cắt Nhựa Mô Hình GodHand", price: "1.200.000", oldPrice: "", isNew: false },
    { id: 11, name: "Bút Kẻ Lằn Chìm Gundam Marker", price: "60.000", oldPrice: "", isNew: false },
    { id: 12, name: "Mô hình PG 1/60 Unleashed RX-78-2", price: "6.500.000", oldPrice: "", isNew: false },
    { id: 13, name: "Action Base 1 Black (Đế trưng bày)", price: "140.000", oldPrice: "", isNew: false },
  ];

  // Data giả cho Hàng Khuyến Mãi
  const saleProducts = [
    { id: 20, name: "Mô Hình SD Gundam EX-Standard Barbatos", price: "120.000", oldPrice: "150.000", isNew: false },
    { id: 21, name: "Thẻ Bài Premium Card Collection", price: "350.000", oldPrice: "450.000", isNew: false },
  ];

  return (
    <div className="w-full pb-12">
      {/* Khối Hero Banner lớn */}
      <HeroSection />
      
      {/* 3 Khối Danh sách sản phẩm */}
      <ProductSection 
        titleWhite="HÀNG" 
        titleRed="MỚI VỀ" 
        products={newArrivals} 
        viewAllLink="/hang-moi" 
      />
      <ProductSection 
        titleWhite="SẢN PHẨM" 
        titleRed="BÁN CHẠY" 
        products={bestSellers} 
        viewAllLink="/ban-chay" 
      />
      <ProductSection 
        titleWhite="SIÊU" 
        titleRed="KHUYẾN MÃI" 
        products={saleProducts} 
        viewAllLink="/sale" 
      />
    </div>
  );
};

export default Home;