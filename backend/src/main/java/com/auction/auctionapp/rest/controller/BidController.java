package com.auction.auctionapp.rest.controller;

import com.auction.auctionapp.model.Bid;
import com.auction.auctionapp.model.User;
import com.auction.auctionapp.rest.*;
import com.auction.auctionapp.rest.service.BidService;
import io.swagger.annotations.ApiOperation;
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

    @ApiOperation(value = "Save the Bid that the User has entered", response = Iterable.class)
    @PostMapping("/bid")
    public ResponseEntity<BidResponse> saveBid(@RequestBody BidRequest bid) {
        Bid createdBid = bidService.saveBid(bid);
        return ResponseEntity.ok(new BidResponse(createdBid.getPrice()));
    }

    @ApiOperation(value = "Get Bid info on the Product page", response = Iterable.class)
    @GetMapping("/bid-info")
    public ResponseEntity<BidResponse> loadBid(@RequestParam(name = "productId") int id) {
        return ResponseEntity.ok(new BidResponse(bidService.loadBidMaxPrice(id), bidService.loadBidCount(id).size()));
    }

    @ApiOperation(value = "Get all the Bids of a user", response = Iterable.class)
    @GetMapping("/bid-user")
    public ResponseEntity<List<Bid>> getBidsByUserId(@RequestParam(name = "userId") int id) {
        return ResponseEntity.ok(new ArrayList<Bid>(bidService.getBidsByUserId(id)));
    }
}
