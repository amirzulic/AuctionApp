package com.auction.auctionapp.store;

import com.auction.auctionapp.model.Bid;
import com.auction.auctionapp.model.Product;
import com.auction.auctionapp.model.ProductSubCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductSubCategoryRepository extends JpaRepository<ProductSubCategory, Integer> {
    @Query(value = "SELECT * FROM ProductSubCategory WHERE productCategoryId = ?1", nativeQuery = true)
    public List<ProductSubCategory> getSubCategoryByCategory(int id);
}
