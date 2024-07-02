import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api';
import '../css/Register.css';

const Register: React.FC = () => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await register(formData);
            if (response.status === 201) {
                navigate('/home');
            }
        } catch (error: any) {
            if (error.response) {
                console.error('Registration error:', error.response.data);
            } else if (error.request) {
                console.error('Registration error: No response received from server');
            } else {
                console.error('Registration error:', error.message);
            }
        }
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    );
};

export default Register;
