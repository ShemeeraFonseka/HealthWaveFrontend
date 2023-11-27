import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../nav-bar/Navbar';
import './PatientResetPassword.css';
import AppFooter from '../../AppFooter';
import Footer from '../../comp/common/footer/Footer';
import HomeNavbar from '../home-navbar/HomeNavbar';



const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/patients/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${email}`,
      });

      if (response.ok) {
        window.confirm('Password reset request successful');
        navigate(`/submit-otp/${encodeURIComponent(email)}`);
      } else {
        window.confirm('Password reset request failed');
      }
    } catch (error) {
      window.confirm('An error occurred while making the API call:', error);
    }
  };

  return (
    <div>
      <HomeNavbar />
      <div className='reset'>

        <form onSubmit={handleSubmit} className='resetform'>
          <h2>Reset Password</h2><br></br>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your Email'
            required
          />
          <br></br><br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPassword;
