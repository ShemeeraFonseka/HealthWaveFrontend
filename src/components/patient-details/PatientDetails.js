import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import NavIcon from '../side-bar/NavIcon';
import '../appointment-form/AppointmentForm.css'
import emailjs from '@emailjs/browser';
import PatientNavIcon from '../patient-sidebar/PatientNavIcon';
import DoctorNavIcon from '../doctor-sidebar/DoctorNavIcon';
import NormalNavBar from '../normal-nav/NormalNavBar';



// import { CiSearch } from "react-icons/ci";

const PatientDetails = () => {
  const [filterValue, setFilterValue] = useState('');
  const navigate = useNavigate();
  const { userId } = useParams();

  const form = useRef();



  const [formData, setFormData] = useState({
    patient_id: userId,
    bloodType: '',
    weight: '',
    height: '',
    bloodSugar: '',
    bloodPressure: '',
    diagnosis: '',
    medication: '',
    age: '',
    doctorId: sessionStorage.getItem("doctor_id")
  });

  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/viewPatientDetails?patientId=${userId}`)
      .then((response) => {
        console.log('################################')
        setPatients(response.data);
      })
      .catch((error) => {
        console.error('Error fetching patients:', error);
      });
  }, [filterValue, userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/savePatientMedications', formData);
      console.log('Data sent successfully:', response.data);
      navigate('/patientList')

      emailjs.sendForm('service_e7ofpk8', 'template_5upimbk', form.current, 'l80KzJlwdVwy0cDHA')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });

    } catch (error) {
      console.error('Error:', error);
    }
  };


  useEffect(() => {
    // Set the current date and time when the component mounts
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setFormData(prevData => ({
      ...prevData,
      date: currentDate.toISOString().split('T')[0], // format: YYYY-MM-DD
      time: currentTime,
    }));
  }, []);

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };


  return (
    <div>
      <NormalNavBar/>
      <DoctorNavIcon />

      <div className='container'>

        <form ref={form} onSubmit={handleSubmit} className='regform'>
          <br></br><label>Patient id : {patients.patient_id}</label><br></br>
          <label>Patient name : {patients.patient_name}</label><br></br>

          <label>Email : {patients.email}</label><br></br>
          <label>Phone Number : {patients.phone_number}</label>

          <div className='middle-column'>
            <div>
              <h3 className='app'>Patient Health Details Form</h3>
            </div><br></br><br></br>

            <input


              type="text"
              id="patient_id"
              name="patient_id"
              onChange={handleChange}
              placeholder='Patient ID'
              value={patients.patient_id}
              readOnly

            /><br></br>

            <input


              type="text"
              id="patient_name"
              name="patient_name"
              onChange={handleChange}
              placeholder='Patient Name'
              value={patients.patient_name}
              readOnly

            /><br></br>


            <input


              type="text"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder='Email'
              value={patients.email}
              readOnly

            /><br></br>

            <input


              type="text"
              id="phone_number"
              name="phone_number"
              onChange={handleChange}
              placeholder='Phone Number'
              value={patients.phone_number}
              readOnly

            /><br></br>


            <input


              type="text"
              id="bloodType"
              name="bloodType"
              onChange={handleChange}
              placeholder='blood Type'


            /><br></br>

            <input
              type="number"
              id="weight"
              name="weight"
              onChange={handleChange}
              placeholder='weight'

            /><br></br>

            <input
              type="number"
              id="height"
              name="height"
              onChange={handleChange}
              placeholder='height'

            /><br></br>

            <input
              type="number"
              id="bloodSugar"
              name="bloodSugar"
              onChange={handleChange}
              placeholder='bloodSugar'

            /><br></br>

            <input
              type="number"
              id="bloodPressure"
              name="bloodPressure"
              onChange={handleChange}
              placeholder='bloodPressure'
            /><br></br>


            <input
              type="text"
              id="diagnosis"
              name="diagnosis"
              onChange={handleChange}
              placeholder='diagnosis'
              required
            /><br></br>

            <input
              type="text"
              id="medication"
              name="medication"
              onChange={handleChange}
              placeholder='medication'
              required
            /><br></br>

            <input
              type="number"
              id="age"
              name="age"
              onChange={handleChange}
              placeholder='age'
            /><br></br><br></br>

            <input
              type="hidden"
              id="doctor_name"
              name="Doctor_name"
              onChange={handleChange}
              placeholder='Doctor Name'
              value={sessionStorage.getItem("doctor_name")}
            /><br></br>

            <input
              type="hidden"
              id="date"
              name="doctor_date"
              onChange={handleDateChange}
              placeholder='Date'
              value={formData.date}
            /><br></br>

            

            <button type="submit">Submit</button><br></br><br></br>

          </div>


        </form>
      </div>
    </div>
  );
};

export default PatientDetails;
