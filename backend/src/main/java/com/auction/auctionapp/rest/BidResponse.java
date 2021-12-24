package com.auction.auctionapp.rest;

import io.swagger.annotations.ApiModelProperty;

public class BidResponse {

    @ApiModelProperty(notes = "Highest bid of a Product", name = "price")
    private double price;

    @ApiModelProperty(notes = "Number of bids placed on a Product", name = "count")
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
