package com.auction.auctionapp.rest.service;

import com.auction.auctionapp.model.Bid;
import com.auction.auctionapp.rest.BidRequest;
import com.auction.auctionapp.store.BidRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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

    public List<Bid> getBidsByUserId(int id) {
        return bidRepository.getBidByUserId(id);
    }

    public double loadBidMaxPriceByUserId(int id) {
        return bidRepository.getBidMaxPriceUserId(id);
    }

    public List<Bid> loadBidCountByUserId(int id) {
        return bidRepository.getBidCountUserId(id);
    }
}
