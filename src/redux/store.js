import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // Nhập đúng
import authReducer from './reducers/authReducer';
import productReducer from "./reducers/productReducer";

// Kết hợp các reducer
const rootReducer = combineReducers({
    auth: authReducer,
    products: productReducer,
});

// Tạo store với middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
