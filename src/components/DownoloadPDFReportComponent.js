// DownloadPDFReportComponent.js
import React from 'react';
import axios from 'axios';
import NavIcon from './side-bar/NavIcon';
import './Reports.css';
import NormalNavBar from './normal-nav/NormalNavBar';

const DownloadPDFReportComponent = () => {
    const handleDownload = async () => {
        try {
            const response = await axios.get('http://localhost:8080/registered-patients-report', {
                responseType: 'blob',
            });

            const blob = new Blob([response.data]);
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'registeredPatients_report.pdf');
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            window.confirm('Error downloading PDF Report:', error);
        }
    };

    const handleDownloadcredentials = async () => {
        try {
            const response = await axios.get('http://localhost:8080/patient-credentials-report', {
                responseType: 'blob',
            });

            const blob = new Blob([response.data]);
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'patient_credentials_report.pdf');
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            window.confirm('Error downloading PDF Report:', error);
        }
    };

    const handleDoctorDownload = async () => {
        try {
            const response = await axios.get('http://localhost:8080/registered-doctors-report', {
                responseType: 'blob',
            });

            const blob = new Blob([response.data]);
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'registeredDoctors_report.pdf');
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            window.confirm('Error downloading PDF Report:', error);
        }
    };

    const handleDoctorDownloadcredentials = async () => {
        try {
            const response = await axios.get('http://localhost:8080/doctor-credentials-report', {
                responseType: 'blob',
            });

            const blob = new Blob([response.data]);
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'doctor_credentials_report.pdf');
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            window.confirm('Error downloading PDF Report:', error);
        }
    };

    return (
        <div>
            <NormalNavBar/>
            <NavIcon />
            <div className='page'>
                <div className='reportcard'>
                    <h2>Registered Patients Report</h2><br></br>
                    <button onClick={handleDownload}>Download</button>
                </div>

                <div className='reportcard'>
                    <h2>Patient Credentials Report</h2><br></br>
                    <button onClick={handleDownloadcredentials}>Download</button>
                </div>
            </div>
            <br></br>
            <div className='page'>
                <div className='reportcard'>
                    <h2>Registered Doctors Report</h2><br></br>
                    <button onClick={handleDoctorDownload}>Download</button>
                </div>

                <div className='reportcard'>
                    <h2>Doctor Credentials Report</h2><br></br>
                    <button onClick={handleDoctorDownloadcredentials}>Download</button>
                </div>
            </div>
        </div>
    );
};

export default DownloadPDFReportComponent;
