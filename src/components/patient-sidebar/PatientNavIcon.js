import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../patient-sidebar/PatientNavbar.css';
import { IconContext } from 'react-icons';
import { PatientSidebarData } from './PatientSidebar';

function PatientNavIcon() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars style={{ color: '#364958', backgroundColor: '#C9E4CA', marginTop:'100px'}} onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars-close'>
                <AiIcons.AiOutlineClose style={{ backgroundColor: '#364958' }}/>
              </Link>
            </li>
            {PatientSidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default PatientNavIcon;