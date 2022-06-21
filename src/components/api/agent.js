import axios from "axios";
import { PaginatedResponse } from "../catalog/Pagination";

axios.defaults.baseURL = 'http://localhost:5000/api/';
axios.defaults.withCredentials = true;

const sleep = () => new Promise(resolve => setTimeout(resolve, 500));

const responseBody = (response) => response.data;


axios.interceptors.response.use(async response => {
    await sleep();
    
    //    const pagination = response.headers['pagination'];
    //  if(pagination){
    //       response.data = new PaginatedResponse(response.data, JSON.parse(pagination));
    //       return response;
        
    //    }
    return response;

});

const requests = {

    get: (url,params) => axios.get(url,{params}).then(responseBody),
    post: (url, body) => axios.post(url,body).then(responseBody),
    put: (url,body) => axios.put(url,body).then(responseBody),
    delete: (url) => axios.delete(url).then(responseBody),

}

const Catalog = {

    list: (params)=> requests.get('products',params),
    details: (id) => requests.get(`products/${id}`),
    fetchFilters: () => requests.get('products/filters')
}

const TestErrors = {
    get400Error: () => requests.get('buggy/bad-request'),
    get401Error: () => requests.get('buggy/unauthorised'),
    get404Error: () => requests.get('buggy/not-found'),
    get500Error: () => requests.get('buggy/server-error'),
    getValidationError: () => requests.get('buggy/validation-error'),
}


const Basket = {

    get: () => requests.get('basket'),
    addItem: (productId , quantity = 1) => requests.post(`basket?productId=${productId}&quantity=${quantity}`, {}),
    removeItem: (productId,quantity = 1) => requests.delete(`basket?productId=${productId}&quantity=${quantity}`),
}
const agent ={

    Catalog,
    TestErrors,
    Basket
}

export default agent;