export const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Kiểm tra định dạng email
    return regex.test(email);
};

// export const isValidPassword = (password) => {
//     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Kiểm tra định dạng mật khẩu
//     return regex.test(password);
// };
