package com.auction.auctionapp.rest.service;

import com.auction.auctionapp.model.User;
import com.auction.auctionapp.rest.LoginRequest;
import com.auction.auctionapp.rest.RegisterRequest;
import com.auction.auctionapp.rest.UpdateUserRequest;
import com.auction.auctionapp.rest.config.Config;
import com.auction.auctionapp.rest.exception.LoginException;
import com.auction.auctionapp.rest.exception.RegisterException;
import com.auction.auctionapp.store.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserService() {
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getByEmail(String email) {
        return userRepository.getUserByEmail(email);
    }

    public User getUserById(Integer id) {
        return userRepository.getById(id);
    }

    public User loadUser(LoginRequest loginRequest) {

        User user = userRepository.getUserByEmail(loginRequest.getEmail());

        if (passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            return user;
        } else {
            throw new LoginException("Password incorrect!");
        }

    }

    public User saveUser(RegisterRequest requestUser) {
        User createdUser = new User(
                requestUser.getFirstName(),
                requestUser.getLastName(),
                requestUser.getEmail(),
                passwordEncoder.encode(requestUser.getPassword()));

        List<User> list = userRepository.findAll();

        list.forEach((user) -> {
            if(user.getEmail().equals(requestUser.getEmail())) {
                throw new RegisterException("Email already in use!");
            }
        });
        return userRepository.save(createdUser);
    }

    public User updateUser(UpdateUserRequest updateUserRequest) {
        return userRepository.updateUserById(
                updateUserRequest.getUserId(),
                updateUserRequest.getFirstName(),
                updateUserRequest.getLastName(),
                updateUserRequest.getGender(),
                updateUserRequest.getBirthdate(),
                updateUserRequest.getPhone(),
                updateUserRequest.getEmail()
        );
    }

    public User deactivateUser(int id) {
        return userRepository.deactivateUser(id);
    }
}
