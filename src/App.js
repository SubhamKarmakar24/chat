import React, { useContext, useState, useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import logo from './logo.svg';
import './App.css';

firebase.initializeApp(firebaseConfig);


function LoginState()
{
    const [user, setUser] = useState();

    firebase.auth().onAuthStateChanged((user) =>
    {
        if(user)
        {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            var uid = user.uid;
            // ...
            console.log("Logged in");
            setUser(user);
        }
        else
        {
            // User is signed out
            // ...
            console.log("Logged out");
        }
    });
    
    if(user)
    {
        return <div>HI</div>;
    }
    else
    {
        return <div>BYE</div>;
    }

}



function App()
{
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <LoginState />
            </header>
        </div>
    );
}

export default App;
