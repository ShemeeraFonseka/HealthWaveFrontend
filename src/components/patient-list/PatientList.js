
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import NormalNavBar from "../normal-nav/NormalNavBar";
import PatientNavIcon from "../patient-sidebar/PatientNavIcon";
import DoctorNavIcon from "../doctor-sidebar/DoctorNavIcon";

export default function PatientList() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/get_PatientList?doctorId=" + sessionStorage.getItem("doctor_id"))
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate();

    const handleButtonClick = (userId) => {
        // Your logic to handle the button click for a specific user
        console.log(`Button clicked for user with ID ${userId}`);

        // Navigate to a new page with the user ID in the URL
        navigate(`/chatDoctor/${userId}`);
    }


    const handleViewClick = (userId) => {
        // Your logic to handle the button click for a specific user
        console.log(`Button clicked for user with ID ${userId}`);

        // Navigate to a new page with the user ID in the URL
        navigate(`/patient-details/${userId}`);
    }


    const handleMedicalClick = (userId) => {
        // Your logic to handle the button click for a specific user
        console.log(`Button clicked for user with ID ${userId}`);

        // Navigate to a new page with the user ID in the URL
        navigate(`/medical-history/${userId}`);
    }

    return (

        <div>
            <NormalNavBar />
            <DoctorNavIcon />
            <div className="container">
                <h2> Patient List</h2><br></br>
                {users.length > 0 && (
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Paient Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                                    <td>{user.id}</td>
                                    <td>{user.patientName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>

                                        <button onClick={() => handleButtonClick(user.id)} style={{ marginRight: '20px' }}>
                                            Chat
                                        </button>
                                        <button onClick={() => handleViewClick(user.id)} style={{ marginRight: '20px' }}>
                                            Medications
                                        </button>
                                        <button onClick={() => handleMedicalClick(user.id)} >
                                            Medical History
                                        </button>
                                    </td>



                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>


    )
}

