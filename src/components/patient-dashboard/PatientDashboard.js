
import NormalNavBar from "../normal-nav/NormalNavBar";
import PatientNavIcon from "../patient-sidebar/PatientNavIcon";
import { useNavigate } from 'react-router-dom';
import '../patient-dashboard/PatientDashboard.css';
import Footer from "../../comp/common/footer/Footer";

const PatientDashboard = () => {

    const navigate = useNavigate();

    const navigateChannelledDoctors = () => {
        navigate('/channelledDoctor')
    }

    const navigateChannellingDetails = () => {
        navigate('/channelingDeails')
    }

    const navigateMedicalHistory = () => {
        navigate('/view-all-medical-hisory')
    }


    return (
        <div>
            <NormalNavBar />
            <PatientNavIcon />
<div className="container">
    <h1>Patient Dashboard</h1>
</div>
            
            <div className="divide">
                <div className="image">
                    
                </div>

                <div className="rightcontainer">
                    <div className="container">


                        <div className="pcard" onClick={navigateMedicalHistory} >
                            <h2>Medications</h2>

                        </div>


                        <div className="pcard" onClick={navigateChannelledDoctors}>
                            <h2>Chat With Doctor</h2>


                        </div>

                        <div className="pcard" onClick={navigateChannellingDetails} >
                            <h2>Channelling Details</h2>

                        </div>

                    </div>


                </div>

            </div>
            <Footer/>
        </div>





    )

}

export default PatientDashboard;