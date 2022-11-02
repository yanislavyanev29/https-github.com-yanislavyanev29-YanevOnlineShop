import axios from "axios";
import {store} from "../../redux/configureStore.js"
//import { PaginatedResponse } from "../catalog/Pagination";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

const sleep = () => new Promise(resolve => setTimeout(resolve, 500));

const responseBody = (response) => response.data;

 axios.interceptors.request.use(config => {

     const token = store.getState().account.user?.token;
    if(token) config.headers.Authorization = `Bearer ${token}`;
     return config;
 })

axios.interceptors.response.use(async response => {
  if(process.env.NODE_ENV === 'development')  await sleep();
    
       const pagination = response.headers['pagination'];
     if(pagination){
        response.data = {items: response.data, metaData:JSON.parse(pagination)};
            return response;
          
        
       }
   
    return response;

});

const requests = {

    get: (url,params) => axios.get(url,{params}).then(responseBody),
    post: (url, body) => axios.post(url,body).then(responseBody),
    put: (url,body) => axios.put(url,body).then(responseBody),
    delete: (url) => axios.delete(url).then(responseBody),
    postForm: (url, data) => axios.post(url,data, {
        headers: {'Content-type' : 'multipart/form-data'}
    }).then(responseBody),
    putForm: (url, data) => axios.put(url,data, {
        headers: {'Content-type' : 'multipart/form-data'}
    }).then(responseBody)

}

function createFormData(item) {

    let formData = new FormData();
    for(const key in item){
        formData.append(key, item[key])
    }

    return formData;
}

const Admin = {

    createProduct: (product) => requests.postForm('products', createFormData(product)),
    updateProduct: (product) => requests.putForm('products',createFormData(product)),
    deleteProduct: (id) => requests.delete(`products/${id}`)
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

const Account = {

    login: (values) => requests.post('account/login', values),
    register: (values) => requests.post('account/register', values),
    currentUser: () => requests.get('account/currentUser'),
    fetchAddress: () => requests.get('account/savedAddress')
}

const Orders = {
    list: () => requests.get('orders'),
    fetch: (id) => requests.get(`orders/${id}`),
    create: (values) => requests.post('orders',values)

}

const Payments = {
    createPaymentIntent: () => requests.post('payments', {})
}
const agent ={

    Catalog,
    TestErrors,
    Basket,
    Account,
    Orders,
    Payments,
    Admin
}

export default agent;