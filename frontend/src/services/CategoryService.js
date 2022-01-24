import axios from "axios";

export const loadCategories = async () => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/categories");
}

export const loadSubCategories = async (id) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/sub-category", {params: {productCategoryId: id}});
}

export const loadAllSubCategories = async () => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/all-sub-category");
}
