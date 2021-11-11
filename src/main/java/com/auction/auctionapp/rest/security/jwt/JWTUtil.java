package com.auction.auctionapp.rest.security.jwt;

import com.auction.auctionapp.model.User;
import com.auction.auctionapp.rest.exception.LoginException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JWTUtil {

    private static String jwtSecret;
    private static int expirationTime;

    @Value("${jwt.secret}")
    public void setJWTSecret(String jwtSecret) {
        this.jwtSecret = jwtSecret;
    }

    @Value("#{new Integer('${jwt.expirationTime}')}")
    public void setJWTExpiration(int expirationTime) {
        this.expirationTime = expirationTime;
    }

    public static String getEmail(String token) {
        return  Jwts.parser()
                .setSigningKey(jwtSecret)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    public static Boolean validateToken(String token, User user) {
        if (token != null) {
            String email = getEmail(token);
            if (user.getEmail().equals(email)) {
                return false;
            }
        }
        return true;
    }

    public static String addAuthentication(String email) {

        String JWT = Jwts.builder()
                .setSubject(email)
                .setExpiration(new Date(System.currentTimeMillis() + expirationTime))
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();

        return JWT;
    }

}
