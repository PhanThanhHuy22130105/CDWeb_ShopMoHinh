package com.hobby.backend_api.dto;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class UpdateProfileRequest {
    @JsonProperty("fullName")
    private String fullName;
    private String phone;
}
