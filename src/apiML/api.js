import axios from 'axios';

const apiML = axios.create({
    baseURL: 'https://api.mercadolibre.com/sites/MLA/search?q=:query'
});

export default apiML;