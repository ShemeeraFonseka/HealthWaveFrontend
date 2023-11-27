import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PatientResetPassword.css';
import Navbar from '../nav-bar/Navbar';
import AppFooter from '../../AppFooter';
import Footer from '../../comp/common/footer/Footer';
import HomeNavbar from '../home-navbar/HomeNavbar';

const SubmitOtp = () => {
  const [otp, setOtp] = useState('');
  const { email } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(`Email from route parameters: ${decodeURIComponent(email)}`);
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/patients/submit-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(decodeURIComponent(email))}&otp=${otp}`,
      });

      if (response.ok) {
        const responseData = await response.text();
        window.confirm('OTP submission successful', responseData);
        navigate(`/change-password/${encodeURIComponent(email)}`);
      } else {
        window.confirm('OTP submission failed');
      }
    } catch (error) {
      window.confirm('An error occurred while making the API call:', error);
    }
  };

  return (
    <div>
<HomeNavbar/>
      <div className='reset'>
        
        <form onSubmit={handleSubmit} className='resetform'>
        <h2>Submit OTP</h2><br></br>
          <div>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              placeholder='OTP'
            />
          </div><br></br><br></br>
          <button type="submit">Submit OTP</button>
        </form>
      </div>
<Footer/>
    </div>
  );
};

export default SubmitOtp;
