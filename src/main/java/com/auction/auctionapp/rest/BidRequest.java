package com.auction.auctionapp.rest;

public class BidRequest {

    private double price;

    public BidRequest() {}

    public BidRequest(double price) {
        this.price = price;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

}
