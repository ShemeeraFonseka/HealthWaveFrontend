import React from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import "../home/featured/Featured.css"
import FeaturedCard from "../home/featured/FeaturedCard"
import HomeNavbar from "../../components/home-navbar/HomeNavbar"
import Footer from "../common/footer/Footer"

const Services = () => {
  return (
    <>
    <HomeNavbar/>
      <section className='services mb'>
        <Back name='Our' title='Services - What We Provide' cover={img} />
        <div className='featured container'>
          <FeaturedCard />
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Services
