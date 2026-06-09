package com.hobby.backend_api.dto;

import lombok.Data;

@Data
public class RegisterRequest {
    private String username;
    private String fullName;
    private String email;
    private String password;
    private String phone;
}