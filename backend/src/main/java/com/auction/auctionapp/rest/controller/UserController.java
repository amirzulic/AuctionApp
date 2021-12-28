package com.auction.auctionapp.rest.controller;

import com.auction.auctionapp.model.User;
import com.auction.auctionapp.rest.*;
import com.auction.auctionapp.rest.security.jwt.JWTUtil;
import com.auction.auctionapp.rest.service.UserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@ApiOperation(value = "/", tags = "Auction App Product User Controller")
@RestController
public class UserController {
    @Autowired
    private UserService userService;

    private PasswordEncoder passwordEncoder;

    @ApiOperation(value = "Register the User by inserting it's information", response = RegisterResponse.class)
    @ApiResponses(value = {
            @ApiResponse(code = 500, message = "Server error"),
            @ApiResponse(code = 200, message = "Successful submit",
                    response = RegisterResponse.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Bad request"),
            @ApiResponse(code = 401, message = "Unauthorized request"),
            @ApiResponse(code = 404, message = "Not Found")})
    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> registerUser(@RequestBody RegisterRequest user) {
        User createdUser = userService.saveUser(user);
        return ResponseEntity.ok(new RegisterResponse(createdUser.getUserId(), createdUser.getEmail()));
    }

    @ApiOperation(value = "Log the User in by checking it's information", response = LoginResponse.class)
    @ApiResponses(value = {
            @ApiResponse(code = 500, message = "Server error"),
            @ApiResponse(code = 200, message = "Successful submit",
                    response = LoginResponse.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Bad request"),
            @ApiResponse(code = 401, message = "Unauthorized request"),
            @ApiResponse(code = 404, message = "Not Found")})
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> checkUser(@RequestBody LoginRequest user) {
        User createdUser = userService.loadUser(user);
        return ResponseEntity.ok(new LoginResponse(JWTUtil.addAuthentication(createdUser.getEmail())));
    }

    @ApiOperation(value = "Get the User by the Token (If logged in) provided in it's browser local storage", response = UserInfoResponse.class)
    @ApiResponses(value = {
            @ApiResponse(code = 500, message = "Server error"),
            @ApiResponse(code = 200, message = "Successful retrieval",
                    response = UserInfoResponse.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Bad request"),
            @ApiResponse(code = 401, message = "Unauthorized request"),
            @ApiResponse(code = 404, message = "Not Found")})
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

    @ApiOperation(value = "Update the User information if given on the profile page", response = RegisterResponse.class)
    @ApiResponses(value = {
            @ApiResponse(code = 500, message = "Server error"),
            @ApiResponse(code = 200, message = "Successful submit",
                    response = RegisterResponse.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Bad request"),
            @ApiResponse(code = 401, message = "Unauthorized request"),
            @ApiResponse(code = 404, message = "Not Found")})
    @PostMapping("/user-update")
    public ResponseEntity<RegisterResponse> updateUser(@RequestBody UpdateUserRequest user) {
        User createdUser = userService.updateUser(user);
        return ResponseEntity.ok(new RegisterResponse(createdUser.getUserId(), createdUser.getEmail()));
    }

    @ApiOperation(value = "Deactivate the User by changing it's status", response = RegisterResponse.class)
    @ApiResponses(value = {
            @ApiResponse(code = 500, message = "Server error"),
            @ApiResponse(code = 200, message = "Successful submit",
                    response = RegisterResponse.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Bad request"),
            @ApiResponse(code = 401, message = "Unauthorized request"),
            @ApiResponse(code = 404, message = "Not Found")})
    @PostMapping("/deactivate")
    public ResponseEntity<RegisterResponse> deactivateUser(@RequestParam(name = "userId") int id) {
        User createdUser = userService.deactivateUser(id);
        return ResponseEntity.ok(new RegisterResponse(createdUser.getUserId(), createdUser.getEmail()));
    }
}
