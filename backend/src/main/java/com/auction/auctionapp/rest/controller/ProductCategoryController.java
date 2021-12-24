package com.auction.auctionapp.rest.controller;

import com.auction.auctionapp.model.ProductCategory;
import com.auction.auctionapp.rest.ProductCategoryResponse;
import com.auction.auctionapp.rest.ProductResponse;
import com.auction.auctionapp.rest.service.ProductService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@ApiOperation(value = "/", tags = "Auction App Product Category Controller")
@RestController
public class ProductCategoryController {
    @Autowired
    private ProductService productService;

    @ApiOperation(value = "Get all categories of the Products", response = Iterable.class)
    @GetMapping("/categories")
    public ResponseEntity<List<ProductCategoryResponse>> getCategories() {
        return ResponseEntity.ok(new ArrayList<ProductCategoryResponse>(productService.getAllCategories()));
    }
}
