package com.auction.auctionapp.rest.controller;

import com.auction.auctionapp.model.User;
import com.auction.auctionapp.rest.*;
import com.auction.auctionapp.rest.security.jwt.JWTUtil;
import com.auction.auctionapp.rest.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class UserController {
    @Autowired
    private UserService userService;

    private PasswordEncoder passwordEncoder;

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

    @GetMapping("/user")
    public ResponseEntity<UserInfoResponse> getUserByToken(@RequestParam(name = "token") String token) {
        User createdUser = userService.getByEmail(JWTUtil.getEmail(token));
        return ResponseEntity.ok(new UserInfoResponse(
                createdUser.getUserId(),
                createdUser.getFirstName(),
                createdUser.getLastName(),
                createdUser.getGender(),
                createdUser.getBirthdate(),
                createdUser.getPhone(),
                createdUser.getEmail(),
                createdUser.getPhoto(),
                createdUser.getActive()
        ));
    }

    @PostMapping("/user-update")
    public ResponseEntity<RegisterResponse> updateUser(@RequestBody UpdateUserRequest user) {
        User createdUser = userService.updateUser(user);
        return ResponseEntity.ok(new RegisterResponse(createdUser.getUserId(), createdUser.getEmail()));
    }

    @PostMapping("/deactivate")
    public ResponseEntity<RegisterResponse> deactivateUser(@RequestParam(name = "userId") int id) {
        User createdUser = userService.deactivateUser(id);
        return ResponseEntity.ok(new RegisterResponse(createdUser.getUserId(), createdUser.getEmail()));
    }
}
