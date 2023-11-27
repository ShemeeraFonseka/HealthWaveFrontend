import React, { useState } from 'react';
import NavIcon from '../side-bar/NavIcon';
import './DoctorRegistration.css';
import Password from 'antd/es/input/Password';
import { useNavigate } from 'react-router-dom';
import NormalNavBar from '../normal-nav/NormalNavBar';


const DoctorRegistration = ({ handleAddDoctor }) => {

  const navigate = useNavigate();

  const [doctorName, setDoctorName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [hospital, setHospital] = useState('');
  const [experience, setExperience] = useState('');
  const [doctorFee, setDoctorFee] = useState('');
  const [doctorAvailabilityDays, setDoctorAvailabilityDays] = useState([]);
  const [doctorAvailabilityTime, setDoctorAvailabilityTime] = useState('');
  


  const handleSubmit = async (e) => {
    e.preventDefault();

    const newDoctor = {
      doctorName,
      phone,
      email,
      username,
      password,
      specialization,
      hospitalName: hospital, // Update the field name to match the server's expectation
      experience,
      doctorFee,
      doctorAvailabilityDate: doctorAvailabilityDays.join(','),
      doctorAvailabilityTime,
    };

    try {
      const response = await fetch('http://localhost:8080/api/doctors/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDoctor),
      });

      if (response.ok) {

        navigate('/list-view');
        
        handleAddDoctor(newDoctor);

        setDoctorName('');
        setPhone('');
        setEmail('');
        setUsername('');
        setPassword('');
        setSpecialization('');
        setHospital('');
        setExperience('');
        setDoctorFee('');
        setDoctorAvailabilityDays([]);
        setDoctorAvailabilityTime('');


      } else {
        window.confirm('Error registering the doctor.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDayChange = (day) => {
    setDoctorAvailabilityDays((prevDays) => {
      if (prevDays.includes(day)) {
        return prevDays.filter((selectedDay) => selectedDay !== day);
      } else {
        return [...prevDays, day];
      }
    });
  };


  return (
    <div>
      <NormalNavBar/>
      <NavIcon />
      <div className='container'>


        <form onSubmit={handleSubmit} className='regform'>

          <h3>Doctor Registration Form</h3>
          <br></br><br></br>

          <div className='form-container'>

            <div className="form-section">

              <div>

                <input
                  type="text"
                  value={doctorName}
                  onChange={(e) => setDoctorName(e.target.value)}
                  required
                  placeholder='Doctor Name' />
              </div><br></br>

              <div>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder='Phone' />
              </div><br></br>

              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder='Email' />
              </div><br></br>

              <div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder='username' />
              </div><br></br>

              <div>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder='password' />
              </div><br></br>

              <div>
                <input
                  type="text"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  required
                  placeholder='Specialization' />
              </div><br></br>

              <div>
                <input
                  type="text"
                  value={hospital}
                  onChange={(e) => setHospital(e.target.value)}
                  required
                  placeholder='Hospital' />
              </div><br></br>

              <div>
                <input
                  type="text"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  required
                  placeholder='Experience' />
              </div><br></br>

              
              <div>
                <input
                  type="text"
                  value={doctorFee}
                  onChange={(e) => setDoctorFee(e.target.value)}
                  required
                  placeholder='Doctor Fee' />
              </div>
              <br></br>


            </div>

            <div className="form-section">

              <label>Doctor Availability Days:</label><br></br><br></br>
              <div>

                <div>
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(
                    (day) => (
                      <div key={day} style={{ display: 'flex', alignItems: 'center' ,fontSize:'10px'}}>
                        <input
                          type="checkbox"
                          value={day}
                          checked={doctorAvailabilityDays.includes(day)}
                          onChange={() => handleDayChange(day)}
               
                          className="custom-checkbox"
                        />
                        <label>{day}</label>
                      </div>
                    )
                  )}
                </div>
              </div>



              <br></br><br></br>
              <label>Insert the avilable time for all selected days:</label><br></br><br></br>
              <div>
                <input
                  type="text"
                  name="doctorAvailabilityTime"
                  value={doctorAvailabilityTime}
                  onChange={(e) => setDoctorAvailabilityTime(e.target.value)}
                  required
                  placeholder="Availability Time"
                />
              </div>
              <br></br>

              
              <br></br>
            </div>
          </div>
          <button type="submit">Register Doctor</button><br></br>
        </form>
      </div>
    </div>
  );
};

export default DoctorRegistration;