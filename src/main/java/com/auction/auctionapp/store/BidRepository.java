package com.auction.auctionapp.store;

import com.auction.auctionapp.model.Bid;
import com.auction.auctionapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BidRepository extends JpaRepository<Bid, Integer> {
    @Query(value = "SELECT price FROM Bid WHERE productId = ?1 AND price = (SELECT MAX(price) FROM Bid WHERE productId= ?1);", nativeQuery = true)
    public double getBidMaxPrice(int id);

    @Query(value = "SELECT * FROM Bid WHERE productId = ?1", nativeQuery = true)
    public List<Bid> getBidCount(int id);
}

