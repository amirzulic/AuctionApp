package com.auction.auctionapp.store;

import com.auction.auctionapp.model.Bid;
import com.auction.auctionapp.model.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Integer> {
}
