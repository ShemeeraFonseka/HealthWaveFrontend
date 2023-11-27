import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavIcon from '../side-bar/NavIcon';
import '../appointment-form/AppointmentForm.css'
import { CiSearch } from "react-icons/ci";
import emailjs from '@emailjs/browser';
import NormalNavBar from '../normal-nav/NormalNavBar';




const AppointmentForm = () => {

  const form = useRef();

  











  const [filterValue, setFilterValue] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState({});

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    patient_name: '',
    patient_id: '',
    phone_number: '',
    email: '',
    doctor_name: '',
    doctor_id: '',
    doctor_date: '',
    doctor_time: '',
    doctor_fee: '',
    hospital_fee: '',
    total_fee: '',
  });

  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/registeredpatients?patientName=${filterValue}`)
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => {
        console.error('Error fetching patients:', error);
      });
  }, [filterValue]);



  const HOSPITAL_FEE = 2000;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'doctor_fee') {
      const doctorFee = parseFloat(value) || 0;
      const totalFee = doctorFee + HOSPITAL_FEE;
  
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
        hospital_fee: HOSPITAL_FEE.toString(),
        total_fee: totalFee.toFixed(2),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilterValue(value);
  };

  const handlePatientSelect = (selectedPatient) => {
    setFormData({
      ...formData,
      patient_name: selectedPatient.patient_name,
      patient_id: selectedPatient.patient_id,
      phone_number: selectedPatient.phone_number,
      email: selectedPatient.email,
    });
  };





  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/createAppointment', formData);
      window.confirm('Appointment created successfully:', response.data);
      navigate('/appointments');

      emailjs.sendForm('service_ipfqo1m', 'template_soom6lj', form.current, 'l80KzJlwdVwy0cDHA')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      })

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const filteredPatients = [...new Set(patients.map((patient) => patient.patient_name))]
    .filter((patientName) => patientName.toLowerCase().includes(filterValue.toLowerCase()));



  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/doctors/all`)
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.error('Error fetching doctors:', error);
      });
  }, []);

  const handleDoctorSelect = (e) => {
    const selectedDoctorName = e.target.value;
    const selectedDoctor = doctors.find((doctor) => doctor.doctorName === selectedDoctorName);
  
    if (selectedDoctor) {
      const doctorFee = selectedDoctor.doctorFee.toFixed(2);
      const totalFee = parseFloat(doctorFee) + HOSPITAL_FEE;
  
      setFormData((prevFormData) => ({
        ...prevFormData,
        doctor_name: selectedDoctor.doctorName,
        doctor_id: selectedDoctor.doctorId,
        doctor_fee: doctorFee,
        total_fee: totalFee.toFixed(2),
      }));
      setSelectedDoctor(selectedDoctor);
    }
  };
  



  return (
    <div>
      <NormalNavBar/>
      <NavIcon />

      <div>

        <form ref={form} onSubmit={handleSubmit} className='three-column-form'>

          <div className='left-column' >
            <br></br>

            <div >
              <input
                type="text"
                id="filterPatientName"
                onChange={handleFilterChange}
                placeholder='Search by patient name' />
            </div><br></br>

            <ul>
              {filteredPatients.map((patientName) => (
                <li
                  key={patientName}
                  onClick={() =>
                    handlePatientSelect(
                      patients.find((patient) => patient.patient_name === patientName)
                    )
                  }
                >
                  {patientName}
                </li>
              ))}
            </ul>
          </div>

          <div className='middle-column'>
            <div>
              <h3 className='app'>Appointment Form</h3>
            </div><br></br><br></br>


            <input
              type="text"
              id="patient_name"
              name="patient_name"
              value={formData.patient_name}
              onChange={handleInputChange}
              placeholder='Patient Name'
              readOnly
            /><br></br>

            <input
              type="text"
              id="patient_id"
              name="patient_id"
              value={formData.patient_id}
              onChange={handleInputChange}
              placeholder='Patient ID'
              readOnly
            /><br></br>

            <input
              type="text"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleInputChange}
              placeholder='Phone Number'
              readOnly
            /><br></br>

            <input
              type="text"
              id="email"
              name="user_email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder='Email'
              readOnly
            /><br></br>


            <div>
            <select
              id="doctor_name"
              name="Doctor_name"
              required
              onChange={handleDoctorSelect}
              value={selectedDoctor.doctorName || ''}
            >
              <option value="" disabled>Select Doctor</option>
              {doctors.map((doctor) => (
                <option key={doctor.doctorId} value={doctor.doctorName}>
                  {doctor.doctorName}
                </option>
              ))}
            </select>
            </div><br></br>

            <input
              type="text"
              id="doctor_id"
              name="doctor_id"
              value={formData.doctor_id}
              onChange={handleInputChange}
              placeholder='Doctor ID'
              readOnly
            /><br></br>

            


            <input
              type="date"
              id="doctor_date"
              name="doctor_date"
              onChange={handleInputChange}
              placeholder='Appointment Date'
              value={formData.doctor_date}
              required
            /><br></br>

            <input
              type="time"
              id="doctor_time"
              name="doctor_time"
              onChange={handleInputChange}
              placeholder='Appointment Time'
              value={formData.doctor_time}
              required
            /><br></br>

            <input
              type="text"
              id="doctor_fee"
              name="Doctor_Charge"
              value={formData.doctor_fee}
              onChange={handleInputChange}
              placeholder='Doctor Amount'
              readOnly
            /><br></br>

            <input
              type="text"
              id="hospital_fee"
              name="Hospital_Charge"
              value={2000}
              onChange={handleInputChange}
              placeholder='Hospital Amount'
              readOnly
            /><br></br>

            <input
              type="text"
              id="total_fee"
              name="total_charge"
              onChange={handleInputChange}
              placeholder='Total Amount'
              value={formData.total_fee}
              readOnly
            /><br></br><br></br>

            <button type="submit">Submit</button>

          </div>

          <div className='right-column'>
            
          <h3>Doctor Information</h3><br></br>
        <table className='styled-table'>
          <thead>
            <tr>
              <th>Doctor Name</th>
              <th>Avalable dates</th>
              <th>Avalable Time</th>

            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor,index) => (
              <tr key={doctor.doctorId} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>{doctor.doctorName}</td>
                <td>{doctor.doctorAvailabilityDate}</td>
                <td>{doctor.doctorAvailabilityTime}</td>
              </tr>
            ))}
          </tbody>
        </table>



          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;