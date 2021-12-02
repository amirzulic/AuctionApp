package com.auction.auctionapp.rest;

public class LoginResponse {

    private String JWToken;

    public LoginResponse(String JWToken) {
        this.JWToken = JWToken;
    }

    public String getJWToken() {
        return JWToken;
    }
}
