import axios from "axios";

const BASE_URL = "https://booking-com15.p.rapidapi.com/api/v1";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-rapidapi-key": "3fe9c36100mshd1053ab965460bfp12ba87jsndec9dd624d16",
    "x-rapidapi-host": "booking-com15.p.rapidapi.com",
  },
});

export default apiClient;
