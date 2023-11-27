import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Navbar from './components/nav-bar/Navbar';
import HomeNavbar from './components/home-navbar/HomeNavbar';
import Footer from './comp/common/footer/Footer';


const AdminLogin = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');



    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/adminlogin', {
                username: username,
                password: password
            });

            if (response.status === 200) {
                sessionStorage.setItem("admin_id", response.data.admin_id);
                navigate('/admin-dashboard');
            } else {
                setMessage('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setMessage('An error occurred during login. Please try again.');
        }
    };

    return (
        <div>
<HomeNavbar/>
        <div className='two-col'>

            
            <div className='log'>
                <div className='right-col'>
                    <h1>Admin Login</h1><br></br>
                    <div>
                        <input
                        className='log-input'
                            type="text"
                            placeholder="Username"
                            value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div><br></br>
                    <div>
                        <input
                        className='log-input'
                            type="password"
                            placeholder="Password"
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div><br></br><br></br>
                    <button onClick={handleLogin}>Login</button>
                    <p className='errormsg'>{message}</p>
                </div>
            </div>
        </div>
<Footer/>
        </div>
    );
};

export default AdminLogin;
