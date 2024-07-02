import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';
import '../css/Login.css';

const Login: React.FC = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await login(formData);
            if (response.status === 200) {
                navigate('/home');
            }
        } catch (error: any) {
            if (error.response) {
                console.error('Login error:', error.response.data);
            } else if (error.request) {
                console.error('Login error: No response received from server');
            } else {
                console.error('Login error:', error.message);
            }
        }
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="/">Register</a></p>
        </div>
    );
};

export default Login;
