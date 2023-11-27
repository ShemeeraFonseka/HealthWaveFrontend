import '../nav-bar/NavbarStyles.css';
import {useNavigate} from 'react-router-dom';
import leftColumnImage from '../images/logo.png';


const Navbar=()=>{
    const navigate=useNavigate();

    const navigateToLogin=()=>{
        navigate('/login')
    }
    return(

        
        <div>

        <nav>
        
        
            <ul id="navbar">
            <li><img className='logoimage' src={leftColumnImage} alt="Left Column Image" /></li>
            
                <li><a className='active' href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><button onClick={navigateToLogin}>Login</button></li>
            </ul>

            </nav>
        </div>
        

    )
}

export default Navbar;