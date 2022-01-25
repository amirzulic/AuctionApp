package com.auction.auctionapp.rest;

import io.swagger.annotations.ApiModelProperty;

public class UpdateUserRequest {

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

    public UpdateUserRequest() {}

    public UpdateUserRequest(int userId,
                             String firstName,
                             String lastName,
                             String gender,
                             String birthdate,
                             String phone,
                             String email,
                             String photo) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.birthdate = birthdate;
        this.phone = phone;
        this.email = email;
        this.photo = photo;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
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

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(String birthdate) {
        this.birthdate = birthdate;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }
}
