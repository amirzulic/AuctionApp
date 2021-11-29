package com.auction.auctionapp.rest.service;

import com.auction.auctionapp.model.Product;
import com.auction.auctionapp.rest.ProductResponse;
import com.auction.auctionapp.store.BidRepository;
import com.auction.auctionapp.store.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private BidRepository bidRepository;

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

    public ProductResponse getSingleProductBid(int id) {
        Product createdProduct = productRepository.findById(id).get();
        double max = bidRepository.getBidMaxPrice(id);
        int count = bidRepository.getBidCount(id).size();

        return new ProductResponse(createdProduct.getProductId(),createdProduct.getName(),
                createdProduct.getStartingPrice(), createdProduct.getDescription(),
                max, count);
    }
}
