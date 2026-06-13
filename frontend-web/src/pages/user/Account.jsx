import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Package, MapPin, Lock, LogOut, ShieldAlert } from 'lucide-react';

const Account = () => {
  // Trạng thái quản lý Tab đang được chọn (Mặc định là xem hồ sơ)
  const [activeTab, setActiveTab] = useState('profile');
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  // Lấy thông tin User từ kho trình duyệt khi trang vừa load lên
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    // Nếu chưa đăng nhập (không có token) thì đuổi về trang Login
    if (!token || !storedUser) {
      navigate('/login');
    } else {
      setUserData(JSON.parse(storedUser));
    }
  }, [navigate]);

  // Hàm xử lý Đăng xuất
  const handleLogout = () => {
    // Xóa sạch vé thông hành và dữ liệu
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // Đẩy về trang đăng nhập
    navigate('/login');
  };

  // Danh sách các menu bên trái
  const menuItems = [
    { id: 'profile', label: 'Thông tin Pilot', icon: User },
    { id: 'orders', label: 'Đơn hàng tác chiến', icon: Package },
    { id: 'address', label: 'Tọa độ giao hàng', icon: MapPin },
    { id: 'password', label: 'Đổi mã bảo mật', icon: Lock },
  ];

  return (
    <div className="min-h-[80vh] px-4 py-8 max-w-7xl mx-auto">
      
      {/* Tiêu đề trang */}
      <div className="mb-8 border-b border-brand-gray pb-4">
        <h2 className="text-3xl font-black text-brand-dark uppercase tracking-widest font-mono flex items-center gap-3">
          Pilot <span className="text-accent-red">Command Center</span>
        </h2>
        <p className="text-brand-slate text-sm mt-2">Trung tâm chỉ huy và quản lý dữ liệu cá nhân</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* CỘT TRÁI: SIDEBAR MENU */}
        <div className="w-full md:w-1/4">
          <div className="bg-bg-surface border border-brand-gray p-4 rounded-sm shadow-sm relative overflow-hidden">
            {/* Đường kẻ trang trí */}
            <div className="absolute top-0 left-0 w-1 h-8 bg-accent-red"></div>

            <div className="mb-6 pb-4 border-b border-brand-gray text-center">
              <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-3 border-2 border-accent-red overflow-hidden">
                 {/* Avatar mặc định */}
                 <User size={40} className="text-gray-400" />
              </div>
              <h3 className="font-bold text-text-main text-lg">{userData?.fullName || 'Pilot'}</h3>
              <p className="text-xs text-brand-slate">{userData?.email || 'Đang tải...'}</p>
            </div>

            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-3 w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-wider transition-all border-l-2 
                      ${isActive 
                        ? 'border-accent-red bg-red-50 text-accent-red' 
                        : 'border-transparent text-brand-slate hover:bg-gray-50 hover:text-text-main'
                      }`}
                  >
                    <Icon size={18} /> {item.label}
                  </button>
                );
              })}

              {/* Nút Đăng xuất */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-wider transition-all border-l-2 border-transparent text-brand-slate hover:bg-red-50 hover:text-accent-red mt-4 pt-4 border-t border-brand-gray"
              >
                <LogOut size={18} /> Ngắt kết nối
              </button>
            </nav>
          </div>
        </div>

        {/* CỘT PHẢI: NỘI DUNG HIỂN THỊ TƯƠNG ỨNG */}
        <div className="w-full md:w-3/4">
          <div className="bg-bg-surface border border-brand-gray p-6 rounded-sm shadow-sm min-h-[400px] relative">
            
            {/* Góc trang trí HUD */}
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent-red"></div>

            {/* Render nội dung dựa trên State activeTab */}
            {activeTab === 'profile' && (
              <div className="animate-fadeIn">
                <h3 className="text-xl font-black uppercase tracking-widest text-brand-dark mb-6 flex items-center gap-2">
                  <User className="text-accent-red"/> Dữ liệu định danh
                </h3>
                {/* Tạm thời hiển thị dữ liệu từ LocalStorage, sau này sẽ cắm API vào đây */}
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div className="p-4 border border-brand-gray bg-gray-50">
                    <p className="text-xs text-brand-slate font-bold uppercase mb-1">Họ và tên</p>
                    <p className="font-bold text-text-main">{userData?.fullName}</p>
                  </div>
                  <div className="p-4 border border-brand-gray bg-gray-50">
                    <p className="text-xs text-brand-slate font-bold uppercase mb-1">Email / Kênh liên lạc</p>
                    <p className="font-bold text-text-main">{userData?.email}</p>
                  </div>
                  <div className="p-4 border border-brand-gray bg-gray-50">
                    <p className="text-xs text-brand-slate font-bold uppercase mb-1">Quyền hạn</p>
                    <p className="font-bold text-text-main uppercase">{userData?.role === 'customer' ? 'Pilot (Khách hàng)' : 'Commander (Admin)'}</p>
                  </div>
                  <div className="p-4 border border-brand-gray bg-gray-50 flex items-center justify-center">
                     <button className="text-accent-red font-bold uppercase hover:underline">Chỉnh sửa thông tin</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="animate-fadeIn text-center py-12">
                <Package size={48} className="mx-auto text-brand-gray mb-4" />
                <h3 className="text-lg font-bold text-brand-dark">Chưa có nhiệm vụ nào</h3>
                <p className="text-brand-slate text-sm mt-2">Bạn chưa thực hiện đơn đặt hàng mô hình nào.</p>
              </div>
            )}

            {activeTab === 'address' && (
              <div className="animate-fadeIn text-center py-12">
                <MapPin size={48} className="mx-auto text-brand-gray mb-4" />
                <h3 className="text-lg font-bold text-brand-dark">Tọa độ trống</h3>
                <p className="text-brand-slate text-sm mt-2">Vui lòng thiết lập địa chỉ để nhận hàng.</p>
              </div>
            )}

            {activeTab === 'password' && (
              <div className="animate-fadeIn">
                <h3 className="text-xl font-black uppercase tracking-widest text-brand-dark mb-6 flex items-center gap-2">
                  <ShieldAlert className="text-accent-red"/> Thay đổi mã bảo mật
                </h3>
                {/* Form đổi mật khẩu (Giao diện chờ cắm API) */}
                <form className="max-w-md space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-slate uppercase mb-2">Mã bảo mật cũ</label>
                    <input type="password" placeholder="••••••••" className="w-full p-3 border border-brand-gray focus:border-accent-red outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-slate uppercase mb-2">Mã bảo mật mới</label>
                    <input type="password" placeholder="••••••••" className="w-full p-3 border border-brand-gray focus:border-accent-red outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-slate uppercase mb-2">Xác nhận mã mới</label>
                    <input type="password" placeholder="••••••••" className="w-full p-3 border border-brand-gray focus:border-accent-red outline-none" />
                  </div>
                  <button type="button" className="bg-accent-red text-white font-bold uppercase px-6 py-3 shadow-[0_0_10px_rgba(255,71,87,0.3)] hover:bg-[#d6002d]">
                    Cập nhật mã
                  </button>
                </form>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;