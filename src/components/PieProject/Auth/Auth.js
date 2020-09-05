import React, { useState } from 'react';
import './Auth.css';

const Auth = (props) => {
    const [login, setLogin] = useState(true);// let login=false; let setLogin = (newValue)=> {login=newValue;}
    const [firstName, setFirstName] = useState('First Name');
    const [lastName, setLastName] = useState('Last Name');
    const [email, setEmail] = useState('Enter your email here');
    const [password, setPassword] = useState('Enter password here');
    // props.setSessionToken('value');

    const title = () => {
        return login ? 'Login' : 'Sign Up';
    }

    const loginToggle = (event) => {
        event.preventDefault();

        setLogin(!login);

        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }

    const signupFields = () => !login ? (
            <div className="main">
                <div className="mainDiv">
                    <label htmlFor="firstName"> First Name:</label>
                   
                    <input type="text" id="firstName" placeholder="First Name" value={firstName}
                    onChange={ (e) => { setFirstName(e.target.value)}} />
                    
                    <label htmlFor="lastName"> Last Name:</label>
           
                    <input type="text" id="lastName" placeholder="Last Name" value={lastName}
                    onChange={ (e) => { setLastName(e.target.value)}} />
                    <br/> <br/>
                </div>
            </div>
        ): null;

    const authFunction = (event) => {
        event.preventDefault();

        //set up information in an object
        let userObject = {
            fName: firstName,
            lName: lastName,
            email,
            password
        };

        //find out if its a login or a signup
       let url = login ? 'http://localhost:4000/auth/signin' : 'http://localhost:4000/auth/signup';

       //fetch it
       fetch(url, {
         method: 'POST',
         headers: new Headers({
             'Content-Type': 'application/json'
         }),
         //jsonify it
         body: JSON.stringify(userObject)
       })
       //send it there
        .then(res => res.json())
        .then(json => {
            props.setSessionToken(json.sessionToken);
            console.log(json)
        })
        .catch(err => console.log(err)) 
    }


    return (
        <div>
            {/* {props.message}
            {props.setSessionToken} */}
            <form onSubmit={authFunction}>
                <h1>{title()}</h1>
                {signupFields()}
                <div className="mainDiv">
                    <label htmlFor="email"> Email:</label>
                    <input type="text" id="email" placeholder="Email" value={email}
                    onChange={ (e) => { setEmail(e.target.value)}} />
    
                    <label htmlFor="password"> Password:</label>
                    <input type="password" id="password" placeholder={password}
                    onChange={ (e) => { setPassword(e.target.value)}} />
                </div>
                <br/>
                <br/>

                <div className="mainDiv">
                <button onClick={loginToggle} >Login/Signup Toggle</button>
                <button type="submit"> Submit User Data</button>
                </div>
            </form>
        </div>
    )
}

export default Auth;