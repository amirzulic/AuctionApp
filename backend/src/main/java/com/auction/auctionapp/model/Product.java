package com.auction.auctionapp.model;

import io.swagger.annotations.ApiModelProperty;

import javax.persistence.*;

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

    public Product() {}

    public Product(int productid, String name, double startingPrice, int size, String color, String description, int status) {
        this.productid = productid;
        this.name = name;
        this.startingPrice = startingPrice;
        this.size = size;
        this.color = color;
        this.description = description;
        this.status = status;
    }

    public Product(int productid, String name, double startingPrice, int size, String color, String description, int status, int productCategoryId) {
        this.productid = productid;
        this.name = name;
        this.startingPrice = startingPrice;
        this.size = size;
        this.color = color;
        this.description = description;
        this.status = status;
        this.productCategoryId = productCategoryId;
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
}
