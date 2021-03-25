import axios from 'axios'
let urlTemplate = 'https://picsum.photos/v2/list?page=';

export function getData(page,limit) {
    return axios.get(urlTemplate+ page+ limit);
}