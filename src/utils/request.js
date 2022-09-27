import axios from 'axios';

const request = axios.create({
    baseURL: 'https://6329b91ad2c97d8c526eab02.mockapi.io/product',
});
export default request;
