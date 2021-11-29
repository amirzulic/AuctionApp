package com.auction.auctionapp.rest.controller;

import com.auction.auctionapp.model.Product;
import com.auction.auctionapp.rest.ProductResponse;
import com.auction.auctionapp.rest.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public ResponseEntity<ProductResponse> getProducts() {
        return ResponseEntity.ok(new ProductResponse(productService.getAllProducts()));
    }

    @GetMapping("/products/new")
    public ResponseEntity<ProductResponse> getNewArrivals() {
        return ResponseEntity.ok(new ProductResponse(productService.getNewArrivals()));
    }

    @GetMapping("/products/last")
    public ResponseEntity<ProductResponse> getLastChance() {
        return ResponseEntity.ok(new ProductResponse(productService.getLastChance()));
    }

    @GetMapping("/product")
    public ProductResponse getSingleProduct(@RequestParam(name = "productId") int id) {
        return productService.getSingleProductBid(id);
    }

}
