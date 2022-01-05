package com.auction.auctionapp.rest;

import io.swagger.annotations.ApiModelProperty;

public class BiddersResponse {
    @ApiModelProperty(notes = "First name of a User", name = "firstName")
    private String firstName;

    @ApiModelProperty(notes = "Last name of a User", name = "lastName")
    private String lastName;

    @ApiModelProperty(notes = "Bid price of a Product", name = "price")
    private double price;

    public BiddersResponse(String firstName, String lastName, double price) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.price = price;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public double getPrice() {
        return price;
    }
}
