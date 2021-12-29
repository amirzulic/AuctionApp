package com.auction.auctionapp.rest;

import io.swagger.annotations.ApiModelProperty;

public class ProductCategoryResponse {

    @ApiModelProperty(notes = "ID of a Product Category", name = "productCategoryId")
    private int productCategoryId;

    @ApiModelProperty(notes = "Name of a Product Category", name = "categoryName")
    private String categoryName;

    public ProductCategoryResponse(int productCategoryId, String categoryName) {
        this.productCategoryId = productCategoryId;
        this.categoryName = categoryName;
    }

    public int getProductCategoryId() {
        return productCategoryId;
    }

    public String getCategoryName() {
        return categoryName;
    }
}
