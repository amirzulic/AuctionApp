package com.auction.auctionapp.rest.controller;

import com.auction.auctionapp.model.User;
import com.auction.auctionapp.rest.service.UserService;
import com.auction.auctionapp.store.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    PasswordEncoder passwordEncoder;

    //User user1 = new User("Amir", "Zulic", "mail@mail.com", "pass");
    List<User> list = new ArrayList<>();

    @GetMapping("/users")
    public List<User> getUsers() {
        list = userService.getAllUsers();
        return list;
    }

    @PostMapping("/register")
    public void registerUser(User user) {
        userService.saveUser(user);
    }

    @PostMapping("/login")
    public Boolean checkUser(String email, String password) {
        User user = userService.getUserByEmail(email);
        passwordEncoder = new BCryptPasswordEncoder();
        if(passwordEncoder.matches(password, user.getPassword())) {
            return true;
        }

        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The password is incorrect!");
    }


}
