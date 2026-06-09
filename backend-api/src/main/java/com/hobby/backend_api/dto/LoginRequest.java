package com.hobby.backend_api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor // Thêm dòng này
@AllArgsConstructor
@Data
public class LoginRequest {
    private String usernameOrEmail;
    private String password;
}