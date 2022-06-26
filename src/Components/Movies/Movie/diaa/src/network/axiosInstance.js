import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/",
    params: {
        api_key: "1b33144be667ac939c59f9d57069f577",
    },
});
// Add a request interceptor
// axiosInstance.interceptors.request.use(
//     function (config) {
//         // Do something before request is sent
//         console.log(config);
//         config.headers["Accept-language"] = "en";
//         config.headers["Authorization"] = "asds6a4ds65ad48d4a65s4adas5d";
//         return config;
//     },
//     function (error) {
//         // Do something with request error
//         return Promise.reject(error);
//     }
// );

// Add a response interceptor
// axiosInstance.interceptors.response.use(
//     function (response) {
//         // Any status code that lie within the range of 2xx cause this function to trigger
//         // Do something with response data
//         return response;
//     },
//     function (error) {
//         // Any status codes that falls outside the range of 2xx cause this function to trigger
//         // Do something with response error
//         return Promise.reject(error);
//     }
// );
export default axiosInstance;
