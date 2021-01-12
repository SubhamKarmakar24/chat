import React, { Component } from 'react';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import logo from './logo.svg';
import './App.css';

firebase.initializeApp(firebaseConfig);

function App()
{
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                
            </header>
        </div>
    );
}

export default App;
