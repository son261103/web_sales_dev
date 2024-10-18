import axios from 'axios';

// Tạo một instance của axios với cấu hình mặc định
const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL , // Cấu hình fallback nếu biến môi trường không tồn tại
    timeout: 10000, // Thời gian chờ (timeout) trong 10 giây
    headers: {
        'Content-Type': 'application/json', // Thiết lập header cho các yêu cầu JSON
    },
});

// Ghi log URL API để kiểm tra
console.log("API URL from env: ", process.env.REACT_APP_API_URL);
console.log("API URL: ", apiClient.defaults.baseURL);

// Tạo phương thức get, post, put, delete
const apiService = {
    get: (url, config = {}) => {
        console.log(`GET request to: ${url}`); // Ghi log cho các yêu cầu GET
        return apiClient.get(url, config);
    },
    post: (url, data, config = {}) => {
        console.log(`POST request to: ${url} with data:`, data); // Ghi log cho các yêu cầu POST
        return apiClient.post(url, data, config);
    },
    put: (url, data, config = {}) => {
        console.log(`PUT request to: ${url} with data:`, data); // Ghi log cho các yêu cầu PUT
        return apiClient.put(url, data, config);
    },
    delete: (url, config = {}) => {
        console.log(`DELETE request to: ${url}`); // Ghi log cho các yêu cầu DELETE
        return apiClient.delete(url, config);
    },
};

export default apiService;
