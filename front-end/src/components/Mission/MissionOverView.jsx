import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavHome from "../ReusableComponents/NavHome.jsx";
import { Details, AddEquipment, Delete, Background, Category, Image } from './StyleMissionOverview.js'

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
    <NavHome/>
    <Background>
      <h1>{results.statement}</h1>
      <Details>Longitude: {results.location_long}</Details>
      <Details>Latitude: {results.location_lat}</Details>
    </Background>
    {results.equipment.map(element => (
    <Background>
      <div key={element.equipment_id}>
        <Category>Equipment:</Category><Details>{element.equipment_name}</Details>
        <div><Image style={{height: '100px'}} src = {element.image} alt = {element.name} onClick={() => nav(`/equipment/${element.equipment_id}`)}/></div>
        <Category>Category:</Category><Details>{element.category}</Details>
        <Category>Subcategory:</Category><Details>{element.subcategory}</Details>
        <Category>Country:</Category><Details>{element.country}</Details>
        <Category>Armored:</Category><Details>{element.armored.toString()}</Details>
        <Category>Latitude:</Category><Details>{element.lat}</Details>
        <Category>Longitude:</Category><Details>{element.lon}</Details>
        <Category>Quantity in Mission:</Category><Details>{element.quantity}</Details>
        <Category>Caliber:</Category><Details>{element.caliber}</Details>
      </div>
    </Background>
    ))}
    <div><Delete src='/images/deletelogo.png' alt='DeleteMissionLogo' data-testid='nav-to-home-page' onClick={() => deleteSelf()}/></div> 
    <div><AddEquipment src='/images/addlogo.png' alt='AddEquipLogo' data-testid='nav-to-add-equipment-page' onClick={() => nav(`/add-weapons/${letParams.missionId}`)}></AddEquipment></div>
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