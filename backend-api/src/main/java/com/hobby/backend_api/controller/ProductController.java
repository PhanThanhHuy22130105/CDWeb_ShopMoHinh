package com.hobby.backend_api.controller;

import com.hobby.backend_api.model.Product;
import com.hobby.backend_api.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    // Lấy tất cả sản phẩm
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        return ResponseEntity.ok(productRepository.findAll());
    }

    // Lấy danh sách Flash Sale
    @GetMapping("/flash-sale")
    public ResponseEntity<List<Product>> getFlashSaleProducts() {
        return ResponseEntity.ok(productRepository.findByIsFlashSaleTrue());
    }

    // Lấy danh sách Hàng Mới Về
    @GetMapping("/new")
    public ResponseEntity<List<Product>> getNewProducts() {
        return ResponseEntity.ok(productRepository.findByIsNewTrue());
    }

    // Lấy sản phẩm theo từng Tab (hg, rg, mg...)
    @GetMapping("/category/{category}")
    public ResponseEntity<List<Product>> getProductsByCategory(@PathVariable String category) {
        return ResponseEntity.ok(productRepository.findByCategory(category));
    }
}