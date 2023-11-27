import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import DoctorNavIcon from '../doctor-sidebar/DoctorNavIcon';
import NormalNavBar from '../normal-nav/NormalNavBar';

const ViewPatientDetails = () => {
  const { userId } = useParams();
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/getPatientMedications?patient_id=${userId}`)
      .then((response) => {
        setMedications(response.data);
      })
      .catch((error) => {
        window.confirm('Error fetching patient details:', error);
      });
  }, [userId]);

  return (
    <div>
      <NormalNavBar/>

      <DoctorNavIcon/>

      <div className='container'>
      

      <h2>Medications</h2><br></br>
      <table className='styled-table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Blood Type</th>
            <th>Blood Sugar Level</th>
            <th>Blood Pressure Level</th>
            <th>Diagnosis</th>
            <th>Medications</th>

          </tr>
        </thead>
        <tbody>
          {medications.map((medication,index) => (
              <tr key={medication.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>{medication.date}</td>
                <td>{medication.height}</td>
                
                <td>{medication.weight}</td>
                <td>{medication.bloodType}</td>
                <td>{medication.bloodSugar}</td>
                <td>{medication.bloodPressure}</td>
                <td>{medication.diagnosis}</td>
                <td>{medication.medication}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ViewPatientDetails;
