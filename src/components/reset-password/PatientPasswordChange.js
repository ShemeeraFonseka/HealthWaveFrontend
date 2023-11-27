import React, { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import Navbar from '../nav-bar/Navbar';
import AppFooter from '../../AppFooter';
import './PatientResetPassword.css';


const ChangePasswordPage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [retypeNewPassword, setRetypeNewPassword] = useState('');
  const { email } = useParams();

  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword === retypeNewPassword) {

      fetch('http://localhost:8080/api/patients/updatePassword', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(email)}&newPassword=${newPassword}`,
      })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
        navigate('/')
    } 
    else {
      window.confirm('New passwords do not match.');
    }
  };

  

  return (
    <div>
      <Navbar />
      <div className='reset'>
        <h2>Change Password</h2>
        <form onSubmit={handleSubmit} className='resetform'>
          <div>

            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              placeholder='New Password'
            />
          </div><br></br>
          <div>

            <input
              type="password"
              value={retypeNewPassword}
              onChange={(e) => setRetypeNewPassword(e.target.value)}
              required
              placeholder='Confirm Password'
            />
          </div><br></br><br></br>
          <button type="submit" >Submit</button>
        </form>
      </div>
      <AppFooter />
    </div>
  );
};

export default ChangePasswordPage;