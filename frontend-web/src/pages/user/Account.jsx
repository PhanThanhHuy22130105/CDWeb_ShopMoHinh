import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Package, MapPin, Lock, LogOut, ShieldAlert } from 'lucide-react';

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ fullName: '', phone: '' });

// Lấy thông tin User
  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/users/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
          setEditForm({ fullName: data.fullName || '', phone: data.phone || '' });
        } else {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          navigate('/login');
        }
      } catch (error) {
        console.error("Lỗi kết nối trạm dữ liệu:", error);
      }
    };

    fetchUserProfile();
  }, [navigate]);

  // Hàm xử lý Đăng xuất
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  // Hàm cập nhật Profile
  const handleUpdateProfile = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://localhost:8080/api/users/profile', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editForm)
      });

      if (response.ok) {
        setUserData({ ...userData, fullName: editForm.fullName, phone: editForm.phone });
        const storedUser = JSON.parse(localStorage.getItem('user'));
        storedUser.fullName = editForm.fullName;
        localStorage.setItem('user', JSON.stringify(storedUser));
        
        setIsEditing(false);
        alert("Cập nhật dữ liệu thành công!");
        window.location.reload();
      } else {
        const errText = await response.text();
        alert(errText);
      }
    } catch (error) {
      console.error("Lỗi:", error);
    }
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

            {activeTab === 'profile' && (
              <div className="animate-fadeIn">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-black uppercase tracking-widest text-brand-dark flex items-center gap-2">
                    <User className="text-accent-red"/> Dữ liệu định danh Pilot
                  </h3>
                  
                  {/* Nút bấm chuyển đổi Xem/Sửa */}
                  {!isEditing ? (
                    <button 
                      onClick={() => setIsEditing(true)}
                      className="text-xs bg-brand-dark text-white font-bold uppercase px-4 py-2 hover:bg-accent-red transition-colors"
                    >
                      Chỉnh sửa
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setIsEditing(false)}
                        className="text-xs bg-brand-gray text-white font-bold uppercase px-4 py-2 hover:bg-gray-500 transition-colors"
                      >
                        Hủy
                      </button>
                      <button 
                        onClick={handleUpdateProfile}
                        className="text-xs bg-accent-red text-white font-bold uppercase px-4 py-2 shadow-[0_0_10px_rgba(255,71,87,0.3)] hover:bg-[#d6002d] transition-colors"
                      >
                        Lưu thay đổi
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div className="p-4 border border-brand-gray bg-gray-50 opacity-70">
                    <p className="text-xs text-brand-slate font-bold uppercase mb-1">Mã định danh (Pilot ID)</p>
                    <p className="font-bold text-text-main">{userData?.username || 'Chưa thiết lập'}</p>
                    <p className="text-[10px] text-accent-red mt-1 italic">* Không thể thay đổi</p>
                  </div>

                  <div className="p-4 border border-brand-gray bg-white">
                    <p className="text-xs text-brand-slate font-bold uppercase mb-1">Họ và tên</p>
                    {!isEditing ? (
                      <p className="font-bold text-text-main">{userData?.fullName || 'Chưa cập nhật'}</p>
                    ) : (
                      <input 
                        type="text" 
                        value={editForm.fullName}
                        onChange={(e) => setEditForm({...editForm, fullName: e.target.value})}
                        className="w-full border-b border-brand-slate py-1 outline-none focus:border-accent-red text-text-main font-bold"
                      />
                    )}
                  </div>

                  <div className="p-4 border border-brand-gray bg-gray-50 opacity-70">
                    <p className="text-xs text-brand-slate font-bold uppercase mb-1">Email / Kênh liên lạc</p>
                    <p className="font-bold text-text-main">{userData?.email}</p>
                    <p className="text-[10px] text-accent-red mt-1 italic">* Liên hệ chỉ huy để đổi Email</p>
                  </div>

                  <div className="p-4 border border-brand-gray bg-white">
                    <p className="text-xs text-brand-slate font-bold uppercase mb-1">Số tần số (Số điện thoại)</p>
                    {!isEditing ? (
                      <p className="font-bold text-text-main">{userData?.phone || 'Chưa cập nhật'}</p>
                    ) : (
                      <input 
                        type="tel" 
                        value={editForm.phone}
                        onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
                        className="w-full border-b border-brand-slate py-1 outline-none focus:border-accent-red text-text-main font-bold"
                      />
                    )}
                  </div>
                  
                  <div className="p-4 border border-brand-gray bg-gray-50 md:col-span-2">
                    <p className="text-xs text-brand-slate font-bold uppercase mb-1">Quyền hạn hệ thống</p>
                    <p className="font-bold text-accent-red uppercase text-sm">
                      {userData?.role === 'customer' ? 'Hạm đội Pilot (Khách hàng)' : 'Commander (Ban chỉ huy)'}
                    </p>
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