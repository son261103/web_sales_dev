import React from 'react';

const SocialAuth = () => {
    return (
        <div className="social-login mt-4 text-center">
            <p>Hoặc đăng nhập với</p>
            <div className="d-flex justify-content-center">
                <div className="social-icon me-3">
                    <a href="#">
                        <i className="fa-brands fa-google"></i>
                    </a>
                </div>
                <div className="social-icon">
                    <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SocialAuth;
