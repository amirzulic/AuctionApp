package com.auction.auctionapp.rest.service;

import com.auction.auctionapp.model.Bid;
import com.auction.auctionapp.rest.BidRequest;
import com.auction.auctionapp.store.BidRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BidService {

    @Autowired
    BidRepository bidRepository;

    public Bid saveBid(BidRequest bidRequest) {
        Bid bid = new Bid(bidRequest.getPrice());

        return bidRepository.save(bid);
    }

    public List<Bid> loadBids() {
        return bidRepository.findAll();
    }
}
