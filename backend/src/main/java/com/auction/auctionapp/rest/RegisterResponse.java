package com.auction.auctionapp.rest;

import io.swagger.annotations.ApiModelProperty;

public class RegisterResponse {

    @ApiModelProperty(notes = "ID of the Registered user", name = "id")
    private int id;

    @ApiModelProperty(notes = "Email of the Registered user", name = "email")
    private String email;

    public RegisterResponse(int id, String email) {
        this.id = id;
        this.email = email;
    }

    public int getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }
}
