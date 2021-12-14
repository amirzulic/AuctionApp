package com.auction.auctionapp.rest;

public class ProductCategoryResponse {
    private int productCategoryId;
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
