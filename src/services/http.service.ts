import axios from 'axios';

export default {
    get: async (url) => await axios.get(url),
    post: async (url, data) => axios.post(url, data),
    delete: async (url) => axios.delete(url),
};
