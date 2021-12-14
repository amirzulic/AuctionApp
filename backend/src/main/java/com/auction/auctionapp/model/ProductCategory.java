package com.auction.auctionapp.model;

import javax.persistence.*;

@Entity
@Table(name = "productcategory")
public class ProductCategory {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int productcategoryid;

    @Column(name = "name")
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
