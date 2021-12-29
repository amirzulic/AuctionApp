package com.auction.auctionapp.rest;

import io.swagger.annotations.ApiModelProperty;

public class LoginResponse {

    @ApiModelProperty(notes = "JW Token that was created for the User that Logged in", name = "JWToken")
    private String JWToken;

    public LoginResponse(String JWToken) {
        this.JWToken = JWToken;
    }

    public String getJWToken() {
        return JWToken;
    }
}
