package com.auction.auctionapp.rest;

import io.swagger.annotations.ApiModelProperty;

public class UserInfoResponse {

    @ApiModelProperty(notes = "ID of a User", name = "userId")
    private int userId;

    @ApiModelProperty(notes = "First name of a User", name = "firstName")
    private String firstName;

    @ApiModelProperty(notes = "Last name of a User", name = "lastName")
    private String lastName;

    @ApiModelProperty(notes = "Gender of a User", name = "gender")
    private String gender;

    @ApiModelProperty(notes = "Birthdate of a User", name = "birthdate")
    private String birthdate;

    @ApiModelProperty(notes = "Phone number of a User", name = "phone")
    private String phone;

    @ApiModelProperty(notes = "Email of a User", name = "email")
    private String email;

    @ApiModelProperty(notes = "Photo of a User", name = "photo")
    private String photo;

    @ApiModelProperty(notes = "Status of a User", name = "active")
    private int active;

    public UserInfoResponse(int userId,
                            String firstName,
                            String lastName,
                            String gender,
                            String birthdate,
                            String phone,
                            String email,
                            String photo,
                            int active) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.birthdate = birthdate;
        this.phone = phone;
        this.email = email;
        this.photo = photo;
        this.active = active;
    }

    public int getUserId() {
        return userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getGender() {
        return gender;
    }

    public String getBirthdate() {
        return birthdate;
    }

    public String getPhone() {
        return phone;
    }

    public String getEmail() {
        return email;
    }

    public String getPhoto() {
        return photo;
    }

    public int getActive() {
        return active;
    }
}
