package com.auction.auctionapp.store;

import com.auction.auctionapp.model.Product;
import com.auction.auctionapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "SELECT * FROM Product ORDER BY endDate ASC", nativeQuery = true)
    public List<Product> getNewArrivals();

    @Query(value = "SELECT * FROM Product ORDER BY endDate DESC", nativeQuery = true)
    public List<Product> getLastChance();

    @Query(value = "SELECT * FROM Product WHERE productCategoryId = :productCategoryId ORDER BY name ASC", nativeQuery = true)
    public List<Product> getDefaultSortingByCategory(@Param("productCategoryId") int id);

    @Query(value = "SELECT * FROM Product WHERE productCategoryId = :productCategoryId ORDER BY endDate ASC", nativeQuery = true)
    public List<Product> getNewArrivalsByCategory(@Param("productCategoryId") int id);

    @Query(value = "SELECT * FROM Product WHERE productCategoryId = :productCategoryId ORDER BY endDate DESC", nativeQuery = true)
    public List<Product> getLastChanceByCategory(@Param("productCategoryId") int id);

    @Query(value = "SELECT * FROM Product WHERE productCategoryId = :productCategoryId ORDER BY startingPrice DESC", nativeQuery = true)
    public List<Product> getHighToLowByCategory(@Param("productCategoryId") int id);

    @Query(value = "SELECT * FROM Product WHERE productCategoryId = :productCategoryId ORDER BY startingPrice ASC", nativeQuery = true)
    public List<Product> getLowToHighByCategory(@Param("productCategoryId") int id);

    @Query(value = "SELECT * FROM Product WHERE productCategoryId = ?1", nativeQuery = true)
    public List<Product> getByCategory(int id);
}
