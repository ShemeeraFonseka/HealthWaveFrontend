import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"
import HomeNavbar from "../../components/home-navbar/HomeNavbar"
import Footer from "../common/footer/Footer"


const About = () => {
  return (
    <>
    <HomeNavbar/>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Application' subtitle='Check out our company story and work process' />

            <p>Experience the convenience of accessing medical services online. Our platform allows you to schedule appointments, consult with doctors, and manage your health records from the comfort of your home.</p>
           
            <button className='btn2'>More About Us</button>
          </div><br></br>
        
  <img src='./immio.jpg' alt='' style={{ width: '70%' }} />

        </div>
      </section>
     <Footer/>
    </>
  )
}

export default About
