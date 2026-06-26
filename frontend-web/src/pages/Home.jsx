import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import FlashSaleSection from '../components/FlashSaleSection';
import TrendingSection from '../components/TrendingSection';
import PromoBanners from '../components/PromoBanners';

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


  // Data giả cho Hàng Khuyến Mãi (Đã thêm đủ 5 sản phẩm để lấp đầy Flash Sale)
  const saleProducts = [
    { id: 20, name: "RE/100 1/100 Rebawoo [P-Bandai]", price: "2.100.000", oldPrice: "2.500.000", isNew: false, inStock: true },
    { id: 21, name: "HGGQ 011 1/144 MS-06S Char's Zaku", price: "440.000", oldPrice: "550.000", isNew: false, inStock: true },
    { id: 22, name: "HGGQ 004 1/144 GMS-a Red Gundam", price: "500.000", oldPrice: "650.000", isNew: false, inStock: true },
    { id: 23, name: "HGCE 260 1/144 Z'Gok (Seed Ver)", price: "650.000", oldPrice: "800.000", isNew: true, inStock: true },
    { id: 24, name: "RG 041 1/144 Akatsuki Gundam", price: "1.600.000", oldPrice: "1.900.000", isNew: false, inStock: true },
  ];

  // === DATA DÀNH CHO TRENDING SECTION ===
  const gundamTags = ["GQuuuuuux", "Red Gundam", "HGGQ", "White Gundam", "Exia Gundam", "Aerial Gundam"];
  
  const gundamTabs = [
    { id: 'hg', label: 'HG 1/144 High Grade' },
    { id: 'rg', label: 'RG 1/144 Real Grade' },
    { id: 'mg', label: 'MG 1/100 Master Grade' },
    { id: 'pg', label: 'PG 1/60 Perfect Grade' },
  ];

  return (
    <div className="w-full pb-12">
      <HeroSection />
      
      <FlashSaleSection 
        products={saleProducts} 
        viewAllLink="/sale" 
      />

      <ProductSection 
        titleWhite="HÀNG" 
        titleRed="MỚI VỀ" 
        products={newArrivals} 
        viewAllLink="/hang-moi" 
      />

      <PromoBanners /> 

      <ProductSection 
        titleWhite="SẢN PHẨM" 
        titleRed="BÁN CHẠY" 
        products={bestSellers} 
        viewAllLink="/ban-chay" 
      />

      <TrendingSection 
        titleBlack="Gundam Plastic Model"
        titleRed="Bandai Nhật Bản"
        subtitle="Nhiều tỉ lệ, đa dạng mẫu mã"
        bannerImg="https://bizweb.dktcdn.net/100/382/833/themes/1088984/assets/image_tab1.jpg?1777947443506"
        trendingTags={gundamTags}
        tabCategories={gundamTabs}
        products={saleProducts} 
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