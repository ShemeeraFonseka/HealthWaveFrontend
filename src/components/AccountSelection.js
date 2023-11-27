import { useNavigate } from 'react-router-dom';

const AccountSelection=()=>{

    const navigate = useNavigate();

    const navigateToPatientLogin = () => {
        navigate('/login')
    }

    const navigateToDoctorLogin = () => {
        navigate('/doctor-login')
    }

    const navigateToAdminLogin = () => {
        navigate('/admin-login')
    }

    return(
        <div className='container1'>

                    <div className="card" onClick={navigateToPatientLogin}>
                        <h2>Patients</h2>

                    </div>


                    <div className="card" onClick={navigateToDoctorLogin}>
                        <h2>Doctors</h2>


                    </div>

                    <div className="card" onClick={navigateToAdminLogin}>
                        <h2>Admin</h2>

                    </div>

                </div>
    )

}

export default AccountSelection;