package com.hobby.backend_api.controller;

import com.hobby.backend_api.dto.ForgotPasswordRequest;
import com.hobby.backend_api.dto.ResetPasswordRequest;
import com.hobby.backend_api.dto.VerifyOtpRequest;
import com.hobby.backend_api.model.User;
import com.hobby.backend_api.repository.UserRepository;
import com.hobby.backend_api.service.EmailService;
import com.hobby.backend_api.service.OtpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class PasswordResetController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OtpService otpService;

    @Autowired
    private EmailService emailService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordRequest request) {
        User user = userRepository.findByUsernameOrEmail(request.getEmail(), request.getEmail())
                .orElseThrow(() -> new RuntimeException("Email không tồn tại trong hệ thống!"));

        String otp = otpService.generateAndStore(request.getEmail());
        try {
            emailService.sendOtpEmail(request.getEmail(), user.getFullName(), otp);
        } catch (Exception e) {
            throw new RuntimeException("Không thể gửi email. Vui lòng thử lại sau!");
        }
        return ResponseEntity.ok("Mã OTP đã được gửi đến email của bạn!");
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<?> verifyOtp(@RequestBody VerifyOtpRequest request) {
        if (!otpService.verify(request.getEmail(), request.getOtp())) {
            return ResponseEntity.badRequest().body("Mã OTP không hợp lệ hoặc đã hết hạn!");
        }
        return ResponseEntity.ok("Mã OTP hợp lệ!");
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody ResetPasswordRequest request) {
        if (!otpService.verify(request.getEmail(), request.getOtp())) {
            return ResponseEntity.badRequest().body("Mã OTP không hợp lệ hoặc đã hết hạn!");
        }

        User user = userRepository.findByUsernameOrEmail(request.getEmail(), request.getEmail())
                .orElseThrow(() -> new RuntimeException("Tài khoản không tồn tại!"));

        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        userRepository.save(user);
        otpService.invalidate(request.getEmail());

        return ResponseEntity.ok("Đặt lại mật khẩu thành công!");
    }
}
