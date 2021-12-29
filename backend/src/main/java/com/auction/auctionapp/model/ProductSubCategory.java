package com.auction.auctionapp.model;

import io.swagger.annotations.ApiModelProperty;

import javax.persistence.*;

@Entity
@Table(name = "ProductSubCategory")
public class ProductSubCategory {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @ApiModelProperty(notes = "ID of the Product Subcategory", name = "productSubCategoryId")
    private int productsubcategoryid;

    @Column(name = "name")
    @ApiModelProperty(notes = "Name of the Subcategory", name = "subCategoryName")
    private String subCategoryName;

    @Column(name = "productcategoryid")
    @ApiModelProperty(notes = "ID of the Product Category", name = "productCategoryId")
    private int productCategoryId;

    public ProductSubCategory() {}

    public ProductSubCategory(int productSubCategoryid, String subCategoryName, int subCategoryId) {
        this.productsubcategoryid = productSubCategoryid;
        this.subCategoryName = subCategoryName;
        this.productCategoryId = subCategoryId;
    }

    public int getProductsubcategoryid() {
        return productsubcategoryid;
    }

    public void setProductsubcategoryid(int productsubcategoryid) {
        this.productsubcategoryid = productsubcategoryid;
    }

    public String getSubCategoryName() {
        return subCategoryName;
    }

    public void setSubCategoryName(String subCategoryName) {
        this.subCategoryName = subCategoryName;
    }

    public int getProductCategoryId() {
        return productCategoryId;
    }

    public void setProductCategoryId(int productCategoryId) {
        this.productCategoryId = productCategoryId;
    }
}
