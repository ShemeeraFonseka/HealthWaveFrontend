import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../appointments/Appointments.css'
import { Card, Typography } from "@material-tailwind/react";
import NavIcon from '../side-bar/NavIcon';
import NormalNavBar from '../normal-nav/NormalNavBar';

const Appointments = () => {

    const navigate = useNavigate();
    const [appointments, setAppointments] = useState([]);
    const [filterValue, setFilterValue] = useState('');

    const navigateToAppointmentForm = () => {
        navigate('/appointmentform')
    }

    const handleFilterChange = (e) => {
        setFilterValue(e.target.value);
    }

    useEffect(() => {
        const apiUrl = filterValue
            ? `http://localhost:8080/appointments?patientName=${filterValue}`
            : 'http://localhost:8080/appointments';

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => setAppointments(data))
            .catch(error => window.confirm('Error fetching appointment data:', error));
    }, [filterValue]);


    return (
        <div>
            <NormalNavBar/>
            <NavIcon />


            <div className='leftbutton'>
        
          <button onClick={navigateToAppointmentForm}>+ New</button>
        
      </div>

            <div className="filter">
                    <input className='filter-input'
                        type="text"
                        id="filterPatientName"
                        value={filterValue}
                        onChange={handleFilterChange}
                        placeholder='Enter patient name'
                    />
                </div>

            <div className='container'>
                <h3>Appointments</h3><br></br><br></br>

                

                <table className='styled-table'>
                    <thead >
                        <tr>
                            <th>Appointment Id</th>
                            <th>Patient Name</th>
                            <th>Patient Id</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Doctor Name</th>
                            <th>Doctor ID</th>
                            <th>Patient No</th>
                            <th>Appointment Date</th>
                            <th>Appointment Time</th>
                            <th>Paid Amount</th>
                            <th>Payment Date</th>
                            <th>Payment Time</th>

                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment, index) => (
                            <tr key={appointment.appointment_id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                                <td>{`A${String(appointment.appointment_id).padStart(2, '0')}`}</td>
                                <td>{appointment.patient_name}</td>
                                <td>{appointment.patient_id}</td>
                                <td>+94{appointment.phone_number}</td>
                                <td>{appointment.email}</td>
                                <td>{appointment.doctor_name}</td>
                                <td>{appointment.doctor_id}</td>
                                <td>{appointment.patient_no}</td>
                                <td>{appointment.doctor_date}</td>
                                <td>{appointment.doctor_time}</td>
                                <td>LKR {appointment.total_fee}.00</td>
                                <td>{appointment.appointment_date}</td>
                                <td>{appointment.appointment_time}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Appointments;