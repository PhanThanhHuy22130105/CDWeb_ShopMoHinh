package com.hobby.backend_api.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {
    private String username;
    @JsonProperty("fullName")
    private String fullName;
    private String email;
    private String phone;
    private String role;
}
