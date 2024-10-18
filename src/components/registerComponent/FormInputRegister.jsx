import React from 'react';

const FormInputRegister = ({ type, id, placeholder, icon, label, value, onChange }) => {
    return (
        <div className="mb-3 position-relative form-floating">
            <input
                type={type}
                className="form-control"
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <label htmlFor={id}>
                <i className={icon}></i> {label}
            </label>
        </div>
    );
};

export default FormInputRegister;
