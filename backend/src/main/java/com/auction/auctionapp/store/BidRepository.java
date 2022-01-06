package com.auction.auctionapp.store;

import com.auction.auctionapp.model.Bid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BidRepository extends JpaRepository<Bid, Integer> {
    @Query(value = "SELECT price FROM Bid WHERE productId = ?1 AND price = (SELECT MAX(price) FROM Bid WHERE productId= ?1);", nativeQuery = true)
    public double getBidMaxPrice(int id);

    @Query(value = "SELECT * FROM Bid WHERE productId = ?1", nativeQuery = true)
    public List<Bid> getBidCount(int id);

    @Query(value = "SELECT price FROM Bid WHERE userId = :userId AND price = (SELECT MAX(price) FROM Bid WHERE userId = :userId)", nativeQuery = true)
    public double getBidMaxPriceUserId(@Param("userId") int id);

    @Query(value = "SELECT * FROM Bid WHERE userId = :userId", nativeQuery = true)
    public List<Bid> getBidCountUserId(@Param("userId") int id);

    @Query(value = "SELECT * FROM Bid WHERE userId = :userId", nativeQuery = true)
    public List<Bid> getBidByUserId(@Param("userId") int id);

    @Query(value = "INSERT INTO Bid (price, productId, userId) " +
            "VALUES (:price, :productId, :userId)", nativeQuery = true)
    public Bid saveBid(@Param("price") double price,
                       @Param("productId") int productId,
                       @Param("userId") int userId);
}

