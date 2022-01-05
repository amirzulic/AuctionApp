package com.auction.auctionapp.store;

import com.auction.auctionapp.model.User;
import com.auction.auctionapp.rest.RegisterRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Query(value = "SELECT * FROM Users WHERE email = ?1", nativeQuery = true)
    public User getUserByEmail(String email);

    @Query(value = "UPDATE Users SET firstName = :firstName, lastName = :lastName," +
            "gender = :gender, birthdate = :birthdate, phone = :phone, email = :email " +
            "WHERE userId = :userId", nativeQuery = true)
    public User updateUserById(@Param("userId") int id,
                               @Param("firstName") String firstName,
                               @Param("lastName") String lastName,
                               @Param("gender") String gender,
                               @Param("birthdate") String birthdate,
                               @Param("phone") String phone,
                               @Param("email") String email);

    @Query(value = "UPDATE Users SET active = 0 WHERE userId = :userId", nativeQuery = true)
    public User deactivateUser(@Param("userId") int id);

    @Query(value = "SELECT * FROM Users u" +
            " INNER JOIN bid b ON u.userId = b.userId" +
            " WHERE b.productId = :productId", nativeQuery = true)
    public List<User> getBiddersByProduct(@Param("productId") int id);
}

