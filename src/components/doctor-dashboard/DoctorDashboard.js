import { useNavigate } from 'react-router-dom';
import DoctorNavIcon from '../doctor-sidebar/DoctorNavIcon';
import '../doctor-dashboard/DoctorDashboard.css';

const DoctorDashboard=()=>{

    const navigate = useNavigate();

    const navigateToPatients = () => {
        navigate('/patientList')
    }

    const navigateToTimes = () => {
        navigate('/times')
    }


    return(
        <div>
            <DoctorNavIcon />
            <div className="container">
                <h1>Doctor Dashboard</h1>

               
                <div className='container1'>

                    <div className="card" onClick={navigateToPatients}>
                        <h2>Patients</h2>

                    </div>


                    <div className="card" onClick={navigateToTimes}>
                        <h2>Time Schedule</h2>


                    </div>

                    

                </div>


            </div>




        </div>
    )

}

export default DoctorDashboard;