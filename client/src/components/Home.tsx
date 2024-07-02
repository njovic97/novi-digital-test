import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout, getUser } from '../api';

const Home: React.FC = () => {
    const [user, setUser] = useState({ firstName: '', lastName: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await getUser();
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user:', error);
                navigate('/login');
            }
        };
        fetchUser();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <div>
            <h1>Welcome {user.firstName} {user.lastName}</h1>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
};

export default Home;
