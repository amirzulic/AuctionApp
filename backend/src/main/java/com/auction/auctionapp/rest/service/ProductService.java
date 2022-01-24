package com.auction.auctionapp.rest.service;

import com.auction.auctionapp.model.Product;
import com.auction.auctionapp.model.ProductCategory;
import com.auction.auctionapp.model.ProductSubCategory;
import com.auction.auctionapp.rest.NewProductRequest;
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

    private List<ProductResponse> returnNewList(List<Product> list) {
        return list.stream().map(p -> new ProductResponse(p.getProductId(), p.getName(), p.getStartingPrice(), p.getDescription(), p.getPicture())).collect(Collectors.toList());
    }

    public List<ProductResponse> getAllProducts() {
        List<Product> list = productRepository.findAll();
        return returnNewList(list);
    }

    public List<ProductResponse> getDefaultSorting() {
        List<Product> list = productRepository.getDefaultSorting();
        return returnNewList(list);
    }

    public List<ProductResponse> getNewArrivals() {
        List<Product> list = productRepository.getNewArrivals();
        return returnNewList(list);
    }

    public List<ProductResponse> getLastChance() {
        List<Product> list = productRepository.getLastChance();
        return returnNewList(list);
    }

    public List<ProductResponse> getHighToLow() {
        List<Product> list = productRepository.getHighToLow();
        return returnNewList(list);
    }

    public List<ProductResponse> getLowToHigh() {
        List<Product> list = productRepository.getLowToHigh();
        return returnNewList(list);
    }

    public List<ProductResponse> getDefaultSortingByCategory(int id) {
        List<Product> list = productRepository.getDefaultSortingByCategory(id);
        return returnNewList(list);
    }

    public List<ProductResponse> getNewArrivalsByCategory(int id) {
        List<Product> list = productRepository.getNewArrivalsByCategory(id);
        return returnNewList(list);
    }

    public List<ProductResponse> getLastChanceByCategory(int id) {
        List<Product> list = productRepository.getLastChanceByCategory(id);
        return returnNewList(list);
    }

    public List<ProductResponse> getHighToLowByCategory(int id) {
        List<Product> list = productRepository.getHighToLowByCategory(id);
        return returnNewList(list);
    }

    public List<ProductResponse> getLowToHighByCategory(int id) {
        List<Product> list = productRepository.getLowToHighByCategory(id);
        return returnNewList(list);
    }

    public ProductResponse getSingleProduct(int id) {
        Product createdProduct = productRepository.findById(id).get();
        return new ProductResponse(createdProduct.getProductId(),createdProduct.getName(),
                createdProduct.getStartingPrice(), createdProduct.getDescription(), createdProduct.getPicture());
    }

    public List<ProductResponse> getProductsInRange(double low, double high) {
        List<Product> list = productRepository.getInRange(low, high);
        return returnNewList(list);
    }

    public List<ProductResponse> getProductsInRangeByCategory(int id, double low, double high) {
        List<Product> list = productRepository.getInRangeByCategory(id, low, high);
        return returnNewList(list);
    }

    public List<ProductResponse> getProductsByCategory(int id) {
        List<Product> list = productRepository.getByCategory(id);
        return returnNewList(list);
    }

    public List<ProductResponse> getProductsBySubCategory(String name) {
        List<Product> list = productRepository.getBySubCategory(name);
        return returnNewList(list);
    }

    public List<ProductResponse> getProductsBySubCategoryDefaultSort(String name) {
        List<Product> list = productRepository.getBySubCategoryDefaultSort(name);
        return returnNewList(list);
    }

    public List<ProductResponse> getProductsBySubCategoryNewArrivals(String name) {
        List<Product> list = productRepository.getBySubCategoryNewArrivals(name);
        return returnNewList(list);
    }

    public List<ProductResponse> getProductsBySubCategoryLastChance(String name) {
        List<Product> list = productRepository.getBySubCategoryLastChance(name);
        return returnNewList(list);
    }

    public List<ProductResponse> getProductsBySubCategoryHighToLow(String name) {
        List<Product> list = productRepository.getBySubCategoryHighToLow(name);
        return returnNewList(list);
    }

    public List<ProductResponse> getProductsBySubCategoryLowToHigh(String name) {
        List<Product> list = productRepository.getBySubCategoryLowToHigh(name);
        return returnNewList(list);
    }

    public List<ProductCategoryResponse> getAllCategories() {
        List<ProductCategory> list = productCategoryRepository.findAll();
        return list.stream().map(p -> new ProductCategoryResponse(p.getProductcategoryid(), p.getCategoryName())).collect(Collectors.toList());
    }

    public List<ProductSubCategoryResponse> getAllSubCategories() {
        List<ProductSubCategory> list = productSubCategoryRepository.findAll();
        return list.stream().map(p -> new ProductSubCategoryResponse(p.getProductsubcategoryid(), p.getSubCategoryName(), p.getProductCategoryId())).collect(Collectors.toList());
    }

    public List<ProductSubCategoryResponse> getSubCategoriesByCategory(int id) {
        List<ProductSubCategory> list = productSubCategoryRepository.getSubCategoryByCategory(id);
        return list.stream().map(p -> new ProductSubCategoryResponse(p.getProductsubcategoryid(), p.getSubCategoryName(), p.getProductCategoryId())).collect(Collectors.toList());
    }

    public List<ProductResponse> getProductsByUserId(int id) {
        List<Product> list = productRepository.getByUserId(id);
        return list.stream().map(p -> new ProductResponse(p.getProductId(), p.getName(), p.getStartingPrice(), p.getDescription(), p.getPicture())).collect(Collectors.toList());
    }

    public Product addNewProduct(NewProductRequest product) {
        Product newProduct = new Product(
                product.getName(),
                product.getStartingPrice(),
                product.getPicture(),
                product.getStartDate(),
                product.getEndDate(),
                product.getUserId(),
                product.getDescription(),
                product.getProductCategoryId(),
                product.getProductSubCategoryId(),
                product.getAddress(),
                product.getCountry(),
                product.getCity(),
                product.getZipcode(),
                product.getPhone()
        );
        return productRepository.save(newProduct);
    }
}
