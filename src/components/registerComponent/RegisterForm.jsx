import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {register} from '../../redux/actions/authActions';
import SocialAuth from "../common/SocialAuth";
import FormInputRegister from "./FormInputRegister";
import {toast} from 'react-toastify'; // Import toast
import {useNavigate} from 'react-router-dom';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset error state

        // Kiểm tra các trường thông tin
        if (!name || !email || !phone || !address || !gender || !dob || !password || !confirmPassword) {
            setError('Vui lòng điền đầy đủ thông tin.');
            toast.error('Vui lòng điền đầy đủ thông tin.');
            return;
        }

        // Kiểm tra xác thực ở đây (bạn có thể thêm các kiểm tra như định dạng email, mật khẩu, ...)
        if (password !== confirmPassword) {
            setError('Mật khẩu không khớp');
            toast.error('Mật khẩu không khớp');
            return;
        }

        try {
            const userData = {name, email, phone, address, gender, dob, password};
            const message = await dispatch(register(userData)); // Gọi action register
            toast.success(message); // Hiển thị thông báo thành công
            navigate('/login');
        } catch (err) {
            setError(err.message || 'Đăng ký thất bại');
            toast.error(err.message || 'Đăng ký thất bại');
        }
    };

    return (
        <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="login-form animate__animated animate__fadeInRight">
                <h1 className="text-center mb-4">Đăng Ký</h1>

                <form onSubmit={handleSubmit}>
                    <FormInputRegister
                        type="text"
                        id="name"
                        placeholder="Nhập tên"
                        icon="fas fa-user"
                        label="Tên"
                        value={name}
                        onChange={(e) => setName(e.target.value)} // Cập nhật giá trị tên
                    />
                    <FormInputRegister
                        type="email"
                        id="email"
                        placeholder="Nhập email"
                        icon="fas fa-envelope"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Cập nhật giá trị email
                    />
                    <FormInputRegister
                        type="tel"
                        id="phone"
                        placeholder="Nhập số điện thoại"
                        icon="fas fa-phone"
                        label="Số điện thoại"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} // Cập nhật giá trị số điện thoại
                    />
                    <FormInputRegister
                        type="text"
                        id="address"
                        placeholder="Nhập địa chỉ"
                        icon="fas fa-map-marker-alt"
                        label="Địa chỉ"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} // Cập nhật giá trị địa chỉ
                    />

                    <div className="mb-3">
                        <select
                            className="form-select"
                            id="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)} // Cập nhật giá trị giới tính
                        >
                            <option value="">Chọn giới tính</option>
                            <option value="male">Nam</option>
                            <option value="female">Nữ</option>
                            <option value="other">Khác</option>
                        </select>
                    </div>

                    <FormInputRegister
                        type="date"
                        id="dob"
                        placeholder="Ngày sinh"
                        icon="fas fa-calendar-alt"
                        label="Ngày sinh"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)} // Cập nhật giá trị ngày sinh
                    />
                    <FormInputRegister
                        type="password"
                        id="password"
                        placeholder="Nhập mật khẩu"
                        icon="fas fa-lock"
                        label="Mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Cập nhật giá trị mật khẩu
                    />
                    <FormInputRegister
                        type="password"
                        id="confirm-password"
                        placeholder="Xác nhận mật khẩu"
                        icon="fas fa-lock"
                        label="Xác nhận mật khẩu"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} // Cập nhật giá trị xác nhận mật khẩu
                    />

                    <button type="submit" className="btn btn-primary w-100">
                        Đăng Ký
                    </button>

                    {/* Hiển thị thông báo lỗi nếu có */}
                    {error && <p className="text-danger">{error}</p>}

                    <SocialAuth/>
                </form>

                <p className="text-center mt-4">
                    Đã có tài khoản?{' '}
                    <a href="#" className="text-decoration-none">
                        Đăng nhập
                    </a>
                </p>
            </div>
        </div>
    );
};

export default RegisterForm;
