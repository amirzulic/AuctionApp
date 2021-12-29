package com.auction.auctionapp.rest.controller;

import com.auction.auctionapp.rest.BidResponse;
import com.auction.auctionapp.rest.ProductCategoryResponse;
import com.auction.auctionapp.rest.ProductSubCategoryResponse;
import com.auction.auctionapp.rest.service.ProductService;
import com.auction.auctionapp.store.ProductSubCategoryRepository;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
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

    @ApiOperation(value = "Get all the Subcategories of the Products", response = ProductSubCategoryResponse.class)
    @ApiResponses(value = {
            @ApiResponse(code = 500, message = "Server error"),
            @ApiResponse(code = 200, message = "Successful retrieval",
                    response = ProductSubCategoryResponse.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Bad request"),
            @ApiResponse(code = 401, message = "Unauthorized request"),
            @ApiResponse(code = 404, message = "Not Found")})
    @GetMapping("/sub-category")
    public ResponseEntity<List<ProductSubCategoryResponse>> getSubCategories(@RequestParam(name = "productCategoryId") int id) {
        return ResponseEntity.ok(new ArrayList<ProductSubCategoryResponse>(productService.getSubCategoriesByCategory(id)));
    }
}
