import axios from 'axios'

const key = '3b4b561b256b3a5081f1a06cdae144987a4c0b8b';

// base url 'https://api-ssl.bitly.com/v4/'
//3b4b561b256b3a5081f1a06cdae144987a4c0b8b
const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
    },
})
export default api;