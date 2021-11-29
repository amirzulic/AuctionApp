package com.auction.auctionapp.model;

import javax.persistence.*;

@Entity
@Table(name = "Bid")
public class Bid {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int bidid;

    @Column(name = "price")
    private double price;

    @Column(name = "productid")
    private int productId;

    public Bid() {}

    public Bid(double price, int productId) {
        this.price = price;
        this.productId = productId;
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
}
