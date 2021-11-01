package com.auction.auctionapp.store;

import com.auction.auctionapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Query(value = "SELECT * FROM Users WHERE email = ?1", nativeQuery = true)
    public User getUserByEmail(String email);

}

