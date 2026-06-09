package com.hobby.backend_api.service;

import com.hobby.backend_api.dto.AuthResponse;
import com.hobby.backend_api.dto.LoginRequest;
import com.hobby.backend_api.dto.RegisterRequest;
import com.hobby.backend_api.model.User;
import com.hobby.backend_api.repository.UserRepository;
import com.hobby.backend_api.utils.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtils jwtUtils;

    public String register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email này đã được đăng ký!");
        }
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new RuntimeException("Pilot ID (Tên đăng nhập) đã có người sử dụng!");
        }

        User user = new User();
        user.setUsername(request.getUsername());
        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setPhone(request.getPhone());
        user.setRole("customer");
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        userRepository.save(user);
        return "Đăng ký tài khoản thành công!";
    }

    public AuthResponse login(LoginRequest request) {
        User user = userRepository.findByUsernameOrEmail(request.getUsernameOrEmail(), request.getUsernameOrEmail())
                .orElseThrow(() -> new RuntimeException("Tài khoản hoặc Email không tồn tại!"));
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Mật khẩu không chính xác!");
        }
        String token = jwtUtils.generateToken(user.getEmail());
        return new AuthResponse(token, user.getFullName(), user.getEmail(), user.getRole());
    }
}