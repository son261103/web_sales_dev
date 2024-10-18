import apiService from './apiService';

const productService = {
    // Lấy danh sách tất cả sản phẩm
    getAllProducts: async () => {
        try {
            const response = await apiService.get('/products');
            return response.data; // Trả về dữ liệu sản phẩm
        } catch (error) {
            throw error.response ? error.response.data : error.message;
        }
    },

    // Lấy chi tiết một sản phẩm dựa trên ID
    getProductById: async (productId) => {
        try {
            const response = await apiService.get(`/products/${productId}`);
            return response.data; // Trả về dữ liệu chi tiết sản phẩm
        } catch (error) {
            throw error.response ? error.response.data : error.message;
        }
    },

    // Tạo một sản phẩm mới
    createProduct: async (productData) => {
        try {
            const response = await apiService.post('/products', productData);
            return response.data; // Trả về dữ liệu sản phẩm vừa tạo
        } catch (error) {
            throw error.response ? error.response.data : error.message;
        }
    },

    // Cập nhật một sản phẩm dựa trên ID
    updateProduct: async (productId, productData) => {
        try {
            const response = await apiService.put(`/products/${productId}`, productData);
            return response.data; // Trả về dữ liệu sản phẩm vừa cập nhật
        } catch (error) {
            throw error.response ? error.response.data : error.message;
        }
    },

    // Xóa một sản phẩm dựa trên ID
    deleteProduct: async (productId) => {
        try {
            const response = await apiService.delete(`/products/${productId}`);
            return response.data; // Trả về kết quả xóa
        } catch (error) {
            throw error.response ? error.response.data : error.message;
        }
    },
};

export default productService;
