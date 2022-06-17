import './App.css';
import { Routes, Route } from "react-router-dom";
// import Picture from "./components/ReusableComponents/Picture.jsx";
import React,{ useEffect, useState } from 'react';
import NavHome from './components/ReusableComponents/NavHome';
import HomePage from './components/HomePage/HomePage'

function App() {
  // let practiceURL =('http://localhost:3000/')
  // const [results, setResults] = useState('');
  
  // useEffect(()=> {
  //   fetch(practiceURL)
  //   .then(res => {
  //     // console.log("Here was the response", JSON.stringify(res))
  //     return JSON.stringify(res) })//the data being recieved is not JSON and their for can
  //     //not be parsed as JSON Ryan will need to fix his server
  //     //routes have been made
  //   .then(data => {
  //     // console.log("Here is the data,",data)
  //     setResults(data)  
  //   })
  //   .catch(err => console.log("We are sorry but something has failed\n",err)
  //   ,[])})


  return (
    <>
      <NavHome/>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          {/* allows you to navigate to or create missions */}
          <Route path="/mission/:mission" element={<div>mission</div>}/>
          {/*  */}
          <Route path="/add-weapons/" element={<div>add-equipment</div>}/>
          {/*  */}
          <Route path="/weapon/:weaponID" element={<div>weaponID</div>}/>
          {/*  */}
      </Routes> 
    </>
    );
  }

export default App;