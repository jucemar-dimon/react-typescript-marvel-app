import axios from "axios";

export const api = axios.create({
    baseURL: `http://gateway.marvel.com/v1/public`,
    params: {
        apikey: process.env.REACT_APP_MARVEL_API_KEY,
    },
});
