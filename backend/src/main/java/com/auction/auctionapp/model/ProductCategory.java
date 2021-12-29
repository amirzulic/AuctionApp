package com.auction.auctionapp.model;

import io.swagger.annotations.ApiModelProperty;

import javax.persistence.*;

@Entity
@Table(name = "productcategory")
public class ProductCategory {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @ApiModelProperty(notes = "ID of the Product Category", name = "productCategoryId")
    private int productcategoryid;

    @Column(name = "name")
    @ApiModelProperty(notes = "Name of the Category", name = "categoryName")
    private String categoryName;

    public ProductCategory() {}

    public ProductCategory(int productCategoryid, String categoryName) {
        this.productcategoryid = productCategoryid;
        this.categoryName = categoryName;
    }

    public int getProductcategoryid() {
        return productcategoryid;
    }

    public void setProductcategoryid(int productcategoryid) {
        this.productcategoryid = productcategoryid;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }
}
