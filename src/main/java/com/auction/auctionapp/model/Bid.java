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

    public Bid() {}

    public Bid(double price) {
        this.price = price;
    }

    public int getBidId() {
        return bidid;
    }

    public void setBidId(int bidid) {
        this.bidid = bidid;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

}
