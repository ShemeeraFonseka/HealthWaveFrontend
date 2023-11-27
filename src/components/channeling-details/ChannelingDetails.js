// import React from 'react';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import PatientNavIcon from "../patient-sidebar/PatientNavIcon";
import NormalNavBar from "../normal-nav/NormalNavBar";
import Footer from "../../comp/common/footer/Footer";

export default function ChannelingDetails() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        // Get patient ID from session data
        const patientId = sessionStorage.getItem('patient_id');

        if (patientId) {
            fetch(`http://localhost:8080/get_channelingDetails?patientId=${patientId}`)
                .then(response => response.json())
                .then(data => setUsers(data))
                .catch(err => console.log(err));
        } else {
            // Handle the case where patient ID is not available in session data
            console.log('Patient ID not found in session data');
        }
    }, []);


    const navigate = useNavigate();

    const handleButtonClick = (userId) => {
        // Your logic to handle the button click for a specific user
        console.log(`Button clicked for user with ID ${userId}`);

        // Navigate to a new page with the user ID in the URL
        navigate(`/details/${userId}`);
    }
    return (
        <div>
            <NormalNavBar/>
            <PatientNavIcon />
            <div className="container">
                <h2>Channeling Details</h2><br></br>
                {users.length > 0 && (
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Appoinment Id</th>
                                <th>Doctor Name</th>
                                <th>Patient Number</th>
                                <th>Appointment Date</th>
                                <th>Appointment Time</th>
                                <th>Paid Amount</th>
                                <th>Payment Date</th>
                                <th>Payment Time</th>

                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.appointment_id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                                    <td>{user.appointment_id}</td>
                                    <td>{user.doctor_name}</td>
                                    <td>{user.patient_no}</td>
                                    <td>{user.doctor_date}</td>
                                    <td>{user.doctor_time}</td>
                                    <td>{user.total_fee}</td>
                                    <td>{user.appointment_date}</td>
                                    <td>{user.appointment_time}</td>


                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

        </div>


    )
}



