package com.auction.auctionapp.rest;

public class BidResponse {

    private double price;
    private int count;

    public BidResponse(double price) {
        this.price = price;
    }

    public BidResponse(double price, int count) {
        this.price = price;
        this.count = count;
    }

    public double getPrice() {
        return price;
    }

    public int getCount() {
        return count;
    }
}
