import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';


import PatientRegister from './components/patient-register/PatientRegister';
import PatientRegisterForm from './components/patient-register-form/PatientRegisterForm';

import ChangePassword from './components/reset-password/PatientPasswordChange';
import ResetPassword from './components/reset-password/PatientResetPassword';
import SubmitOtp from './components/reset-password/SubmitOtp';

import DoctorListView from './components/doctor-management/DoctorListView';
import DoctorRegistration from './components/doctor-management/DoctorRegistration';
import DoctorUpdate from './components/doctor-management/DoctorUpdate';
import DoctorView from './components/doctor-management/DoctorView';


import Login from './Login';

import './App.css';
import AppointmentForm from './components/appointment-form/AppointmentForm';
import Appointments from './components/appointments/Appointments';

import ChannelledDoctor from './components/ChatUI/ChannelledDoctor';
import ChatUI from './components/ChatUI/ChatUI';
import PatientList from './components/patient-list/PatientList';
import ChannelingDetails from './components/channeling-details/ChannelingDetails';
import ChatDoctorUI from './components/ChatUI/ChatDoctor';
import AdminDashboard from './components/admin-dashboard/AdminDashboard';

import DownloadPDFReportComponent from './components/DownoloadPDFReportComponent';
import PatientDashboard from './components/patient-dashboard/PatientDashboard';
import AccountSelection from './components/AccountSelection';
import DoctorLogin from './DoctorLogin';
import DoctorDashboard from './components/doctor-dashboard/DoctorDashboard';
import AdminLogin from './AdminLogin';




import Home from './comp/home/Home';
import About from './comp/about/About';
import Services from './comp/services/Services';
import Contact from './comp/contact/Contact';





import Navbar from './components/nav-bar/Navbar';
import PatientDetails from './components/patient-details/PatientDetails';
import ViewPatientDetails from './components/viewpatient-details/ViewPatientDetails';
import HomeNavbar from './components/home-navbar/HomeNavbar';
import NormalNavBar from './components/normal-nav/NormalNavBar';
import MedicalHistory from './components/medical-history/MedicalHistory';
import DoctorInfo from './components/view-doctor-info/DoctorInfo';



const App = () => (


  <Router>
    <div>



      <Routes>

      <Route path="/doctor-info/:userId" element={< DoctorInfo />} />


      <Route path="/patient-details/:userId" element={< PatientDetails />} />
      <Route path="/medical-history/:userId" element={< ViewPatientDetails />} />

      <Route path="/view-all-medical-hisory" element={< MedicalHistory />} />


        <Route path="/doctor-login" element={< DoctorLogin />} />
        <Route path="/admin-login" element={< AdminLogin />} />
        <Route path="/login" element={<Login />} />


        <Route path="/appointmentform" element={<AppointmentForm />} />
        <Route path="/appointments" element={<Appointments />} />

        <Route path="/patient" element={<PatientRegister />} />
        <Route path="/patient-registerform" element={<PatientRegisterForm />} />


        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/patient-dashboard" element={< PatientDashboard />} />
        <Route path="/doctor-dashboard" element={< DoctorDashboard />} />

        <Route path="/nav-bar" element={< Navbar />} />
        <Route path="/homenav-bar" element={< HomeNavbar />} />
        <Route path="/normalnav-bar" element={< NormalNavBar />} />

        <Route path="/report" element={< DownloadPDFReportComponent />} />

        <Route path="/account-selection" element={< AccountSelection />} />

        <Route path="/channelledDoctor" element={<ChannelledDoctor />} />

        <Route path="/chatui/:userId" element={<ChatUI />} />
        <Route path="/chatDoctor/:userId" element={<ChatDoctorUI />} />

        <Route path="/patientList" element={<PatientList />} />

        <Route path="/channelingDeails" element={<ChannelingDetails />} />

        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/submit-otp/:email" element={<SubmitOtp />} />
        <Route path="/change-password/:email" element={<ChangePassword />} />

        <Route path="/list-view" element={<DoctorListView />} />
        <Route path="/register-doctor" element={<DoctorRegistration />} />
        <Route path="/update-doctor/:doctorId" element={<DoctorUpdate />} />
        <Route path="/view-doctor/:doctorId" element={<DoctorView />} />

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />


        



      </Routes>



    </div>
  </Router>
);

export default App;





