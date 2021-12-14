package com.auction.auctionapp.rest.controller;

import com.auction.auctionapp.rest.ProductCategoryResponse;
import com.auction.auctionapp.rest.ProductSubCategoryResponse;
import com.auction.auctionapp.rest.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ProductSubCategoryController {
    @Autowired
    private ProductService productService;

    @GetMapping("/sub-category")
    public ResponseEntity<List<ProductSubCategoryResponse>> getSubCategories(@RequestParam(name = "productCategoryId") int id) {
        return ResponseEntity.ok(new ArrayList<ProductSubCategoryResponse>(productService.getSubCategoriesByCategory(id)));
    }
}
