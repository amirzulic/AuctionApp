package com.auction.auctionapp.rest.controller;

import com.auction.auctionapp.model.Bid;
import com.auction.auctionapp.model.User;
import com.auction.auctionapp.rest.*;
import com.auction.auctionapp.rest.service.BidService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@ApiOperation(value = "/", tags = "Auction App Bid Controller")
@RestController
public class BidController {

    @Autowired
    private BidService bidService;

    @ApiOperation(value = "Save the Bid that the User has entered", response = BidResponse.class)
    @ApiResponses(value = {
            @ApiResponse(code = 500, message = "Server error"),
            @ApiResponse(code = 200, message = "Successful submit",
                    response = BidResponse.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Bad request"),
            @ApiResponse(code = 401, message = "Unauthorized request"),
            @ApiResponse(code = 404, message = "Not Found")})
    @PostMapping("/bid")
    public ResponseEntity<BidResponse> saveBid(@RequestBody BidRequest bid) {
        Bid createdBid = bidService.saveBid(bid);
        return ResponseEntity.ok(new BidResponse(createdBid.getPrice()));
    }

    @ApiOperation(value = "Get Bid info on the Product page", response = BidResponse.class)
    @ApiResponses(value = {
            @ApiResponse(code = 500, message = "Server error"),
            @ApiResponse(code = 200, message = "Successful retrieval",
                    response = BidResponse.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Bad request"),
            @ApiResponse(code = 401, message = "Unauthorized request"),
            @ApiResponse(code = 404, message = "Not Found")})
    @GetMapping("/bid-info")
    public ResponseEntity<BidResponse> loadBid(@RequestParam(name = "productId") int id) {
        return ResponseEntity.ok(new BidResponse(bidService.loadBidMaxPrice(id), bidService.loadBidCount(id).size()));
    }

    @ApiOperation(value = "Get all the Bids of a user", response = BidResponse.class)
    @ApiResponses(value = {
            @ApiResponse(code = 500, message = "Server error"),
            @ApiResponse(code = 200, message = "Successful retrieval",
                    response = BidResponse.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Bad request"),
            @ApiResponse(code = 401, message = "Unauthorized request"),
            @ApiResponse(code = 404, message = "Not Found")})
    @GetMapping("/bid-user")
    public ResponseEntity<List<Bid>> getBidsByUserId(@RequestParam(name = "userId") int id) {
        return ResponseEntity.ok(new ArrayList<Bid>(bidService.getBidsByUserId(id)));
    }
}
