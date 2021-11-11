package com.auction.auctionapp.rest.security.jwt;

import com.auction.auctionapp.model.User;
import com.auction.auctionapp.rest.service.UserService;
import com.auction.auctionapp.store.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JWTFilter extends OncePerRequestFilter {

    @Autowired
    private UserRepository userRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String JWTToken = request.getHeader("Authorization");
        User user = userRepository.getUserByEmail(JWTUtil.getEmail(JWTToken));

        JWTUtil.validateToken(JWTToken, user);
    }
}
