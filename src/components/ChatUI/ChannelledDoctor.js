// import React from 'react';

import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../ChatUI/ChannelledDoctor.css';
import PatientNavIcon from "../patient-sidebar/PatientNavIcon";
import NormalNavBar from "../normal-nav/NormalNavBar";

export default function ChannelledDoctor(){
    const [users,setUsers]=useState([])
    

    useEffect(()=>{
        fetch("http://localhost:8080/get_ChannelDoctors?patientId="+ sessionStorage.getItem("patient_id"))
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(err => console.log(err))
    },[] )

    const navigate = useNavigate();

  const handleButtonClick = (userId) => {
    // Your logic to handle the button click for a specific user
    console.log(`Button clicked for user with ID ${userId}`);
    
    // Navigate to a new page with the user ID in the URL
    navigate(`/chatui/${userId}`);
  }

  const handleViewClick = (userId) => {
    // Your logic to handle the button click for a specific user
    console.log(`Button clicked for user with ID ${userId}`);
    
    // Navigate to a new page with the user ID in the URL
    navigate(`/doctor-info/${userId}`);
  }


    return(
        <div>
            <NormalNavBar/>
            <PatientNavIcon/>
        <div className="container">
        <h2>Channelled Doctors</h2>
        <label>Here you can chat with your Channelled Doctors</label><br></br>
        {users.length > 0 && (
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Doctor ID</th>
                        <th>Doctor Name</th>
                        <th>Action</th> 
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index) => (
                        <tr key={user.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                            <td>{user.id}</td>
                            <td>{user.doctorName}</td>
                            <td>   
                            <button onClick={() => handleButtonClick(user.id)}>chat</button>
                            <span style={{ margin: '0 6px' }}></span>
                                <button onClick={() => handleViewClick(user.id)}>view </button>
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



