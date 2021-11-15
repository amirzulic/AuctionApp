import axios from 'axios';

const BASE_URL = "http://localhost:8080/product";


class ProductService {

    loadProduct(params) {
        return axios.get(BASE_URL, {params})
    }

}

export default new ProductService();
