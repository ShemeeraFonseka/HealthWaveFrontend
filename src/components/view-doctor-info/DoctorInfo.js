import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
import NavIcon from '../side-bar/NavIcon';
import '../appointment-form/AppointmentForm.css'
import PatientNavIcon from '../patient-sidebar/PatientNavIcon';
import NormalNavBar from '../normal-nav/NormalNavBar';
import '../view-doctor-info/DoctorInfo.css';
// import { CiSearch } from "react-icons/ci";

const DoctorInfo = () => {
  const [filterValue, setFilterValue] = useState('');
  const navigate = useNavigate();
  const { userId } = useParams();



  const [formData, setFormData] = useState({
    doctorId:userId,
    
  });

  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/doctors/${userId}`)
      .then((response) => {
        console.log('################################')
        setDoctor(response.data);
      })
      .catch((error) => {
        window.confirm('Error fetching Doctor:', error);
      });
  }, [filterValue,userId]);

  


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
        <PatientNavIcon/>
        <div className='container'>
        <div className='container-form'>
      
      <h2 className="doctor-name">Dr.{doctor.doctorName} Details</h2><br></br><br></br>
      <div className="doctor-details">
        
        <div className="doctor-id">
          <label><strong>Doctor ID: </strong> </label>
          <span>{`D${String(doctor.doctorId).padStart(2, '0')}`}</span>
        </div><br></br>

        <div>
          <label><strong>Doctor Name: </strong></label>
          <span>Dr. {doctor.doctorName}</span>
        </div><br></br>

        <div className="contact-info">
          <label><strong>Phone: </strong></label>
          <span>+94{doctor.phone}</span>
        </div><br></br>

        <div className="contact-info">
          <label><strong>Email: </strong></label>
          <a href={`mailto:${doctor.email}`} className="email-link">
            {doctor.email}
          </a>
        </div><br></br>

        <div className="specialization-hospital">
          <label><strong>Specialization: </strong></label>
          <span>{doctor.specialization}</span>
        </div><br></br>
        
        <div className="specialization-hospital">
          <label><strong>Hospital: </strong></label>
          <span>{doctor.hospitalName}</span>
        </div><br></br>

        <div className="experience">
          <label><strong>Experience: </strong></label>
          <span>{doctor.experience} years</span>
        </div><br></br>

        <div className="doctorAvailabilityDate">
          <label><strong>Availability Date: </strong></label>
          <span>{doctor.doctorAvailabilityDate} </span>
        </div><br></br>

        <div className="doctorAvailabilityTime">
          <label><strong>Availability Time: </strong></label>
          <span>{doctor.doctorAvailabilityTime} </span>
        </div><br></br>
        </div>


              
        </div>

            
        </div>
         

          
    </div>
  );
};

export default DoctorInfo;
