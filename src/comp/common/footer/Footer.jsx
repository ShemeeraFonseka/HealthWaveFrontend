import React from "react";
import { footer } from "../../data/Data";
import "./footer.css";

const Footer = () => {
  return (
    <>
      

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straight to your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' style={{ marginRight: '10px' }}/>
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          
          <div style={{ left: '35px', top: '45px', position: 'relative' }}>
  {footer.map((section, index) => (
    <div className='box' key={index} style={section.style}>
      <h3>{section.title}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {section.text.map((items, itemIndex) => (
          <li key={itemIndex} style={{ marginBottom: '10px' }}>
            {items.list}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>

        </div>
      </footer>
      <div className='legal'>
        <span>© All Rights Reserved Health Wave Pvt Ltd.</span>
      </div>
    </>
  );
}

export default Footer;
