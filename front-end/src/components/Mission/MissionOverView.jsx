import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Delete } from '../HomePage/StyledHomePage.js';
import { Details } from './StyleMissionOverview.js'

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
    <Details>{results.location_long}</Details>
    <Details>{results.location_lat}</Details>
    {results.equipment.map(element => (
      <div key={element.equipment_id}>
        <Details>{element.equipment_name}</Details>
        <Details>{element.category}</Details>
        <Details>{element.subcategory}</Details>
        <Details>{element.country}</Details>
        <Details>Armored: {element.armored}</Details>
        <Details>{element.lat}</Details>
        <Details>{element.lon}</Details>
        <Details>Quantity in Mission: {element.quantity}</Details>
        <Details>{element.caliber}</Details>
        <img style={{height: '100px'}} src = {element.image} alt = {element.name} onClick={() => nav(`/equipment/${element.equipment_id}`)}
        ></img>
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