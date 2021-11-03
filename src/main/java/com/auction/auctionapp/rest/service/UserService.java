package com.auction.auctionapp.rest.service;

import com.auction.auctionapp.model.User;
import com.auction.auctionapp.rest.RegisterRequest;
import com.auction.auctionapp.rest.exception.RegisterException;
import com.auction.auctionapp.store.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.server.ResponseStatusException;
import org.w3c.dom.Entity;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    PasswordEncoder passwordEncoder;

    List<User> list = new ArrayList<>();

    public UserService() {}

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getOneUser(Integer id) {
        return userRepository.getById(id);
    }

    public User getUserByEmail(String email) {
        return userRepository.getUserByEmail(email);
    }

    public void saveUser(RegisterRequest requestUser) {

        passwordEncoder = new BCryptPasswordEncoder();

        User user = new User(requestUser.getFirstName(),
                requestUser.getLastName(),
                requestUser.getEmail(),
                requestUser.getPassword());

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        list = userRepository.findAll();
        for(int i = 0; i < list.size(); i++) {
            if(list.get(i).getEmail().equals(requestUser.getEmail())) {
                throw  new RegisterException("Email already in use!");
            }
        }
        userRepository.save(user);
    }

}
