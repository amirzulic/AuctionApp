package com.auction.auctionapp.rest.controller;

import com.auction.auctionapp.model.Bid;
import com.auction.auctionapp.model.User;
import com.auction.auctionapp.rest.*;
import com.auction.auctionapp.rest.service.BidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BidController {

    @Autowired
    private BidService bidService;

    @PostMapping("/bid")
    public ResponseEntity<BidResponse> saveBid(@RequestBody BidRequest bid) {
        Bid createdBid = bidService.saveBid(bid);
        return ResponseEntity.ok(new BidResponse(createdBid.getPrice()));
    }

    @GetMapping("/bid-info")
    public ResponseEntity<BidResponse> loadBid(@RequestParam(name = "productId") int id) {
        return ResponseEntity.ok(new BidResponse(bidService.loadBidMaxPrice(id), bidService.loadBidCount(id).size()));
    }

    @GetMapping("/bid-user")
    public ResponseEntity<List<Bid>> getBidsByUserId(@RequestParam(name = "userId") int id) {
        return ResponseEntity.ok(new ArrayList<Bid>(bidService.getBidsByUserId(id)));
    }
}
