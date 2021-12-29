package com.auction.auctionapp.rest;

import io.swagger.annotations.ApiModelProperty;

public class ProductSubCategoryResponse {

    @ApiModelProperty(notes = "ID of a Produt Subcategory", name = "productSubCategoryId")
    private int productSubCategoryId;

    @ApiModelProperty(notes = "Name of a Subcategory", name = "subCategoryName")
    private String subCategoryName;

    @ApiModelProperty(notes = "ID of a Product Category", name = "productCategoryId")
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
