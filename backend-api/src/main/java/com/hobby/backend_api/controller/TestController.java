package com.hobby.backend_api.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/test")
public class TestController {

    @GetMapping("/vip")
    public ResponseEntity<?> vipEndpoint() {
        return ResponseEntity.ok("Chúc mừng! Bạn đã dùng Token để lọt vào khu vực VIP thành công!");
    }
}