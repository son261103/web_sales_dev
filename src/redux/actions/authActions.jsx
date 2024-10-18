import {LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT} from '../types';
import AuthService from "../../services/authService";


// Đăng ký người dùng
export const register = (userData) => async (dispatch) => {
    try {
        const result = await AuthService.register(userData);
        dispatch({type: REGISTER_SUCCESS, payload: result.user});
        return result.message;
    } catch (error) {
        dispatch({type: REGISTER_FAIL, payload: error});
        throw error;
    }
};

// Đăng nhập người dùng
export const login = (userData) => async (dispatch) => {
    try {
        const result = await AuthService.login(userData);
        localStorage.setItem('token', result.token); // Lưu token vào localStorage
        dispatch({type: LOGIN_SUCCESS, payload: result.user});
        return result.message;
    } catch (error) {
        dispatch({type: LOGIN_FAIL, payload: error});
        throw error;
    }
};

// Đăng xuất người dùng
export const logout = () => (dispatch) => {
    AuthService.logout(); // Gọi phương thức logout
    dispatch({type: LOGOUT});
};
