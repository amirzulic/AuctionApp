package com.auction.auctionapp.rest;

public class RegisterResponse {

    private int id;
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
