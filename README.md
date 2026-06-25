# C3 Hobby Gundam Shop

Web thương mại điện tử bán mô hình Gundam/hobby figure.

## Công nghệ sử dụng

| Thành phần | Công nghệ |
|---|---|
| Backend | Spring Boot 3.5, Java 21, Maven |
| Frontend | React 19, Vite 8, Tailwind CSS 4 |
| Database | MySQL 8 |
| Auth | JWT (HS256, 24h) |
| Email | Mailtrap (sandbox) |

---

## Yêu cầu cài đặt

- **Java 21+** — [tải tại đây](https://adoptium.net/)
- **Node.js 18+** — [tải tại đây](https://nodejs.org/)
- **MySQL 8** — [tải tại đây](https://dev.mysql.com/downloads/mysql/)

---

## 1. Chuẩn bị Database

Mở MySQL client (Workbench, DBeaver, hoặc terminal):

```sql
CREATE DATABASE hobby_gundam_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

> Mặc định backend kết nối `localhost:3306`, user `root`, **mật khẩu rỗng**.  
> Nếu MySQL của bạn có mật khẩu, chỉnh trong `application-local.properties` (xem bước 3).

---

## 2. Tạo tài khoản Mailtrap

Mailtrap là dịch vụ test email — email gửi đi sẽ bị "bắt" vào inbox ảo, không gửi đến người dùng thật.

1. Truy cập [mailtrap.io](https://mailtrap.io) → **Sign Up** (miễn phí)
2. Vào **Email Testing** → **Inboxes** → click vào inbox mặc định (My Inbox)
3. Chọn tab **SMTP Settings** → dropdown **Integrations** chọn **Spring Boot**
4. Mailtrap hiển thị sẵn config, lấy 2 giá trị:
   - `spring.mail.username = xxxxxxxxxxxxxxx`
   - `spring.mail.password = xxxxxxxxxxxxxxx`

---

## 3. Cấu hình Backend (local)

```bash
cd backend-api/src/main/resources
cp application-local.properties.example application-local.properties
```

Mở file `application-local.properties` vừa tạo, điền thông tin thật:

```properties
# MySQL — đổi password nếu cần
spring.datasource.username=root
spring.datasource.password=

# Mailtrap — lấy từ bước 2
spring.mail.username=DIEN_USERNAME_MAILTRAP_VAO_DAY
spring.mail.password=DIEN_PASSWORD_MAILTRAP_VAO_DAY
```

> File này đã được gitignore, **không bao giờ bị commit lên repo**.

---

## 4. Chạy Backend

```bash
cd backend-api
./mvnw spring-boot:run -Dspring-boot.run.profiles=local
```

Backend khởi động tại `http://localhost:8080`.  
Hibernate tự tạo bảng khi chạy lần đầu (`ddl-auto=update`).

---

## 5. Chạy Frontend

```bash
cd frontend-web
npm install
npm run dev
```

Frontend chạy tại `http://localhost:5173`.

---

## API Endpoints

| Method | Endpoint | Auth | Mô tả |
|---|---|---|---|
| POST | `/api/auth/register` | Public | Đăng ký |
| POST | `/api/auth/login` | Public | Đăng nhập → trả JWT |
| POST | `/api/auth/forgot-password` | Public | Gửi OTP qua email |
| POST | `/api/auth/verify-otp` | Public | Xác nhận OTP |
| POST | `/api/auth/reset-password` | Public | Đặt lại mật khẩu |
| GET | `/api/users/profile` | JWT | Lấy thông tin cá nhân |
| PUT | `/api/users/profile` | JWT | Cập nhật thông tin cá nhân |

Header cho route cần JWT:
```
Authorization: Bearer <token>
```

---

## Luồng quên mật khẩu

```
Nhập email → POST /forgot-password
     ↓
Mailtrap nhận email chứa OTP (6 số, hiệu lực 5 phút)
     ↓
Nhập OTP → POST /verify-otp
     ↓
Nhập mật khẩu mới → POST /reset-password
     ↓
Chuyển hướng về trang đăng nhập
```

---

## Chạy với Docker (tuỳ chọn)

Yêu cầu: [Docker Desktop](https://www.docker.com/products/docker-desktop/)

Điền Mailtrap credentials vào `docker-compose.yml`:
```yaml
- MAIL_USERNAME=your_mailtrap_username
- MAIL_PASSWORD=your_mailtrap_password
```

Sau đó:
```bash
docker-compose up --build
```

| Service | URL |
|---|---|
| Frontend | http://localhost:3000 |
| Backend | http://localhost:8080 |
| MySQL | localhost:3306 |
