import React from "react"
import Awards from "./awards/Awards"

import Hero from "./hero/Hero"
import HomeNavbar from "../../components/home-navbar/HomeNavbar"
import Footer from "../common/footer/Footer"




const Home = () => {
  return (
    <>
    <HomeNavbar/>
      <Hero />
      
     
      <Awards />
     
  <Footer/>
     
    </>
  )
}

export default Home
