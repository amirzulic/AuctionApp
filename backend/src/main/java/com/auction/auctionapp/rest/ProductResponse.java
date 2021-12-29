package com.auction.auctionapp.rest;

import com.auction.auctionapp.model.Product;
import io.swagger.annotations.ApiModelProperty;

import java.util.Date;
import java.util.List;

public class ProductResponse {

    @ApiModelProperty(notes = "ID of a Product", name = "productId")
    private int productId;

    @ApiModelProperty(notes = "Name of a Product", name = "name")
    private String name;

    @ApiModelProperty(notes = "Starting price of a Product", name = "startingPrice")
    private double startingPrice;

    @ApiModelProperty(notes = "Description of a Product", name = "description")
    private String description;

    @ApiModelProperty(notes = "Size of a Product", name = "size")
    private int size;

    @ApiModelProperty(notes = "Color of a Product", name = "color")
    private String color;

    @ApiModelProperty(notes = "Status of a Product", name = "status")
    private int status;

    public ProductResponse(int productId, String name, double startingPrice, String description) {
        this.productId = productId;
        this.name = name;
        this.startingPrice = startingPrice;
        this.description = description;
    }

    public ProductResponse(ProductResponse singleProduct) {
        this.productId = singleProduct.productId;
        this.name = singleProduct.name;
        this.startingPrice = singleProduct.startingPrice;
        this.description = singleProduct.description;
    }

    public int getProductId() {
        return productId;
    }

    public String getName() {
        return name;
    }

    public double getStartingPrice() {
        return startingPrice;
    }

    public String getDescription() {
        return description;
    }
}
