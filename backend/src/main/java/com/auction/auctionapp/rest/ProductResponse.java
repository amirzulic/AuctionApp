package com.auction.auctionapp.rest;

import com.auction.auctionapp.model.Product;

import java.util.Date;
import java.util.List;

public class ProductResponse {

    private int productId;
    private String name;
    private double startingPrice;
    private String description;
    private int size;
    private String color;
    private int status;

    public ProductResponse(int productId, String name, double startingPrice, String description) {
        this.productId = productId;
        this.name = name;
        this.startingPrice = startingPrice;
        this.description = description;
    }

    public ProductResponse(ProductResponse singleProduct) {
        this.productId = singleProduct.productId;
        this.name = singleProduct.name;
        this.startingPrice = singleProduct.startingPrice;
        this.description = singleProduct.description;
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
}
