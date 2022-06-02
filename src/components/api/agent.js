import axios from "axios";

axios.defaults.baseURL = 'https://localhost:5000/api/';
const sleep = () => new Promise(resolve => setTimeout(resolve, 500));

const responseBody = (response) => response.data;


axios.interceptors.response.use(async response => {
    await sleep();
    return response;
});

const requests = {

    get: (url) => axios.get(url).then(responseBody),
    post: (url, body) => axios.post(url,body).then(responseBody),
    put: (url,body) => axios.put(url,body).then(responseBody),
    delete: (url) => axios.delete(url).then(responseBody),

}

const Catalog = {

    list: ()=> requests.get('products'),
    details: (id) => requests.get(`products/${id}`)
}

const TestErrors = {
    get400Error: () => requests.get('buggy/bad-request'),
    get401Error: () => requests.get('buggy/unauthorised'),
    get404Error: () => requests.get('buggy/not-found'),
    get500Error: () => requests.get('buggy/server-error'),
    getValidationError: () => requests.get('buggy/validation-error'),
}

const agent ={

    Catalog,
    TestErrors
}

export default agent;