package com.hobby.backend_api.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "products")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 255)
    private String name;

    @Column(nullable = false)
    private Long price;

    @Column(name = "old_price")
    private Long oldPrice;

    @Column(length = 500)
    private String image;

    @Column(name = "hover_image", length = 500)
    private String hoverImage;

    // Phân loại: hg, rg, mg, pg... để lọc Tab
    @Column(length = 50)
    private String category;

    // Đánh dấu sản phẩm mới về
    @JsonProperty("isNew")
    @Column(name = "is_new")
    private boolean isNew = false;

    // Đánh dấu còn hàng hay hết hàng
    @Column(name = "in_stock")
    private boolean inStock = true;

    // Đánh dấu có nằm trong đợt Flash Sale không
    @JsonProperty("isFlashSale")
    @Column(name = "is_flash_sale")
    private boolean isFlashSale = false;
}