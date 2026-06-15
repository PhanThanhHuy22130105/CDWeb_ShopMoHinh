package com.hobby.backend_api.service;

import com.hobby.backend_api.dto.UpdateProfileRequest;
import com.hobby.backend_api.dto.UserResponse;
import com.hobby.backend_api.model.User;
import com.hobby.backend_api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    public UserResponse getProfileByEmail(String email) {
        User user = userRepository.findByUsernameOrEmail(email, email).orElseThrow(() -> new RuntimeException("Không tìm thấy thông tin người dùng trên hệ thống !!!"));
        UserResponse userResponse = new UserResponse(
                user.getUsername(),
                user.getFullName(),
                user.getEmail(),
                user.getPhone(),
                user.getRole()
        );
        return userResponse;
    }

    public String updateProfile(String email, UpdateProfileRequest updateProfileRequest) {
        User user = userRepository.findByUsernameOrEmail(email, email).orElseThrow(() -> new RuntimeException("Không tìm thấy thông tin người dùng!!!"));
        user.setFullName(updateProfileRequest.getFullName());
        user.setPhone(updateProfileRequest.getPhone());
        userRepository.save(user);
        return "Cập nhật thông tin thành công!!";
    }

}
