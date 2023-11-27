import React, { useState, useEffect } from 'react';
import { FaRegEye, FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './DoctorListView.css';
import NavIcon from '../side-bar/NavIcon';
import NormalNavBar from '../normal-nav/NormalNavBar';

const DoctorListView = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://localhost:8080/api/doctors/all')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        window.confirm('Error fetching data:', error);
      });
  };

  const handleDelete = (doctorId) => {
    if (window.confirm('Are you sure you want to delete this doctor?')) {
      fetch(`http://localhost:8080/api/doctors/${doctorId}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.status === 200) {
            fetchData();
          } else {
            window.confirm('Error deleting doctor:', response.statusText);
          }
        })
        .catch((error) => {
          window.confirm('Error deleting doctor:', error);
        });
    }
  };

  const filteredData = data.filter((item) => {
    const formattedDoctorId = `D${String(item.doctorId).padStart(2, '0')}`;
    return formattedDoctorId.includes(searchQuery);
  });

  return (
    <div>
<NormalNavBar/>
      <NavIcon />

      <div className='leftbutton'>
        <Link to="/register-doctor">
          <button>+ New</button>
        </Link>
      </div>
      <div className="filter">
        <input
          type="text"
          placeholder="Enter Doctor ID..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="container">
        <h3>Doctors</h3><br></br><br></br>
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Doctor Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Username</th>
              <th>Password</th>
              <th>Specialization</th>
              <th>Hospital</th>
              <th>Experience</th>
              <th>Fee</th>
              <th>Availabile Date</th>
              <th>Availabile Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>{`D${String(item.doctorId).padStart(2, '0')}`}</td>
                <td>Dr. {item.doctorName}</td>
                <td>+94{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.username}</td>
                <td>{item.password}</td>
                <td>{item.specialization}</td>
                <td>{item.hospitalName}</td>
                <td>{item.experience}</td>
                <td>LKR {item.doctorFee}.00</td>
                <td>{item.doctorAvailabilityDate}</td>
                <td>{item.doctorAvailabilityTime}</td>
                <td>

                  <div className="actions">
                    <Link to={`/view-doctor/${item.doctorId}`}>
                      <FaRegEye />
                      <span></span>
                    </Link>
                    <Link to={`/update-doctor/${item.doctorId}`}>
                      <FaRegEdit />

                    </Link>
                    <span onClick={() => handleDelete(item.doctorId)}>
                      <FaTrashAlt />
                    </span>
                  </div>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
  );
};

export default DoctorListView;
