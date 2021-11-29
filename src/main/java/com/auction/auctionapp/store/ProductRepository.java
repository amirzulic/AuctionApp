package com.auction.auctionapp.store;

import com.auction.auctionapp.model.Product;
import com.auction.auctionapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "SELECT * FROM Product ORDER BY endDate ASC", nativeQuery = true)
    public List<Product> getNewArrivals();

    @Query(value = "SELECT * FROM Product ORDER BY endDate DESC", nativeQuery = true)
    public List<Product> getLastChance();
}
