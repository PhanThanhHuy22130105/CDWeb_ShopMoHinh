package com.hobby.backend_api.repository;

import com.hobby.backend_api.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByIsFlashSaleTrue();
    List<Product> findByIsNewTrue();
    List<Product> findByCategory(String category);
}