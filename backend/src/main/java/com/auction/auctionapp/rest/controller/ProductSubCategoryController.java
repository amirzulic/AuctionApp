package com.auction.auctionapp.rest.controller;

import com.auction.auctionapp.rest.ProductCategoryResponse;
import com.auction.auctionapp.rest.ProductSubCategoryResponse;
import com.auction.auctionapp.rest.service.ProductService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@ApiOperation(value = "/", tags = "Auction App Product Subcategory Controller")
@RestController
public class ProductSubCategoryController {
    @Autowired
    private ProductService productService;

    @ApiOperation(value = "Get all the Subcategories of the Products", response = Iterable.class)
    @GetMapping("/sub-category")
    public ResponseEntity<List<ProductSubCategoryResponse>> getSubCategories(@RequestParam(name = "productCategoryId") int id) {
        return ResponseEntity.ok(new ArrayList<ProductSubCategoryResponse>(productService.getSubCategoriesByCategory(id)));
    }
}
