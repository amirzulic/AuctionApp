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
    private static String secret;
    private static int expiration_time;

    @Value("${jwt.secret}")
    public void setJWTSecret(String secret) {
        this.secret = secret;
    }

    @Value("${jwt.expirationTime}")
    public void setJWTExpiration(int expiration_time) {
        this.expiration_time = expiration_time;
    }


    public static String getEmail(String token) {
        return  Jwts.parser()
                .setSigningKey(secret)
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
            return true;
        }
        return false;
    }

    public static String addAuthentication(String email) {
        String JWT = Jwts.builder()
                .setSubject(email)
                .setExpiration(new Date(System.currentTimeMillis() + expiration_time))
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();

        return JWT;
    }
}
