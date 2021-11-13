package com.auction.auctionapp.rest.controller;

import com.auction.auctionapp.model.User;
import com.auction.auctionapp.rest.LoginRequest;
import com.auction.auctionapp.rest.LoginResponse;
import com.auction.auctionapp.rest.RegisterRequest;
import com.auction.auctionapp.rest.RegisterResponse;
import com.auction.auctionapp.rest.security.jwt.JWTUtil;
import com.auction.auctionapp.rest.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class UserController {
    private UserService userService;

    private PasswordEncoder passwordEncoder;

    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> registerUser(@RequestBody RegisterRequest user) {
        User createdUser = userService.saveUser(user);
        return ResponseEntity.ok(new RegisterResponse(createdUser.getUserId(), createdUser.getEmail()));
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> checkUser(@RequestBody LoginRequest user) {
        User createdUser = userService.loadUser(user);
        return ResponseEntity.ok(new LoginResponse(JWTUtil.addAuthentication(createdUser.getEmail())));
    }
}
