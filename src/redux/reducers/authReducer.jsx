import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT } from '../types';

// State khởi tạo
const initialState = {
    user: null, // Thông tin người dùng
    error: null, // Lỗi từ các action
    isAuthenticated: false, // Trạng thái xác thực
};

// Reducer cho authentication
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS: // Đăng nhập thành công
        case REGISTER_SUCCESS: // Đăng ký thành công
            return {
                ...state,
                user: action.payload, // Lưu thông tin người dùng vào state
                isAuthenticated: true, // Đánh dấu người dùng đã xác thực
                error: null, // Reset lỗi
            };
        case LOGIN_FAIL:
        case REGISTER_FAIL: // Đăng ký thất bại
            return {
                ...state,
                error: action.payload, // Lưu thông báo lỗi vào state
            };
        case LOGOUT: // Đăng xuất
            return {
                ...state,
                user: null, // Xóa thông tin người dùng
                isAuthenticated: false, // Đánh dấu người dùng chưa xác thực
            };
        default:
            return state; // Trả về state hiện tại nếu không có action nào phù hợp
    }
};

export default authReducer;
