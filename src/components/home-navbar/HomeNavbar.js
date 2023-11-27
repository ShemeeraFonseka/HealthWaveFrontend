import '../nav-bar/NavbarStyles.css';
import {useNavigate} from 'react-router-dom';
import leftColumnImage from '../images/logo.png';
import '../home-navbar/HomeNavbar.css';


const HomeNavbar=()=>{
    const navigate=useNavigate();

    const navigateToLogin=()=>{
        navigate('/login')
    }

    const navigateToDoctorLogin=()=>{
        navigate('/doctor-login')
    }

    const navigateToAdminLogin=()=>{
        navigate('/admin-login')
    }

    return(

        
        <div>

        <nav>
        <img className='logoimage' src={leftColumnImage} alt="Left Column Image" />
        
            <ul id="navbar">
            
                <li><a className='active' href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><button onClick={navigateToLogin} style={{marginRight:'15px'}}>I am a Patient</button></li>
                <li><button onClick={navigateToDoctorLogin} style={{marginRight:'15px'}}>I am a Doctor</button></li>
                <li><button onClick={navigateToAdminLogin} style={{marginRight:'15px'}}>Health Wave</button></li>
            </ul>

            </nav>
        </div>
        

    )
}

export default HomeNavbar;