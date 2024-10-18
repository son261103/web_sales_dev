import apiService from './apiService';

// Đăng ký người dùng
const register = async (userData) => {
    try {
        const response = await apiService.get('/users'); // Lấy tất cả người dùng
        const users = response.data;

        const existingUser = users.find(user => user.email === userData.email);
        if (existingUser) {
            throw new Error('Email đã tồn tại, vui lòng chọn email khác.');
        }

        const newUser = await apiService.post('/users', userData);
        return {message: 'Đăng ký thành công', user: newUser.data};
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

// Đăng nhập người dùng
const login = async (userData) => {
    try {
        const response = await apiService.get('/users');
        const users = response.data;

        const user = users.find(user => user.email === userData.email && user.password === userData.password);

        if (user) {
            return {message: 'Đăng nhập thành công', token: 'fake-jwt-token', user};
        } else {
            throw new Error('Email hoặc mật khẩu không đúng');
        }
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

// Hàm đăng xuất người dùng
const logout = () => {
    localStorage.removeItem('token');
    return 'Đăng xuất thành công';
};

// Xuất các hàm
const AuthService = {
    register,
    login,
    logout,
};

export default AuthService;
