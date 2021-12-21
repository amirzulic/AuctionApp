package com.auction.auctionapp.rest;

public class UserInfoResponse {
    private int userId;
    private String firstName;
    private String lastName;
    private String gender;
    private String birthdate;
    private String phone;
    private String email;
    private String photo;
    private int active;

    public UserInfoResponse(int userId, String firstName, String lastName, String gender, String birthdate, String phone, String email, String photo, int active) {
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
