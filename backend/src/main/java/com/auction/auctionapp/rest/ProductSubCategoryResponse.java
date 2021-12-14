package com.auction.auctionapp.rest;

public class ProductSubCategoryResponse {
    private int productSubCategoryId;
    private String subCategoryName;
    private int productCategoryId;

    public ProductSubCategoryResponse(int productSubCategoryId, String subCategoryName, int productCategoryId) {
        this.productSubCategoryId = productSubCategoryId;
        this.subCategoryName = subCategoryName;
        this.productCategoryId = productCategoryId;
    }

    public int getProductSubCategoryId() {
        return productSubCategoryId;
    }

    public String getSubCategoryName() {
        return subCategoryName;
    }

    public int getProductCategoryId() {
        return productCategoryId;
    }
}
