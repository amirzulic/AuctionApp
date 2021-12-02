package com.auction.auctionapp.model;

import javax.persistence.*;

@Entity
@Table(name = "Product")
public class Product {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int productid;

    @Column(name = "name")
    private String name;

    @Column(name = "startingprice")
    private double startingPrice;

    @Column(name = "size")
    private int size;

    @Column(name = "color")
    private String color;

    @Column(name = "description")
    private String description;

    @Column(name = "status")
    private int status;

    public Product() {}

    public Product(int productidd, String name, double startingPrice, int size, String color, String description, int status) {
        this.productid = productid;
        this.name = name;
        this.startingPrice = startingPrice;
        this.size = size;
        this.color = color;
        this.description = description;
        this.status = status;
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
}
