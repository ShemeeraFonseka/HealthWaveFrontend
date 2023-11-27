import React, { useState, useEffect,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import NavIcon from '../side-bar/NavIcon';
import '../patient-register/PatientRegister.css';
import axios from 'axios';
import NormalNavBar from '../normal-nav/NormalNavBar';
import emailjs from '@emailjs/browser';


const PatientRegister = () => {

    const navigate = useNavigate();
    const form = useRef();


    const [formData, setFormData] = useState({
        patient_id: '',
        patient_name: '',
        email: '',
        phone_number: '',
        username: '',
        password: '',
    });

    const [registeredPatients, setRegisteredPatients] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/registeredpatients')
            .then((response) => response.json())
            .then((data) => setRegisteredPatients(data))
            .catch((error) => window.confirm('Error fetching registered patient data:', error));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/registerpatient', formData);
            window.confirm('Patient Registered successfully:', response.data);

            // Update the state with the new data
            setRegisteredPatients((prevPatients) => [...prevPatients, response.data]);

            emailjs.sendForm('service_xoc1t2v', 'template_ycjm34a', form.current, 'U80Z9ceHE55U_NwtL')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

        } catch (error) {
            window.confirm('Error:', error);
        }
    };

    const [phoneError, setPhoneError] = useState('');

    const validatePhoneNumber = (phoneNumber) => {
        const phoneRegex = /^\d{10}$/; // Assuming phone number is 10 digits
        return phoneRegex.test(phoneNumber);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'phone_number':
                const isValidPhoneNumber = validatePhoneNumber(value);
                setPhoneError(isValidPhoneNumber ? '' : 'Phone number must be 10 digits');
                break;
            case 'patient_name':
                const isValidName = validateName(value);
                setNameError(isValidName ? '' : 'Patient name must contain only letters');
                break;
            // Add cases for other fields if needed
            default:
                break;
        }

        setFormData({ ...formData, [name]: value });
    };

    const [nameError, setNameError] = useState('');

    const validateName = (name) => {
        const nameRegex = /^[A-Za-z]+$/; // Only letters
        return nameRegex.test(name);
    };

    useEffect(() => {
        // Clear the form data after successful submission
        setFormData({
            patient_name: '',
            email: '',
            phone_number: '',
            username: '',
            password: '',
        });
    }, [registeredPatients]);




    return (
        <div>
<NormalNavBar/>
            <NavIcon />


            <div className='two-columns'>

                <div className='left-column'>



                    <br></br><br></br><br></br>
                    <table className='styled-table'>
                        <thead>
                            <tr>
                                <th>Patient Id</th>
                                <th>Patient Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Registered Date</th>
                                <th>Registered Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {registeredPatients.map((registeredPatient, index) => (
                                <tr key={registeredPatient.patient_id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                                    <td>{`P${String(registeredPatient.patient_id).padStart(2, '0')}`}</td>
                                    <td>{registeredPatient.patient_name}</td>
                                    <td>{registeredPatient.email}</td>
                                    <td>+94{registeredPatient.phone_number}</td>
                                    <td>{registeredPatient.username}</td>
                                    <td>{registeredPatient.password}</td>
                                    <td>{registeredPatient.registered_date}</td>
                                    <td>{registeredPatient.registered_time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>



                <div className='right-column'>

                <form ref={form} className='regform' onSubmit={handleSubmit}>

                    <h3>Patient Registration Form</h3><br></br>

                   

                        <input
                            type="text"
                            id="patient_name"
                            name="patient_name"
                            onChange={handleInputChange}
                            value={formData.patient_name}
                            required
                            placeholder='Patient Name' />
                            <span className='error-message'>{nameError}</span><br></br>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={handleInputChange}
                            value={formData.email}
                            required
                            placeholder='Email' /><br></br>

                        <input
                            type="text"
                            id="phone_number"
                            name="phone_number"
                            onChange={handleInputChange}
                            value={formData.phone_number}
                            required
                            placeholder='Phone Number' />
                            <span className='error-message'>{phoneError}</span><br></br><br></br>

                        <input
                            type="text"
                            id="username"
                            name="username"
                            onChange={handleInputChange}
                            value={formData.username}
                            required
                            placeholder='Username' /><br></br>

                        <input
                            type="text"
                            id="password"
                            name="password"
                            onChange={handleInputChange}
                            value={formData.password}
                            required
                            placeholder='Password' /><br></br><br></br>

                        <button type="submit">Submit</button>

                    </form>
                </div>

            </div>
        </div>



    )
}

export default PatientRegister;