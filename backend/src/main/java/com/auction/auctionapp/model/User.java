package com.auction.auctionapp.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.annotations.ApiModelProperty;

import javax.persistence.*;

@Entity
@Table(name = "Users")
public class User {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @ApiModelProperty(notes = "ID of the User", name = "userId")
    private int userid;

    @Column(name = "firstname")
    @ApiModelProperty(notes = "First name of the User", name = "firstName")
    private String firstName;

    @Column(name = "lastname")
    @ApiModelProperty(notes = "Last name of the User", name = "lastName")
    private String lastName;

    @Column(name = "email")
    @ApiModelProperty(notes = "Email of the User", name = "email")
    private String email;

    @Column(name = "password")
    @ApiModelProperty(notes = "Password of the User", name = "password")
    private String password;

    @Column(name = "phone")
    @ApiModelProperty(notes = "Phone number of the User", name = "phone")
    private String phone;

    @Column(name = "birthdate")
    @ApiModelProperty(notes = "Date of birth of the User", name = "birthdate")
    private String birthdate;

    @Column(name = "gender")
    @ApiModelProperty(notes = "Gender of the User", name = "gender")
    private String gender;

    @Column(name = "photo")
    @ApiModelProperty(notes = "Photo of the User", name = "photo")
    private String photo;

    @Column(name = "active")
    @ApiModelProperty(notes = "User status", name = "active")
    private int active;

    public User(String firstName, String lastName, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    public User(String firstName,
                String lastName,
                String email,
                String password,
                String phone,
                String birthdate,
                String gender,
                String photo,
                int active) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.birthdate = birthdate;
        this.gender = gender;
        this.photo = photo;
        this.active = active;
    }

    public User() {}

    public int getUserId() {
        return userid;
    }

    public void setUserId(int userid) {
        this.userid = userid;
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

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(String birthdate) {
        this.birthdate = birthdate;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public int getActive() {
        return active;
    }

    public void setActive(int active) {
        this.active = active;
    }
}
