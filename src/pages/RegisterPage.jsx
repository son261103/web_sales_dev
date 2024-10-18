import React from 'react';
import ImageSide from "../components/registerComponent/ImageRegister";
import RegisterForm from "../components/registerComponent/RegisterForm";


const RegisterPage = () => {
    return (
        <div className="container login-container">
            <div className="row justify-content-center align-items-center vh-100">
                <ImageSide/>
                <RegisterForm/>
            </div>
        </div>
    );
};

export default RegisterPage;
