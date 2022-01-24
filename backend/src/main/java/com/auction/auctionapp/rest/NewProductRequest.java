package com.auction.auctionapp.rest;

import io.swagger.annotations.ApiModelProperty;

import java.sql.Timestamp;

public class NewProductRequest {
    @ApiModelProperty(notes = "Name of a Product", name = "name")
    private String name;

    @ApiModelProperty(notes = "Starting price of the Product", name = "startingPrice")
    private double startingPrice;

    @ApiModelProperty(notes = "Picture of the Product", name = "picture")
    private String picture;

    @ApiModelProperty(notes = "Starting date of the Product", name = "startDate")
    private Timestamp startDate;

    @ApiModelProperty(notes = "Ending date od the Product", name = "endDate")
    private Timestamp endDate;

    @ApiModelProperty(notes = "ID of the User", name = "userId")
    private int userId;

    @ApiModelProperty(notes = "Description of the Product", name = "description")
    private String description;

    @ApiModelProperty(notes = "ID of the Product Category", name = "productCategoryId")
    private int productCategoryId;

    @ApiModelProperty(notes = "ID of the Product SubCategory", name = "productSubCategoryId")
    private int productSubCategoryId;

    @ApiModelProperty(notes = "Address of the Product", name = "address")
    private String address;

    @ApiModelProperty(notes = "Country of the Product", name = "country")
    private String country;

    @ApiModelProperty(notes = "City of the Product", name = "city")
    private String city;

    @ApiModelProperty(notes = "Zipcode of the Product", name = "zipcode")
    private String zipcode;

    @ApiModelProperty(notes = "Contact phone number of the Product", name = "phone")
    private String phone;

    public NewProductRequest() {}

    public NewProductRequest(String name, double startingPrice, String picture, Timestamp startDate, Timestamp endDate, int userId, String description, int productCategoryId, int productSubCategoryId, String address, String country, String city, String zipcode, String phone) {
        this.name = name;
        this.startingPrice = startingPrice;
        this.picture = picture;
        this.startDate = startDate;
        this.endDate = endDate;
        this.userId = userId;
        this.description = description;
        this.productCategoryId = productCategoryId;
        this.productSubCategoryId = productSubCategoryId;
        this.address = address;
        this.country = country;
        this.city = city;
        this.zipcode = zipcode;
        this.phone = phone;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getStartingPrice() {
        return startingPrice;
    }

    public void setStartingPrice(double startingPrice) {
        this.startingPrice = startingPrice;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public Timestamp getStartDate() {
        return startDate;
    }

    public void setStartDate(Timestamp startDate) {
        this.startDate = startDate;
    }

    public Timestamp getEndDate() {
        return endDate;
    }

    public void setEndDate(Timestamp endDate) {
        this.endDate = endDate;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getProductCategoryId() {
        return productCategoryId;
    }

    public void setProductCategoryId(int productCategoryId) {
        this.productCategoryId = productCategoryId;
    }

    public int getProductSubCategoryId() {
        return productSubCategoryId;
    }

    public void setProductSubCategoryId(int productSubCategoryId) {
        this.productSubCategoryId = productSubCategoryId;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
