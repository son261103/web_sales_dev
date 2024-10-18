import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/authActions';
import SocialAuth from '../common/SocialAuth';
import { useNavigate, Link } from 'react-router-dom';
import { isValidEmail } from '../../utils/validation';
import { toast } from 'react-toastify'; // Import toast

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset error state

        // Kiểm tra định dạng email
        if (!isValidEmail(email)) {
            setError('Email không hợp lệ');
            toast.error('Email không hợp lệ'); // Hiển thị thông báo lỗi
            return;
        }

        try {
            const message = await dispatch(login({ email, password })); // Gọi action login
            toast.success(message); // Hiển thị thông báo thành công
            navigate('/'); // Chuyển hướng về trang chủ
        } catch (err) {
            setError(err.message || 'Đăng nhập thất bại');
            toast.error(err.message || 'Đăng nhập thất bại'); // Hiển thị thông báo lỗi
        }
    };

    return (
        <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="login-form animate__animated animate__fadeInRight">
                <h1 className="text-center mb-4">Đăng nhập</h1>
                <form onSubmit={handleSubmit}>
                    {/* Email input */}
                    <div className="mb-3 position-relative form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Nhập email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="email"><i className="fas fa-envelope"></i> Email</label>
                    </div>

                    {/* Password input */}
                    <div className="mb-3 position-relative form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Nhập mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Cập nhật giá trị password
                            required
                        />
                        <label htmlFor="password"><i className="fas fa-lock"></i> Mật khẩu</label>
                    </div>

                    {/* Remember me & Forgot password */}
                    <div className="d-flex justify-content-between mb-4">
                        <div className="remember">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Ghi nhớ</label>
                        </div>
                        <a href="#" className="text-decoration-none">Quên mật khẩu?</a>
                    </div>

                    {/* Login button */}
                    <button type="submit" className="btn btn-primary w-100">
                        Đăng nhập
                    </button>

                    {/* Show error message */}
                    {error && <p className="text-danger">{error}</p>}

                    {/* Social login */}
                    <SocialAuth />

                    {/* Register link */}
                    <p className="text-center mt-4">
                        Chưa có tài khoản?
                        <Link to="/register" className="text-decoration-none"> Đăng ký</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
