package com.auction.auctionapp.rest;

public class BidResponse {

    private double price;

    public BidResponse(double price) {
        this.price = price;
    }

    public double getPrice() {
        return price;
    }
}
