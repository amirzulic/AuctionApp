package com.auction.auctionapp.rest;

import io.swagger.annotations.ApiModelProperty;

public class RegisterRequest {

    @ApiModelProperty(notes = "First name of a User", name = "firstName")
    private String firstName;

    @ApiModelProperty(notes = "Last name of a User", name = "lastName")
    private String lastName;

    @ApiModelProperty(notes = "Email of a User", name = "email")
    private String email;

    @ApiModelProperty(notes = "Password of a User", name = "password")
    private String password;

    public RegisterRequest(String firstName, String lastName, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
