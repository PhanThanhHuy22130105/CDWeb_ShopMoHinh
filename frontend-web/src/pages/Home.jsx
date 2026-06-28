import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import FlashSaleSection from '../components/FlashSaleSection';
import TrendingSection from '../components/TrendingSection';
import PromoBanners from '../components/PromoBanners';

const Home = () => {
  // 1. Tạo các giỏ chứa dữ liệu thật (State)
  const [saleProducts, setSaleProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  // 2. Dùng useEffect để hút dữ liệu ngay khi vừa mở trang
  useEffect(() => {
    // Gọi API lấy Hàng Khuyến Mãi (Flash Sale)
    fetch('http://localhost:8080/api/products/flash-sale')
      .then(res => res.json())
      .then(data => setSaleProducts(data))
      .catch(err => console.error("Lỗi lấy hàng Flash Sale:", err));

    // Gọi API lấy Hàng Mới Về
    fetch('http://localhost:8080/api/products/new')
      .then(res => res.json())
      .then(data => setNewArrivals(data))
      .catch(err => console.error("Lỗi lấy hàng Mới về:", err));

    // Gọi API lấy Tất cả sản phẩm (Cho cái bảng Trending)
    fetch('http://localhost:8080/api/products')
      .then(res => res.json())
      .then(data => setAllProducts(data))
      .catch(err => console.error("Lỗi lấy tất cả hàng:", err));
  }, []); // [] đảm bảo chỉ hút 1 lần lúc mới tải trang

  // Data cố định cho các thẻ tìm kiếm
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
      <PromoBanners />
      
      {/* Đổ dữ liệu thật vào Flash Sale (Chỉ hiện nếu có hàng) */}
      {saleProducts.length > 0 && (
        <FlashSaleSection 
          products={saleProducts} 
          viewAllLink="/sale" 
        />
      )}
      
      {/* Đổ dữ liệu thật vào Trending */}
      {allProducts.length > 0 && (
        <TrendingSection 
          titleBlack="Gundam Plastic Model"
          titleRed="Bandai Nhật Bản"
          subtitle="Nhiều tỉ lệ, đa dạng mẫu mã"
          bannerImg="https://file.hstatic.net/200000287623/file/banner_coll_1.jpg" 
          trendingTags={gundamTags}
          tabCategories={gundamTabs}
          products={allProducts} 
        />
      )}

      {/* Đổ dữ liệu thật vào Hàng Mới Về */}
      {newArrivals.length > 0 && (
        <ProductSection 
          titleWhite="HÀNG" 
          titleRed="MỚI VỀ" 
          products={newArrivals} 
          viewAllLink="/hang-moi" 
        />
      )}
    </div>
  );
};

export default Home;