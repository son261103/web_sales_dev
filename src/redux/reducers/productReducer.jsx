import {
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAIL,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAIL
} from '../types';

const initialState = {
    products: [], // Danh sách sản phẩm product: null, // Để lưu sản phẩm theo ID
    product: null, // Để lưu sản phẩm theo ID
    error: null,  // Thông tin lỗi
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload, // Lưu sản phẩm vào state
                error: null, // Xóa thông báo lỗi nếu có
            };
        case FETCH_PRODUCTS_FAIL:
        case ADD_PRODUCT_FAIL:
        case UPDATE_PRODUCT_FAIL:
        case DELETE_PRODUCT_FAIL:
            return {
                ...state,
                error: action.payload, // Lưu thông tin lỗi
            };
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                products: [...state.products, action.payload], // Thêm sản phẩm mới vào danh sách
                error: null,
            };
        case UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.payload.id ? action.payload : product
                ),
                error: null,
            };
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload),
                error: null,
            };
        case FETCH_PRODUCT_SUCCESS:
            return {...state, product: action.payload, error: null}; // Lưu sản phẩm
        case FETCH_PRODUCT_FAIL:
            return {...state, error: action.payload}; // Lưu lỗi
        default:
            return state;
    }
};

export default productReducer;
