// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
//   } from "react-router-dom";

function App() {

  const [mode, setMode]= useState('light')

  const [alert, setAlert]= useState(null)


  const showAlert = (message, type)=>{
   
    setAlert({
      msg :  message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }


  const onSwitchMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#243753'
      showAlert("Dark mode has been changed !","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been changed !","success");
      
    }

  }
  return (

   <>
   {/* <Router> */}
   <Navbar title = "Code Hub"  mode={mode} onSwitchMode={onSwitchMode} aboutPage="About us"/>
   <div className="container my-3" >
   <Alert alert = {alert} />
   <TextForm heading="Enter The Text to analyze below" mode={mode} />
   {/* <Switch>
    <Route path="/about">
      <About />
    </Route>    
    <Route path="/">
      <TextForm heading="Enter The Text to analyze below" mode={mode} />
    </Route>     
          
    </Switch> */}
    </div>
   {/* </Router> */}
   </>
  );
}

export default App;
