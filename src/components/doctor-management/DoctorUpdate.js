import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavIcon from '../side-bar/NavIcon';
import './DoctorRegistration.css';
import NormalNavBar from '../normal-nav/NormalNavBar';

const DoctorUpdate = () => {
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [editableDoctor, setEditableDoctor] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/doctors/${doctorId}`)
      .then((response) => response.json())
      .then((data) => {
        setDoctor(data);
        setEditableDoctor(data);
      })
      .catch((error) => {
        console.error('Error fetching doctor details:', error);
      });
  }, [doctorId]);

  const handleUpdate = () => {
    fetch(`http://localhost:8080/api/doctors/${doctorId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editableDoctor),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Doctor updated:', data);
        window.history.back();
      })
      .catch((error) => {
        console.error('Error updating doctor:', error);
      });
  };

  const handleDayChange = (day) => {
    const currentAvailabilityDays = Array.isArray(editableDoctor.doctorAvailabilityDate)
      ? editableDoctor.doctorAvailabilityDate
      : editableDoctor.doctorAvailabilityDate ? editableDoctor.doctorAvailabilityDate.split(',') : [];

    const updatedAvailabilityDays = currentAvailabilityDays.includes(day)
      ? currentAvailabilityDays.filter((selectedDay) => selectedDay !== day)
      : [...currentAvailabilityDays, day];

    setEditableDoctor({
      ...editableDoctor,
      doctorAvailabilityDate: updatedAvailabilityDays.join(','),
    });
  };



  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditableDoctor({
      ...editableDoctor,
      [name]: value,
    });
  };

  if (!doctor) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NormalNavBar/>
      <NavIcon />
      <div className='container'>
<div className='regform'>
       

          <h2>Update Doctor Details</h2><br></br>

          <div >
            
            <label>Doctor ID:</label>
            <span>{`D${String(doctor.doctorId).padStart(2, '0')}`}</span>
          </div><br></br><br></br>

          <div className='form-container'>

            <div className="form-section">

            <div>
            <label>Doctor Name: </label><br></br><br></br>
              <input
                type="text"
                name="doctorName"
                value={editableDoctor.doctorName}
                onChange={handleInputChange}
              />
            </div><br></br>

            <div>
            <label>Phone: </label><br></br><br></br>
              <input
                type="text"
                name="phone"
                value={editableDoctor.phone}
                onChange={handleInputChange}
              />
            </div><br></br>

            <div>
            <label>Email: </label><br></br><br></br>
              <input
                type="text"
                name="email"
                value={editableDoctor.email}
                onChange={handleInputChange}
              />
            </div><br></br>

            <div>
            <label>Specialization: </label><br></br><br></br>
              <input
                type="text"
                name="specialization"
                value={editableDoctor.specialization}
                onChange={handleInputChange}
              />
            </div><br></br>

            <div>
            <label>Hospital Name: </label><br></br><br></br>
              <input
                type="text"
                name="hospitalName"
                value={editableDoctor.hospitalName}
                onChange={handleInputChange}
              />
            </div><br></br>

            <div>
            <label>Experience: </label><br></br><br></br>
              <input
                type="text"
                name="experience"
                value={editableDoctor.experience}
                onChange={handleInputChange}
              />
            </div><br></br>

            

          </div>

          <div className='form-section'>

          <div>
              <label>Doctor Fee: </label><br></br><br></br>
              <input
                type="text"
                name="doctorFee"
                value={editableDoctor.doctorFee}
                onChange={handleInputChange}

              />
            </div><br></br>

            <div>
              <label>Doctor Availability Days:</label><br></br><br></br>
              <div>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                  <div style={{ display: 'flex', alignItems: 'center' ,fontSize:'10px'}}>
                    <input
                      type="checkbox"
                      value={day}
                      checked={editableDoctor.doctorAvailabilityDate.includes(day)}
                      onChange={() => handleDayChange(day)}
                      className="custom-checkbox"
                    />
                    <label >{day}</label>
                    </div>
                ))}

              </div>
            </div><br></br>
            <div>
              <label>Doctor Availability Time: </label><br></br><br></br>
              <input
                type="text"
                name="doctorAvailabilityTime"
                value={editableDoctor.doctorAvailabilityTime}
                onChange={handleInputChange}
              />
            </div>

          
          

        </div>
        
      </div>
      <button onClick={handleUpdate}>Update</button><br></br><br></br>
    </div>
    </div>
    </div>
  );
};

export default DoctorUpdate;
