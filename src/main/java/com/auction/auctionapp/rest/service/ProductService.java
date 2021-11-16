package com.auction.auctionapp.rest.service;

import com.auction.auctionapp.model.Product;
import com.auction.auctionapp.model.User;
import com.auction.auctionapp.store.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public ProductService() {}

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<Product> getNewArrivals() {
        return productRepository.getNewArrivals();
    }

    public List<Product> getLastChance() {
        return productRepository.getLastChance();
    }

    public Product getSingleProduct(int id) {
        return productRepository.findById(id).get();
    }
}
