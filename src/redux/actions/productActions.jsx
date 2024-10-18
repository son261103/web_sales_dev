import {
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAIL,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAIL
} from '../types';
import ProductService from '../../services/productService';

// Lấy danh sách sản phẩm
export const fetchProducts = () => async (dispatch) => {
    try {
        const products = await ProductService.getAllProducts();
        dispatch({type: FETCH_PRODUCTS_SUCCESS, payload: products});
    } catch (error) {
        dispatch({type: FETCH_PRODUCTS_FAIL, payload: error});
        throw error;
    }
};

// Lấy sản phẩm theo ID
export const fetchProductById = (productId) => async (dispatch) => {
    try {
        const product = await ProductService.getProductById(productId);
        dispatch({type: FETCH_PRODUCT_SUCCESS, payload: product});
    } catch (error) {
        dispatch({type: FETCH_PRODUCT_FAIL, payload: error});
        throw error;
    }
};


// Thêm sản phẩm mới
export const addProduct = (productData) => async (dispatch) => {
    try {
        const newProduct = await ProductService.addProduct(productData);
        dispatch({type: ADD_PRODUCT_SUCCESS, payload: newProduct});
        return 'Thêm sản phẩm thành công';
    } catch (error) {
        dispatch({type: ADD_PRODUCT_FAIL, payload: error});
        throw error;
    }
};

// Cập nhật sản phẩm
export const updateProduct = (productId, productData) => async (dispatch) => {
    try {
        const updatedProduct = await ProductService.updateProduct(productId, productData);
        dispatch({type: UPDATE_PRODUCT_SUCCESS, payload: updatedProduct});
        return 'Cập nhật sản phẩm thành công';
    } catch (error) {
        dispatch({type: UPDATE_PRODUCT_FAIL, payload: error});
        throw error;
    }
};

// Xóa sản phẩm
export const deleteProduct = (productId) => async (dispatch) => {
    try {
        await ProductService.deleteProduct(productId);
        dispatch({type: DELETE_PRODUCT_SUCCESS, payload: productId});
        return 'Xóa sản phẩm thành công';
    } catch (error) {
        dispatch({type: DELETE_PRODUCT_FAIL, payload: error});
        throw error;
    }
};
