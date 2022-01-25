package com.auction.auctionapp.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;

import javax.persistence.*;
import java.sql.Time;
import java.sql.Timestamp;
import java.util.Date;
import java.util.zip.DataFormatException;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

@Entity
@Table(name = "Product")
public class Product {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @ApiModelProperty(notes = "ID of the Product", name = "productId")
    private int productid;

    @Column(name = "name")
    @ApiModelProperty(notes = "Name of the Product", name = "name")
    private String name;

    @Column(name = "startingprice")
    @ApiModelProperty(notes = "Starting price of the Product", name = "startingPrice")
    private double startingPrice;

    @Column(name = "picture")
    @ApiModelProperty(notes = "Picture of the Product", name = "picture")
    private String picture;

    @Column(name = "startdate")
    @ApiModelProperty(notes = "Starting date of the Product", name = "startDate")
    private Timestamp startDate;

    @Column(name = "enddate")
    @ApiModelProperty(notes = "Ending date of the Product", name = "endDate")
    private Timestamp endDate;

    @Column(name = "userid")
    @ApiModelProperty(notes = "ID of the User", name = "userId")
    private int userId;

    @Column(name = "size")
    @ApiModelProperty(notes = "Size of the Product", name = "size")
    private int size;

    @Column(name = "color")
    @ApiModelProperty(notes = "Color of the Product", name = "color")
    private String color;

    @Column(name = "description")
    @ApiModelProperty(notes = "Product description", name = "description")
    private String description;

    @Column(name = "status")
    @ApiModelProperty(notes = "Product status", name = "status")
    private int status;

    @Column(name = "productcategoryid")
    @ApiModelProperty(notes = "Category of the Product", name = "productCategoryId")
    private int productCategoryId;

    @Column(name = "productsubcategoryid")
    @ApiModelProperty(notes = "SubCategory of the Product", name = "productSubCategoryId")
    private int productSubCategoryId;

    @Column(name = "address")
    @ApiModelProperty(notes = "Address of the Product", name = "address")
    private String address;

    @Column(name = "country")
    @ApiModelProperty(notes = "Country of the Product", name = "country")
    private String country;

    @Column(name = "city")
    @ApiModelProperty(notes = "City of the Product", name = "city")
    private String city;

    @Column(name = "zipcode")
    @ApiModelProperty(notes = "Zipcode of the Product", name = "zipcode")
    private String zipcode;

    @Column(name = "phone")
    @ApiModelProperty(notes = "Phone number for the Product", name = "phone")
    private String phone;

    public Product() {}

    public Product(int productid, String name, double startingPrice, int size, String color, String description, int status, int userId) {
        this.productid = productid;
        this.name = name;
        this.startingPrice = startingPrice;
        this.size = size;
        this.color = color;
        this.description = description;
        this.status = status;
        this.userId = userId;
    }

    public Product(int productid, String name, double startingPrice, int size, String color, String description, int status, int productCategoryId, int userId) {
        this.productid = productid;
        this.name = name;
        this.startingPrice = startingPrice;
        this.size = size;
        this.color = color;
        this.description = description;
        this.status = status;
        this.productCategoryId = productCategoryId;
        this.userId = userId;
    }

    public Product(String name, double startingPrice, String picture, Timestamp startDate, Timestamp endDate, int userId, String description, int productCategoryId, int productSubCategoryId, String address, String country, String city, String zipcode, String phone) {
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

    public int getProductId() {
        return productid;
    }

    public void setProductId(int productId) {
        this.productid = productId;
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

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public int getProductCategoryId() {
        return productCategoryId;
    }

    public void setProductCategoryId(int productCategoryId) {
        this.productCategoryId = productCategoryId;
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
