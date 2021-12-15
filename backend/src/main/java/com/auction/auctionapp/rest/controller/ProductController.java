package com.auction.auctionapp.rest.controller;

import com.auction.auctionapp.model.Product;
import com.auction.auctionapp.rest.ProductResponse;
import com.auction.auctionapp.rest.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public ResponseEntity<List<ProductResponse>> getProducts() {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getAllProducts()));
    }

    @GetMapping("/shop")
    public ResponseEntity<List<ProductResponse>> getProductsByCategory(@RequestParam(name = "productCategoryId") int id) {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getProductsByCategory(id)));
    }

    @GetMapping("/products/new")
    public ResponseEntity<List<ProductResponse>> getNewArrivals() {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getNewArrivals()));
    }

    @GetMapping("/products/last")
    public ResponseEntity<List<ProductResponse>> getLastChance() {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getLastChance()));
    }

    @GetMapping("/products/default-sorting")
    public ResponseEntity<List<ProductResponse>> getDefaultSortingByCategory(@RequestParam(name = "productCategoryId") int id) {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getDefaultSortingByCategory(id)));
    }

    @GetMapping("/products/new-category")
    public ResponseEntity<List<ProductResponse>> getNewArrivalsByCategory(@RequestParam(name = "productCategoryId") int id) {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getNewArrivalsByCategory(id)));
    }

    @GetMapping("/products/last-category")
    public ResponseEntity<List<ProductResponse>> getLastChanceByCategory(@RequestParam(name = "productCategoryId") int id) {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getLastChanceByCategory(id)));
    }

    @GetMapping("/products/high-low")
    public ResponseEntity<List<ProductResponse>> getHighToLowByCategory(@RequestParam(name = "productCategoryId") int id) {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getHighToLowByCategory(id)));
    }

    @GetMapping("/products/low-high")
    public ResponseEntity<List<ProductResponse>> getLowToHighByCategory(@RequestParam(name = "productCategoryId") int id) {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getLowToHighByCategory(id)));
    }

    @GetMapping("/product")
    public ResponseEntity<ProductResponse> getSingleProduct(@RequestParam(name = "productId") int id) {
        return ResponseEntity.ok(new ProductResponse(productService.getSingleProduct(id)));
    }

}
