package com.auction.auctionapp.rest.controller;

import com.auction.auctionapp.model.Product;
import com.auction.auctionapp.rest.ProductResponse;
import com.auction.auctionapp.rest.service.ProductService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@ApiOperation(value = "/", tags = "Auction App Product Controller")
@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @ApiOperation(value = "Get all Products", response = Iterable.class)
    @GetMapping("/products")
    public ResponseEntity<List<ProductResponse>> getProducts() {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getAllProducts()));
    }

    @ApiOperation(value = "Get Products of a Category", response = Iterable.class)
    @GetMapping("/shop")
    public ResponseEntity<List<ProductResponse>> getProductsByCategory(@RequestParam(name = "productCategoryId") int id) {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getProductsByCategory(id)));
    }

    @ApiOperation(value = "Get all Products in a price range", response = Iterable.class)
    @GetMapping("/products/range")
    public ResponseEntity<List<ProductResponse>> getProductsInRange(@RequestParam(name = "low") double low,
                                                                    @RequestParam(name = "high") double high) {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getProductsInRange(low, high)));
    }

    @ApiOperation(value = "Get Products in a price range of a Category", response = Iterable.class)
    @GetMapping("/products/range-category")
    public ResponseEntity<List<ProductResponse>> getProductsInRangeByCategory(@RequestParam(name = "productCategoryId") int id,
                                                                              @RequestParam(name = "low") double low,
                                                                              @RequestParam(name = "high") double high) {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getProductsInRangeByCategory(id, low, high)));
    }

    @ApiOperation(value = "Get Products of a Subcategory", response = Iterable.class)
    @GetMapping("/shop/sub")
    public ResponseEntity<List<ProductResponse>> getProductsBySubCategory(@RequestParam(name = "subCategoryName") String name) {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getProductsBySubCategory(name)));
    }

    @ApiOperation(value = "Get Products of a Subcategory ordered by their name", response = Iterable.class)
    @GetMapping("/shop/sub-default")
    public ResponseEntity<List<ProductResponse>> getProductsBySubCategoryDefaultSort(@RequestParam(name = "subCategoryName") String name) {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getProductsBySubCategoryDefaultSort(name)));
    }

    @ApiOperation(value = "Get Products of a Subcategory ordered by the date they were posted ascending", response = Iterable.class)
    @GetMapping("/shop/sub-new")
    public ResponseEntity<List<ProductResponse>> getProductsBySubCategoryNewArrivals(@RequestParam(name = "subCategoryName") String name) {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getProductsBySubCategoryNewArrivals(name)));
    }

    @ApiOperation(value = "Get Products of a Subcategory ordered by the date they were posted descending", response = Iterable.class)
    @GetMapping("/shop/sub-last")
    public ResponseEntity<List<ProductResponse>> getProductsBySubCategoryLastChance(@RequestParam(name = "subCategoryName") String name) {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getProductsBySubCategoryLastChance(name)));
    }

    @ApiOperation(value = "Get Products of a Subcategory ordered by their price descending", response = Iterable.class)
    @GetMapping("/shop/sub-high")
    public ResponseEntity<List<ProductResponse>> getProductsBySubCategoryHighToLow(@RequestParam(name = "subCategoryName") String name) {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getProductsBySubCategoryHighToLow(name)));
    }

    @ApiOperation(value = "Get Products of a Subcategory ordered by their price ascending", response = Iterable.class)
    @GetMapping("/shop/sub-low")
    public ResponseEntity<List<ProductResponse>> getProductsBySubCategoryLowToHigh(@RequestParam(name = "subCategoryName") String name) {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getProductsBySubCategoryLowToHigh(name)));
    }

    @ApiOperation(value = "Get all the Products ordered by their name", response = Iterable.class)
    @GetMapping("/products/default-sorting")
    public ResponseEntity<List<ProductResponse>> getDefaultSorting() {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getDefaultSorting()));
    }

    @ApiOperation(value = "Get all the Products ordered by the date they were posted ascending", response = Iterable.class)
    @GetMapping("/products/new")
    public ResponseEntity<List<ProductResponse>> getNewArrivals() {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getNewArrivals()));
    }

    @ApiOperation(value = "Get all the Products ordered by the date they were posted descending", response = Iterable.class)
    @GetMapping("/products/last")
    public ResponseEntity<List<ProductResponse>> getLastChance() {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getLastChance()));
    }

    @ApiOperation(value = "Get all the Products ordered by their price descending", response = Iterable.class)
    @GetMapping("/products/high-low")
    public ResponseEntity<List<ProductResponse>> getHighToLow() {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getHighToLow()));
    }

    @ApiOperation(value = "Get all the Products ordered by their price ascending", response = Iterable.class)
    @GetMapping("/products/low-high")
    public ResponseEntity<List<ProductResponse>> getLowToHigh() {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getLowToHigh()));
    }

    @ApiOperation(value = "Get Products of a Category ordered by their name", response = Iterable.class)
    @GetMapping("/products/default-sorting-category")
    public ResponseEntity<List<ProductResponse>> getDefaultSortingByCategory(@RequestParam(name = "productCategoryId") int id) {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getDefaultSortingByCategory(id)));
    }

    @ApiOperation(value = "Get Products of a Category ordered by the date they were posted ascending", response = Iterable.class)
    @GetMapping("/products/new-category")
    public ResponseEntity<List<ProductResponse>> getNewArrivalsByCategory(@RequestParam(name = "productCategoryId") int id) {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getNewArrivalsByCategory(id)));
    }

    @ApiOperation(value = "Get Products of a Category ordered by the date they were posted descending", response = Iterable.class)
    @GetMapping("/products/last-category")
    public ResponseEntity<List<ProductResponse>> getLastChanceByCategory(@RequestParam(name = "productCategoryId") int id) {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getLastChanceByCategory(id)));
    }

    @ApiOperation(value = "Get Products of a Category ordered by their price descending", response = Iterable.class)
    @GetMapping("/products/high-low-category")
    public ResponseEntity<List<ProductResponse>> getHighToLowByCategory(@RequestParam(name = "productCategoryId") int id) {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getHighToLowByCategory(id)));
    }

    @ApiOperation(value = "Get Products of a Category ordered by their price ascending", response = Iterable.class)
    @GetMapping("/products/low-high-category")
    public ResponseEntity<List<ProductResponse>> getLowToHighByCategory(@RequestParam(name = "productCategoryId") int id) {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getLowToHighByCategory(id)));
    }

    @ApiOperation(value = "Get a single Product", response = Iterable.class)
    @GetMapping("/product")
    public ResponseEntity<ProductResponse> getSingleProduct(@RequestParam(name = "productId") int id) {
        return ResponseEntity.ok(new ProductResponse(productService.getSingleProduct(id)));
    }

    @ApiOperation(value = "Get a Product by the User that posted it", response = Iterable.class)
    @GetMapping("/products-user")
    public ResponseEntity<List<ProductResponse>> getProductsByUserId(@RequestParam(name = "userId") int id) {
        return ResponseEntity.ok(new ArrayList<ProductResponse>(productService.getProductsByUserId(id)));
    }
}
