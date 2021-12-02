package com.auction.auctionapp.rest.service;

import com.auction.auctionapp.model.Product;
import com.auction.auctionapp.rest.ProductResponse;
import com.auction.auctionapp.store.BidRepository;
import com.auction.auctionapp.store.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private BidRepository bidRepository;

    public ProductService() {}

    public List<ProductResponse> getAllProducts() {
        List<Product> list = productRepository.findAll();
        return list.stream().map(p -> new ProductResponse(p.getProductId(), p.getName(), p.getStartingPrice(), p.getDescription())).collect(Collectors.toList());
    }

    public List<ProductResponse> getNewArrivals() {
        List<Product> list = productRepository.getNewArrivals();
        return list.stream().map(p -> new ProductResponse(p.getProductId(), p.getName(), p.getStartingPrice(), p.getDescription())).collect(Collectors.toList());
    }

    public List<ProductResponse> getLastChance() {
        List<Product> list = productRepository.getLastChance();
        return list.stream().map(p -> new ProductResponse(p.getProductId(), p.getName(), p.getStartingPrice(), p.getDescription())).collect(Collectors.toList());
    }

    public ProductResponse getSingleProduct(int id) {
        Product createdProduct = productRepository.findById(id).get();
        return new ProductResponse(createdProduct.getProductId(),createdProduct.getName(),
                createdProduct.getStartingPrice(), createdProduct.getDescription());
    }
}
