package com.auction.auctionapp.rest;

public class BidRequest {

    private double price;
    private int productId;

    public BidRequest() {}

    public BidRequest(double price, int productId) {
        this.price = price;
        this.productId = productId;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }
}
