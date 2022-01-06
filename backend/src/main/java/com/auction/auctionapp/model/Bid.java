package com.auction.auctionapp.model;

import io.swagger.annotations.ApiModelProperty;

import javax.persistence.*;

@Entity
@Table(name = "Bid")
public class Bid {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @ApiModelProperty(notes = "ID of the Bid", name = "bidId")
    private int bidid;

    @Column(name = "price")
    @ApiModelProperty(notes = "Price of the Bid", name = "price")
    private double price;

    @Column(name = "productid")
    @ApiModelProperty(notes = "ID of the Product on which a bid was placed", name = "productId")
    private int productId;

    @Column(name = "userid")
    @Transient
    @ApiModelProperty(notes = "ID of the User that placed the Bid", name = "userId")
    private int userId;

    public Bid() {}

    public Bid(double price, int productId) {
        this.price = price;
        this.productId = productId;
    }

    public Bid(double price, int productId, int userId) {
        this.price = price;
        this.productId = productId;
        this.userId = userId;
    }

    public int getBidid() {
        return bidid;
    }

    public void setBidid(int bidid) {
        this.bidid = bidid;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}
