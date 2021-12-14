package com.auction.auctionapp.model;

import javax.persistence.*;

@Entity
@Table(name = "ProductSubCategory")
public class ProductSubCategory {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int productsubcategoryid;

    @Column(name = "name")
    private String subCategoryName;

    @Column(name = "productcategoryid")
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
