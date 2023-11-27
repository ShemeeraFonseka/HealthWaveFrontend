import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import leftColumnImage from '../src/components/images/logo.png';
import Navbar from './components/nav-bar/Navbar';
import Footer from './comp/common/footer/Footer';
import HomeNavbar from './components/home-navbar/HomeNavbar';


const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigateRestPassword = () => {
        navigate('/reset-password')
    }

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/login', {
                username: username,
                password: password
            });

            if (response.status === 200) {
                sessionStorage.setItem("patient_id", response.data.patient_id);
                navigate('/patient-dashboard');
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
            <HomeNavbar />
            <div className='two-col'>


                <div className='log'>
                    <div className='right-col'>
                        <h1>Welcome!!</h1><br></br>

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
                        <p className='frgot' onClick={navigateRestPassword}>Forgot Password</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
