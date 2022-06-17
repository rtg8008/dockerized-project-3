//imports begin
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Delete } from '../HomePage/StyledHomePage.js';
// import thing from ""
//imports end




function MissionOverView() {//app below
  const letParams = useParams();
  const nav = useNavigate();
  const [results, setResults] = useState({equipment: []})
  const missionURL = 'http://localhost:8080/mission/' + letParams.missionId
  const deleteSelf = () => {
    const init = {
      method: 'DELETE',
      // headers: {
      //   'Content-Type': 'application/json;charset=utf-8'
      // },
    }
    fetch(missionURL, init)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      nav('/');
    })

  }
  useEffect(() => {
    fetch(missionURL)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setResults(data)})
  },[missionURL])

  return (
    <>
    <h1>{results.statement}</h1>
    <div>{results.location_long}</div>
    <div>{results.location_lat}</div>
    {results.equipment.map(element => (
      <div key={element.equipment_id}>
        <div>{element.equipment_name}</div>
        <div>{element.category}</div>
        <div>{element.subcategory}</div>
        <div>{element.country}</div>
        <div>Armored: {element.armored}</div>
        <div>{element.lat}</div>
        <div>{element.lon}</div>
        <div>Quantity in Mission: {element.quantity}</div>
        <div>{element.caliber}</div>
        <img style={{height: '100px'}} src = {element.image} alt = {element.name}></img>
      </div>
    ))}
    <div><Delete src='/logo512.png' alt='PintokartLogo' data-testid='nav-to-home-page' onClick={() => deleteSelf()}/></div> 
    </>
  )


  // {//return below
  //   return (
  //     <>

  //     </>
  //   );
  //   //return above}
  //   {//Hoisted helper functions below
    
  //   //HelperFunctions Hoisted end
  //   }
  // }
}



export default MissionOverView;