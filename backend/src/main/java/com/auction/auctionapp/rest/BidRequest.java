package com.auction.auctionapp.rest;

import io.swagger.annotations.ApiModelProperty;

public class BidRequest {

    @ApiModelProperty(notes = "Bid price sent by the User", name = "price")
    private double price;

    @ApiModelProperty(notes = "ID of the Product that the Bid was placed on", name = "productId")
    private int productId;

    @ApiModelProperty(notes = "ID of the User that placed the Bid", name = "userId")
    private int userId;

    public BidRequest() {}

    public BidRequest(double price, int productId, int userId) {
        this.price = price;
        this.productId = productId;
        this.userId = userId;
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

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}
