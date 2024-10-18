import React from 'react';
import LoginForm from '../components/loginComponent/LoginForm';
import LoginImage from '../components/loginComponent/LoginImage';
import '../styles/user/css/login.css';

const LoginPage = () => {
    return (
        <div className="container login-container">
            <div className="row justify-content-center align-items-center vh-100">
                <LoginImage />
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
