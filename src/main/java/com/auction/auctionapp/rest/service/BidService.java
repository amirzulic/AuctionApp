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
        Bid bid = new Bid(bidRequest.getPrice(), bidRequest.getProductId());
        return bidRepository.save(bid);
    }

    public double loadBidMaxPrice(int id) {
        return bidRepository.getBidMaxPrice(id);
    }

    public List<Bid> loadBidCount(int id) {
        return bidRepository.getBidCount(id);
    }
}
