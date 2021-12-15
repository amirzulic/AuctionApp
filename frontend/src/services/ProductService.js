import axios from 'axios';

export const loadLandingPageProducts = async () => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/products");
}

export const loadProductsByCategory = async (id) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/shop", {params: {productCategoryId: id}});
}

export const loadNewArrivals = async () => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/products/new");
}

export const loadLastChance = async () => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/products/last");
}

export const loadDefaultSortingByCategory = async (id) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/products/default-sorting", {params: {productCategoryId: id}});
}

export const loadNewArrivalsByCategory = async (id) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/products/new-category", {params: {productCategoryId: id}});
}

export const loadLastChanceByCategory = async (id) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/products/last-category", {params: {productCategoryId: id}});
}

export const loadHighToLowByCategory = async (id) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/products/high-low", {params: {productCategoryId: id}});
}

export const loadLowToHighByCategory = async (id) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/products/low-high", {params: {productCategoryId: id}});
}

export const loadProduct = async (id, header) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/product", {params: {productId: id}});
}

