package com.auction.auctionapp.store;

import com.auction.auctionapp.model.Product;
import com.auction.auctionapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "SELECT * FROM Product ORDER BY name ASC", nativeQuery = true)
    public List<Product> getDefaultSorting();

    @Query(value = "SELECT * FROM Product ORDER BY endDate ASC", nativeQuery = true)
    public List<Product> getNewArrivals();

    @Query(value = "SELECT * FROM Product ORDER BY endDate DESC", nativeQuery = true)
    public List<Product> getLastChance();

    @Query(value = "SELECT * FROM Product ORDER BY startingPrice DESC", nativeQuery = true)
    public List<Product> getHighToLow();

    @Query(value = "SELECT * FROM Product ORDER BY startingPrice ASC", nativeQuery = true)
    public List<Product> getLowToHigh();

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

    @Query(value = "SELECT * FROM Product p INNER JOIN ProductSubCategory psc" +
            " ON p.productsubcategoryid = psc.productSubCategoryId " +
            "WHERE psc.name = :subCategoryName", nativeQuery = true)
    public List<Product> getBySubCategory(@Param("subCategoryName") String subCatName);

    @Query(value = "SELECT * FROM Product p INNER JOIN ProductSubCategory psc" +
            " ON p.productsubcategoryid = psc.productSubCategoryId " +
            "WHERE psc.name = :subCategoryName ORDER BY p.name ASC", nativeQuery = true)
    public List<Product> getBySubCategoryDefaultSort(@Param("subCategoryName") String subCatName);

    @Query(value = "SELECT * FROM Product p INNER JOIN ProductSubCategory psc" +
            " ON p.productsubcategoryid = psc.productSubCategoryId " +
            "WHERE psc.name = :subCategoryName ORDER BY p.endDate ASC", nativeQuery = true)
    public List<Product> getBySubCategoryNewArrivals(@Param("subCategoryName") String subCatName);

    @Query(value = "SELECT * FROM Product p INNER JOIN ProductSubCategory psc" +
            " ON p.productsubcategoryid = psc.productSubCategoryId " +
            "WHERE psc.name = :subCategoryName ORDER BY p.endDate DESC", nativeQuery = true)
    public List<Product> getBySubCategoryLastChance(@Param("subCategoryName") String subCatName);

    @Query(value = "SELECT * FROM Product p INNER JOIN ProductSubCategory psc" +
            " ON p.productsubcategoryid = psc.productSubCategoryId " +
            "WHERE psc.name = :subCategoryName ORDER BY p.startingPrice DESC", nativeQuery = true)
    public List<Product> getBySubCategoryHighToLow(@Param("subCategoryName") String subCatName);

    @Query(value = "SELECT * FROM Product p INNER JOIN ProductSubCategory psc" +
            " ON p.productsubcategoryid = psc.productSubCategoryId " +
            "WHERE psc.name = :subCategoryName ORDER BY p.startingPrice ASC", nativeQuery = true)
    public List<Product> getBySubCategoryLowToHigh(@Param("subCategoryName") String subCatName);

    @Query(value = "SELECT * FROM Product WHERE startingPrice BETWEEN :low AND :high", nativeQuery = true)
    public List<Product> getInRange(@Param("low") double low,
                                    @Param("high") double high);

    @Query(value = "SELECT * FROM Product WHERE productCategoryId = :productCategoryId AND startingPrice BETWEEN :low AND :high", nativeQuery = true)
    public List<Product> getInRangeByCategory(@Param("productCategoryId") int id,
                                              @Param("low") double low,
                                              @Param("high") double high);

}
