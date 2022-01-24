import axios from 'axios';

export const loadLandingPageProducts = async () => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/products");
}

export const loadProductsByCategory = async (id) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/shop", {params: {productCategoryId: id}});
}

export const loadProductsBySubCategory = async (name) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/shop/sub", {params: {subCategoryName: name}});
}

export const loadProductsBySubCategoryDefaultSorting = async (name) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/shop/sub-default", {params: {subCategoryName: name}});
}

export const loadProductsBySubCategoryNewArrivals = async (name) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/shop/sub-new", {params: {subCategoryName: name}});
}

export const loadProductsBySubCategoryLastChance = async (name) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/shop/sub-last", {params: {subCategoryName: name}});
}

export const loadProductsBySubCategoryHighToLow = async (name) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/shop/sub-high", {params: {subCategoryName: name}});
}

export const loadProductsBySubCategoryLowToHigh = async (name) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/shop/sub-low", {params: {subCategoryName: name}});
}

export const loadProductsInRange = async (low, high) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/products/range", {params: {low: low, high: high}});
}

export const loadProductsInRangeByCategory = async (id, low, high) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/products/range-category", {params: {productCategoryId: id, low: low, high: high}});
}

export const loadDefaultSorting = async () => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/products/default-sorting");
}

export const loadNewArrivals = async () => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/products/new");
}

export const loadLastChance = async () => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/products/last");
}

export const loadHighToLow = async () => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/products/high-low");
}

export const loadLowToHigh = async () => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/products/low-high");
}

export const loadDefaultSortingByCategory = async (id) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/products/default-sorting-category", {params: {productCategoryId: id}});
}

export const loadNewArrivalsByCategory = async (id) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/products/new-category", {params: {productCategoryId: id}});
}

export const loadLastChanceByCategory = async (id) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/products/last-category", {params: {productCategoryId: id}});
}

export const loadHighToLowByCategory = async (id) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/products/high-low-category", {params: {productCategoryId: id}});
}

export const loadLowToHighByCategory = async (id) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/products/low-high-category", {params: {productCategoryId: id}});
}

export const loadProduct = async (id, header) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/product", {params: {productId: id}});
}

export const loadProductsByUserId = async (id) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/products-user", {params: {userId: id}});
}

export const addNewProduct = async (product) => {
    return await axios.post(process.env.REACT_APP_BASE_URL + "/add-product", product);
}

