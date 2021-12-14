package com.auction.auctionapp.rest.service;

import com.auction.auctionapp.model.Product;
import com.auction.auctionapp.model.ProductCategory;
import com.auction.auctionapp.model.ProductSubCategory;
import com.auction.auctionapp.rest.ProductCategoryResponse;
import com.auction.auctionapp.rest.ProductResponse;
import com.auction.auctionapp.rest.ProductSubCategoryResponse;
import com.auction.auctionapp.store.BidRepository;
import com.auction.auctionapp.store.ProductCategoryRepository;
import com.auction.auctionapp.store.ProductRepository;
import com.auction.auctionapp.store.ProductSubCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private BidRepository bidRepository;

    @Autowired
    private ProductCategoryRepository productCategoryRepository;

    @Autowired
    private ProductSubCategoryRepository productSubCategoryRepository;

    public ProductService() {}

    public List<ProductResponse> getAllProducts() {
        List<Product> list = productRepository.findAll();
        return list.stream().map(p -> new ProductResponse(p.getProductId(), p.getName(), p.getStartingPrice(), p.getDescription())).collect(Collectors.toList());
    }

    public List<ProductResponse> getNewArrivals() {
        List<Product> list = productRepository.getNewArrivals();
        return list.stream().map(p -> new ProductResponse(p.getProductId(), p.getName(), p.getStartingPrice(), p.getDescription())).collect(Collectors.toList());
    }

    public List<ProductResponse> getLastChance() {
        List<Product> list = productRepository.getLastChance();
        return list.stream().map(p -> new ProductResponse(p.getProductId(), p.getName(), p.getStartingPrice(), p.getDescription())).collect(Collectors.toList());
    }

    public ProductResponse getSingleProduct(int id) {
        Product createdProduct = productRepository.findById(id).get();
        return new ProductResponse(createdProduct.getProductId(),createdProduct.getName(),
                createdProduct.getStartingPrice(), createdProduct.getDescription());
    }

    public List<ProductResponse> getProductsByCategory(int id) {
        List<Product> list = productRepository.getByCategory(id);
        return list.stream().map(p -> new ProductResponse(p.getProductId(), p.getName(), p.getStartingPrice(), p.getDescription())).collect(Collectors.toList());
    }

    public List<ProductCategoryResponse> getAllCategories() {
        List<ProductCategory> list = productCategoryRepository.findAll();
        return list.stream().map(p -> new ProductCategoryResponse(p.getProductcategoryid(), p.getCategoryName())).collect(Collectors.toList());
    }

    public List<ProductSubCategoryResponse> getSubCategoriesByCategory(int id) {
        List<ProductSubCategory> list = productSubCategoryRepository.getSubCategoryByCategory(id);
        return list.stream().map(p -> new ProductSubCategoryResponse(p.getProductsubcategoryid(), p.getSubCategoryName(), p.getProductCategoryId())).collect(Collectors.toList());
    }
}
