import React, { useState, useEffect } from 'react';
import { NavbarBrand } from 'reactstrap';
import Navbar from './Navbar/Navbar';
import Auth from '../PieProject/Auth/Auth';
import Pies from '../PieProject/Pies/Pies';

const MainPie = () => {

    const [sessionToken, setSessionToken] = useState(undefined);
    console.log(sessionToken);

    //Will update when session token gets a new value
    useEffect(() => {
        console.log("Mainpie");
    }, [sessionToken])

    // //Wil Only run once when the page loads
    // useEffect(() => {
    //     console.log("Mainpie");
    // }, [])

    //   //Wil run when local state changes
    //   useEffect(() => {
    //     console.log("Mainpie");
    // })

    const viewConductor = () => {
        return sessionToken ? <Pies sessionToken={sessionToken}/> :  <Auth message="Hello from MainPie.js" setSessionToken = {setSessionToken}/>
    }

    //let sessionToken = value, let setSessionToken = function(newValue) {sessionToken = newValue }
    return (
        <div className="main">
            <div className="mainDiv">
                 <Navbar setSessionToken = {setSessionToken}/>
                {viewConductor()}
            </div>
           
        </div>
    )
}

export default MainPie;