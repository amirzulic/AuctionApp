package com.auction.auctionapp.rest.security.jwt;

import com.auction.auctionapp.model.User;
import com.auction.auctionapp.rest.exception.LoginException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JWTUtil {
    private static Environment environment;

    public static String getEmail(String token) {
        return  Jwts.parser()
                .setSigningKey(environment.getProperty("jwt_secret"))
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
                .setExpiration(new Date(System.currentTimeMillis() + environment.getProperty("jwt_expiration_time")))
                .signWith(SignatureAlgorithm.HS512, environment.getProperty("jwt_secret"))
                .compact();

        return JWT;
    }
}
