import '../nav-bar/NavbarStyles.css';
import {useNavigate} from 'react-router-dom';
import leftColumnImage from '../images/logo.png';
import '../nav-bar/NavbarStyles.css';


const NormalNavBar=()=>{
    const navigate=useNavigate();

    const navigateToHome=()=>{
        navigate('/')
    }
    return(

        
        <div>

        <nav>
        <img className='logoimage' src={leftColumnImage} alt="Left Column Image" />
        
            <ul id="navbar2">
            
                <li><a className='active' href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><button onClick={navigateToHome}>Logout</button></li>
            </ul>

            </nav>
        </div>
        

    )
}

export default NormalNavBar;