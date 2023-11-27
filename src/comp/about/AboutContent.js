// AboutContent.js
import React from "react";
import Heading from "../common/Heading";
import "./about.css"
const AboutContent = () => {
  return (
    <div className='container flex mtop'>
      <div className='left row'>
        <Heading title='Our Application' subtitle='Check out our company story and work process' />

        <p>Experience the convenience of accessing medical services online. Our platform allows you to schedule appointments, consult with doctors, and manage your health records from the comfort of your home.</p>
       
        <button className='btn2'>More About Us</button>
      </div>
    
      <img src='./immio.jpg' alt='' style={{ width: '70%' }} />
    </div>
  );
};

export default AboutContent;
