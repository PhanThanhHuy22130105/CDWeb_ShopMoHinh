import React from 'react';
import { Link } from 'react-router-dom';

const PromoBanners = () => {
  const banners = [
    {
      id: 1,
      image: "https://bizweb.dktcdn.net/100/382/833/themes/1088984/assets/img_3banner_1.jpg?1777947443506",
      link: "/collection/g-quuuuuux"
    },
    {
      id: 2,
      image: "https://bizweb.dktcdn.net/100/382/833/themes/1088984/assets/img_3banner_2.jpg?1777947443506",
      link: "/collection/30-minutes-fantasy"
    },
    {
      id: 3,
      image: "https://bizweb.dktcdn.net/100/382/833/themes/1088984/assets/img_3banner_3.jpg?1777947443506",
      link: "/collection/sd-world-heroes"
    }
  ];

return (
    <section className="w-full max-w-[1440px] mx-auto px-4 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {banners.map((banner) => (
          <Link 
            key={banner.id} 
            to={banner.link}
            // THÊM: Khóa cứng tỉ lệ khung hình là 16:9 (aspect-[16/9]) và đặt relative
            className="block overflow-hidden rounded-md shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200/50 relative aspect-[16/9]"
          >
            <img 
              src={banner.image} 
              alt={`Banner khuyến mãi ${banner.id}`} 
              // SỬA: Ép ảnh chiếm trọn 100% khung, cắt bỏ phần thừa (object-cover)
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PromoBanners;