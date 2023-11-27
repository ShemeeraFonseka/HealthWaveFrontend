import React, { useState, useEffect } from "react";
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  const [showAdditionalParagraph, setShowAdditionalParagraph] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleButtonClick = () => {
    setShowAdditionalParagraph(!showAdditionalParagraph);

    // Hide the button when clicked
    setShowButton(false);

    // Automatically show the button after 6 seconds
    setTimeout(() => {
      setShowButton(true);
    }, 6000);
  };

  useEffect(() => {
    // Automatically minimize after 6 seconds
    const timeoutId = setTimeout(() => {
      setShowAdditionalParagraph(false);
    }, 6000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [showAdditionalParagraph]);

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='hero-content'>
            <Heading title='HEALTH WAVE' subtitle='YOUR BEST CARE' />
            <p className='hero-description' style={{ textAlign: 'center' }}>
              Empowering your journey to optimal health with advanced healthcare solutions. <br />
              At Health Wave, we prioritize your well-being and provide personalized care for a healthier,
            </p>
          </div>
        </div>
      </section>

      <section className='about'>
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Application' subtitle='Check out our Software' />
            <p>Experience the convenience of accessing medical services online. Our platform allows you to schedule appointments, consult with doctors, and manage your health records from the comfort of your home.</p>
            {showAdditionalParagraph && (
              <p>This software provides wonderful flexibility management for admins. Admins can efficiently manage doctors and patients, ensuring seamless operations and enhanced healthcare services.</p>
            )}
            {showButton && (
              <button className='btn2' onClick={handleButtonClick}>
                More About Us
              </button>
            )}
          </div><br></br>
          <img src='./immio.jpg' alt='' style={{ width: '70%' }} />
        </div>
      </section>
    </>
  );
};

export default Hero;
