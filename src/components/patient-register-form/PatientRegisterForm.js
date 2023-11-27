import React from 'react';
import { useState,useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../patient-register-form/PatientRegisterForm.css';
import emailjs from '@emailjs/browser';


const PatientRegisterForm = () => {

  const navigate = useNavigate();

  const form = useRef();


  const [formData, setFormData] = useState({
    patient_id: '',
    patient_name: '',
    email: '',
    phone_number: '',
    usename: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/registerpatient', formData);
      console.log('Data sent successfully:', response.data);

      emailjs.sendForm('service_xoc1t2v', 'template_ycjm34a', form.current, 'U80Z9ceHE55U_NwtL')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <div className='container'>


        <h3>Registration Form</h3>
        <form ref={form} onSubmit={handleSubmit} >

          <input
            type="text"
            id="patient_name"
            name="patient_name"
            onChange={handleInputChange}
            placeholder='Patient Name' /><br></br><br></br>

          <input
            type="text"
            id="email"
            name="email"
            onChange={handleInputChange}
            placeholder='Email' /><br></br><br></br>

          <input
            type="text"
            id="phone_number"
            name="phone_number"
            onChange={handleInputChange}
            placeholder='Phone Number' /><br></br><br></br>

          <input
            type="text"
            id="username"
            name="username"
            onChange={handleInputChange}
            placeholder='Username' /><br></br><br></br>

          <input
            type="text"
            id="password"
            name="password"
            onChange={handleInputChange}
            placeholder='Password' /><br></br><br></br>

          <button type="submit">Submit</button>

        </form>
      </div>
    </div>
  )
}

export default PatientRegisterForm;
