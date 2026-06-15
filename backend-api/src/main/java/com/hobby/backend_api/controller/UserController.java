package com.hobby.backend_api.controller;

import com.hobby.backend_api.dto.UpdateProfileRequest;
import com.hobby.backend_api.dto.UserResponse;
import com.hobby.backend_api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/profile")
    public ResponseEntity<?> getMyProfile() {
        String currentEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        try {
            UserResponse profile = userService.getProfileByEmail(currentEmail);
            return ResponseEntity.ok(profile);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/profile")
    public ResponseEntity<?> updateMyProfile(@RequestBody UpdateProfileRequest updateProfileRequest) {
        String currentEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        try {
            String message = userService.updateProfile(currentEmail, updateProfileRequest);
            return ResponseEntity.ok(message);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}