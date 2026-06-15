import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Layout dùng chung
import TopBar from './components/TopBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import "Chú bảo vệ"
import PrivateRoute from './components/PrivateRoute';

// Import Các Trang
import Home from './pages/Home';
import ProductDetail from './pages/shop/ProductDetail';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import Cart from './pages/checkout/Cart';
import Checkout from './pages/checkout/Checkout';
import OrderSuccess from './pages/checkout/OrderSuccess';
import ProductList from './pages/shop/ProductList';
import Account from './pages/user/Account';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg-main font-sans text-text-main flex flex-col">        
        <TopBar />
        <Header />
        <Navbar />

        <main className="flex-grow w-full">
          <Routes>
            {/* Nhóm Mua sắm công khai (Ai cũng vào được) */}
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/collections/:category" element={<ProductList />} />    

            {/* Nhóm Xác thực người dùng (Auth) */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Nhóm Không gian cá nhân (BẮT BUỘC ĐĂNG NHẬP) */}
            <Route 
              path="/account" 
              element={
                <PrivateRoute>
                  <Account />
                </PrivateRoute>
              } 
            />

            {/* Nhóm Thanh toán */}
            <Route path="/cart" element={<Cart />} />
            {/* Gợi ý nhỏ: Sau này Checkout cũng nên bọc PrivateRoute nếu bạn bắt buộc khách phải đăng nhập mới được mua hàng */}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />          
          </Routes>
        </main>

        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;