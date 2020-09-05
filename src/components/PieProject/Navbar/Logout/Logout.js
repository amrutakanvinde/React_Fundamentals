import React from 'react';
import './Logout.css';
import logoutIcon from '../../assets/logoutIcon.png';

const Logout = (props) => {
    return (
        <div>
           <button onClick={() => props.setSessionToken(undefined)} > <img id='logout' className='logout' src={logoutIcon} alt='logout'  /></button>
        </div>
    )
}

export default Logout;
