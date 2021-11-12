package com.auction.auctionapp.rest.exception;

import org.apache.juli.logging.Log;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.ZoneId;
import java.time.ZonedDateTime;

@ControllerAdvice
public class ApiExceptionHandler {

    public ApiException createApiException(RuntimeException e) {
        ApiException exception = new ApiException(
                e.getMessage(),
                e,
                HttpStatus.BAD_REQUEST,
                ZonedDateTime.now(ZoneId.of("Z"))
        );

        return exception;
    }

    @ExceptionHandler({RegisterException.class, LoginException.class})
    public ResponseEntity<Object> handleRegisterException(RuntimeException e) {
        return new ResponseEntity<>(createApiException(e), HttpStatus.BAD_REQUEST);
    }
}
