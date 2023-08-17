import axios from 'axios'

const timeout = 6000
const axiosInstance = axios.create({
    baseURL: 'https://allollal.amocrm.ru/api/v4',
    timeout,
    withCredentials: true,
})

const client = {
    get: axiosInstance.get,
    post: axiosInstance.post,
    put: axiosInstance.put,
    delete: axiosInstance.delete,
}

export default client
