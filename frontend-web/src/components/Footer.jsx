import React from 'react';
import { Truck, RefreshCcw, Users, PiggyBank, ArrowUp, Phone } from 'lucide-react';
import footerImg from "../assets/Gemini_Generated_Image_uuzjytuuzjytuuzj.png";

const Footer = () => {
  return (
    <footer className="w-full font-sans bg-brand-dark">
      {/* TẦNG 1: 4 Khối Chính Sách (Nền tối thuần chuẩn của shop) */}
      <div className="w-full border-b border-brand-slate/50">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-brand-slate/50">
          {[
            { icon: <Truck size={32}/>, title: "Ship COD toàn quốc", sub: "Thanh toán khi nhận hàng. Phí 20-30k" },
            { icon: <RefreshCcw size={32}/>, title: "Đổi sản phẩm", sub: "Đối với sản phẩm lỗi sản xuất" },
            { icon: <Users size={32}/>, title: "Ưu đãi thành viên", sub: "Đăng ký thành viên nhận nhiều ưu đãi lớn" },
            { icon: <PiggyBank size={32}/>, title: "Ưu đãi combo", sub: "Mua theo combo, càng mua càng rẻ" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-6 text-white group hover:bg-brand-slate/30 transition-colors cursor-pointer">
              <div className="text-accent-red">{item.icon}</div>
              <div>
                <h4 className="font-bold text-sm uppercase group-hover:text-accent-red transition-colors">{item.title}</h4>
                <p className="text-xs text-brand-gray mt-1">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TẦNG 2 */}
      <div 
        className="w-full text-brand-gray py-12 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${footerImg})` }}
      >
        <div className="absolute inset-0 bg-brand-dark/80"></div>
        <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
          <div className="md:col-span-2 pr-4">
            <h2 className="text-2xl font-black text-white tracking-widest uppercase font-mono mb-4">
              C3 <span className="text-accent-red">Gundam</span>
            </h2>
            <p className="text-sm mb-4 leading-relaxed">Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt hơn nữa.</p>
            <p className="font-bold text-white text-sm mb-2">HỘ KINH DOANH MÔ HÌNH C3 GUNDAM</p>
            <p className="text-xs mb-4">GPKD số 41F8028790 do UBND Quận 6 TP.HCM cấp ngày 29/04/2020</p>
            <ul className="text-sm space-y-2">
              <li><strong className="text-white">Địa chỉ:</strong> 95 Minh Phụng, Phường Bình Tây, Tp. Hồ Chí Minh</li>
              <li><strong className="text-white">Điện thoại:</strong> 0983453535</li>
              <li><strong className="text-white">Email:</strong> c3gundam@gmail.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase">Menu</h4>
            <ul className="space-y-2 text-sm">
              {['Đặt Trước', 'Có Sẵn', 'Gundam Bandai', 'Gundam Assemble', 'TCG Card', 'Khuyến Mãi'].map(link => (
                <li key={link}><a href="#" className="hover:text-accent-red transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase">Chính sách</h4>
            <ul className="space-y-2 text-sm">
              {['Chính sách bảo mật', 'Chính sách vận chuyển', 'Chính sách đổi trả', 'Chính sách bảo hành', 'Quy định đặt cọc'].map(link => (
                <li key={link}><a href="#" className="hover:text-accent-red transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase">Thông tin</h4>
            <ul className="space-y-2 text-sm">
              {['Tìm kiếm', 'Đăng nhập', 'Đăng ký', 'Giỏ hàng'].map(link => (
                <li key={link}><a href="#" className="hover:text-accent-red transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cụm nút bấm Floating (Vẫn nằm trong phạm vi tầng 2 hoặc bạn có thể đưa ra ngoài tùy ý) */}
        <div className="absolute bottom-8 right-8 flex flex-col gap-3 z-20">
          <button className="bg-accent-red text-white p-3 rounded-sm shadow-lg hover:bg-[#d6002d] transition">
            <ArrowUp size={20} />
          </button>
          <button className="bg-brand-dark text-white p-3 rounded-full border-2 border-accent-red shadow-[0_0_15px_rgba(255,71,87,0.5)] hover:bg-accent-red transition animate-bounce">
            <Phone size={24} />
          </button>
        </div>
      </div>

      {/* TẦNG 3: Bar Đỏ bản quyền (Nằm độc lập phía dưới) */}
      <div className="w-full bg-accent-red py-3 text-center">
        <p className="text-white text-xs">
          © Bản quyền thuộc về <strong>C3 Gundam</strong> | Cung cấp bởi <strong>Sapo</strong>
        </p>
      </div>

    </footer>
  );
};

export default Footer;