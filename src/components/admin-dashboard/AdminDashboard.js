
import '../admin-dashboard/AdminDashboard.css';
import NavIcon from '../side-bar/NavIcon';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import NormalNavBar from '../normal-nav/NormalNavBar';

const AdminDashboard = () => {

    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    const [patientCount, setPatientCount] = useState(0);

    useEffect(() => {
        const fetchAppointmentCount = async () => {
            try {
                const response = await axios.get('http://localhost:8080/countForDay', {
                    params: {
                        date: new Date().toISOString().split('T')[0]  // Current date in "YYYY-MM-DD" format
                    }
                });
                setCount(response.data);
            } catch (error) {
                console.error('Error fetching appointment count:', error);
            }
        };

        fetchAppointmentCount();
    }, []);




    useEffect(() => {
        const fetchPatientCount = async () => {
            try {
                const response = await axios.get('http://localhost:8080/patientcount');
                setPatientCount(response.data);
            } catch (error) {
                console.error('Error fetching patient count:', error);
            }
        };

        fetchPatientCount();
    }, []);

    const navigateToPatients = () => {
        navigate('/patient')
    }

    const navigateToAppointments = () => {
        navigate('/appointments')
    }

    const navigateToDoctors = () => {
        navigate('/list-view')
    }

    const navigateToReports = () => {
        navigate('/report')
    }

    return (
        <div>
            <NormalNavBar/>
            <NavIcon />
            <div className="container">
                <h1>Admin Dashboard</h1>

                <div className='container2'>



                <div className="count" >
                    <h3>Number of Appointments for Today: {count}</h3>
                </div>

                <div className="count" >
                    <h3>Number of Patients: {patientCount}</h3>
                </div>

            </div><br></br>

                <div className='container1'>
                    

                    <div className="card" onClick={navigateToPatients}>
                        <h2>Patients</h2>

                    </div>


                    <div className="card" onClick={navigateToDoctors}>
                        <h2>Doctors</h2>


                    </div>

                    <div className="card" onClick={navigateToAppointments}>
                        <h2>Appointments</h2>

                    </div>


                    <div className="card" onClick={navigateToReports}>
                        <h2>Reports</h2>

                    </div>

                </div>


            </div>




        </div>
    )

}

export default AdminDashboard;
