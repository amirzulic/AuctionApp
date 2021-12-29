package com.auction.auctionapp.rest;

import io.swagger.annotations.ApiModelProperty;

public class LoginRequest {

    @ApiModelProperty(notes = "Email of the User that is trying to Log in", name = "email")
    private String email;

    @ApiModelProperty(notes = "Password of the User that is trying to Log in", name = "password")
    private String password;

    public LoginRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public LoginRequest() {}

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
