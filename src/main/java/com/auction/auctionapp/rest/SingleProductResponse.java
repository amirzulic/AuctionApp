package com.auction.auctionapp.rest;

import java.util.Date;

public class SingleProductResponse {

    private int productId;
    private String name;
    private double startingPrice;
    private String description;
    private double maxPrice;
    private int count;

    public SingleProductResponse(int productId, String name, double startingPrice, String description, double maxPrice, int count) {
        this.productId = productId;
        this.name = name;
        this.startingPrice = startingPrice;
        this.description = description;
        this.maxPrice = maxPrice;
        this.count = count;
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
}
