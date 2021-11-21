package com.auction.auctionapp.rest.controller;

import com.auction.auctionapp.model.Product;
import com.auction.auctionapp.model.User;
import com.auction.auctionapp.rest.SingleProductResponse;
import com.auction.auctionapp.rest.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/products")
    public List<Product> getProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/products/new")
    public List<Product> getNewArrivals() {
        return productService.getNewArrivals();
    }

    @GetMapping("/products/last")
    public List<Product> getLastChance() {
        return productService.getLastChance();
    }

    @GetMapping("/product")
    public SingleProductResponse getSingleProduct(@RequestParam(name = "productId") int id) {
        return productService.getSingleProductBid(id);
    }

}
