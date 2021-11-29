package com.auction.auctionapp.rest;

import com.auction.auctionapp.model.Product;

import java.util.Date;
import java.util.List;

public class ProductResponse {

    private int productId;
    private String name;
    private double startingPrice;
    private String description;
    private double maxPrice;
    private int count;
    private List<Product> productList;

    public ProductResponse(int productId, String name, double startingPrice, String description, double maxPrice, int count) {
        this.productId = productId;
        this.name = name;
        this.startingPrice = startingPrice;
        this.description = description;
        this.maxPrice = maxPrice;
        this.count = count;
    }

    public ProductResponse(List<Product> productList) {
        this.productList = productList;
    }

    public int getProductId() {
        return productId;
    }

    public String getName() {
        return name;
    }

    public double getStartingPrice() {
        return startingPrice;
    }

    public String getDescription() {
        return description;
    }

    public double getMaxPrice() {
        return maxPrice;
    }

    public int getCount() {
        return count;
    }

    public List<Product> getList() {
        return productList;
    }
}
