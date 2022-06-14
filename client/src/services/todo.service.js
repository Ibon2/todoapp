import axios from 'axios';

const baseURL = 'http://localhost:5000/todos';

export const todoService = {
    getAll() {
        return axios.get(baseURL);
    },
    getOne(todoTitle) {
        return axios.get(baseURL + `/${todoTitle}`);
    },
    add(todoDoc) {
        return axios.post(baseURL, todoDoc);
    },
    delete(todoTitle) {
        return axios.delete(baseURL + `/${todoTitle}`);
    },
    update(todoDoc) {
        return axios.put(baseURL, todoDoc);
    }
}