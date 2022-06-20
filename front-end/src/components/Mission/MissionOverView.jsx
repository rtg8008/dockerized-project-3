import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Delete } from '../HomePage/StyledHomePage.js';
import { Details, AddEquipment } from './StyleMissionOverview.js'

function MissionOverView() {//app below
  const letParams = useParams();
  const nav = useNavigate();
  const [results, setResults] = useState({equipment: []})
  const missionURL = 'http://localhost:8080/mission/' + letParams.missionId
  const deleteSelf = () => {
    const init = {
      method: 'DELETE',
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
    <h2>Mission Details</h2>
    <p><strong>Location:</strong> {results.location_lat}, {results.location_long}</p>
    
    {results.equipment.map(element => (
      <div key={element.equipment_id} onClick={() => nav(`/equipment/${element.equipment_id}`)}>
        <Details>{element.equipment_name}</Details>
        {/* <Details>{element.category}</Details>
        <Details>{element.subcategory}</Details>
        <Details>{element.country}</Details>
        <Details>Armored: {element.armored}</Details>
        <Details>{element.lat}</Details>
        <Details>{element.lon}</Details>
        <Details>Quantity in Mission: {element.quantity}</Details>
        <Details>{element.caliber}</Details> */}
        <img style={{height: '100px'}} src = {element.image} alt = {element.name}></img>
      </div>
    ))}
    <div><Delete src='/logo512.png' alt='HomeLogo' data-testid='nav-to-home-page' onClick={() => deleteSelf()}/></div> 
    <div><AddEquipment src='/logo512.png' alt='AddEquipLogo' data-testid='nav-to-add-equipment-page' onClick={() => nav(`/add-weapons/${letParams.missionId}`)}></AddEquipment></div>
    </>
  )
}

export default MissionOverView;