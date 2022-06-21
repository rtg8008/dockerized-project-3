import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavHome from "../ReusableComponents/NavHome.jsx";
import { Details, AddEquipment, Delete, Background, Category, Image, DeleteEquipmentFromMission, Header } from './StyleMissionOverview.js'
import FormDialog from './EditMetaForm'
import HawgExport from './HawgExport'
// 


function MissionOverView() {//app below
  const letParams = useParams();
  const nav = useNavigate();
  const [results, setResults] = useState({equipment: [], statement: ''})
  const missionURL = 'http://localhost:8080/mission/' + letParams.missionId
  const deleteSelf = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure you want to delete this mission? This action is irreversible')){
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
  }
  const deleteEquipmentFromMission = (mission_equipment_id, index) => {
    console.log(mission_equipment_id);
    const init = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
  
    }
    fetch(`http://localhost:8080/mission_equipment/${mission_equipment_id}`, init)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      console.log(results.equipment)
      let temp = {...results};
      console.log(temp.equipment.splice(index,1))
      console.log(temp.equipment)
      setResults(temp);
      alert(`Mission_Equipment ID: ${mission_equipment_id} removed from Mission ID: ${letParams.missionId}`)
    })
  }
  const updateMetaData = (id, quantity, phase, lat, lon, index) => {
    console.log(id, quantity, phase, lat, lon)
    let requestBody ={};
    
    if(id === undefined)
    {
      return;
    }
    if (quantity === '' && phase === '' && lat === '' && lon === '')
    {
      return;
    }
    if(quantity !== '')
    {
      requestBody.quantity = parseInt(quantity);
    }
    if(phase !== '')
    {
      requestBody.phase = parseInt(phase);
    }
    if(lat !== '')
    {
      requestBody.location_lat = parseFloat(lat);
    }
    if(lon !== '')
    {
      requestBody.location_long = parseFloat(lon);
    }
    
    const init = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(requestBody),
  
    }
    console.log(init);
    console.log(results.equipment);

    fetch(`http://localhost:8080/mission_equipment/${id}`, init)
    .then(res => res.json())
    .then(data => {
      console.log('http response', data);
      console.log('results.equipment: ',results.equipment)
      let temp = {...results};
      console.log('temp object', temp.equipment[index]);
      console.log('index', index)
      temp.equipment[index].quantity = parseInt(quantity);
      temp.equipment[index].phase =  parseInt(phase);
      temp.equipment[index].lat = parseFloat(lat);
      temp.equipment[index].lon = parseFloat(lon);
      setResults(temp);
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

    <Header><h1>{results.statement.toUpperCase()}</h1>
      <HawgExport missionId={results.id} results={results.equipment}/>
      <Category>Longitude: {results.location_long}</Category>
      <Category>Latitude: {results.location_lat}</Category>
    </Header>

    
    {results.equipment.map((element, index) => (
    <Background>
      <div key={element.equipment_id}>
        <div><Image src = {element.image} alt = {element.name} onClick={() => nav(`/equipment/${element.equipment_id}`)}/></div>
        <Category>Equipment:</Category><Details>{element.equipment_name}</Details>
        {/* <Category>Category:</Category><Details>{element.category}</Details>
        <Category>Subcategory:</Category><Details>{element.subcategory}</Details> */}
        <Category>Latitude:</Category><Details>{element.lat}</Details>
        <Category>Longitude:</Category><Details>{element.lon}</Details>
        <Category>Phase in Mission:</Category><Details>{element.phase}</Details>
        <Category>Quantity in Mission:</Category><Details>{element.quantity}</Details>
        <div><FormDialog id={element.mission_equipment_id} lat={element.lat} lon={element.lon} quantity={element.quantity} phase={element.phase} callback={updateMetaData} index={index}/></div>
        <div><DeleteEquipmentFromMission src='/images/deletelogo.png' alt='DeleteEquipmentFromMission' title="Delete Equipment" data-testid={`delete-equipment-from-mission${element.mission_equipment_id}`} onClick={()=>{deleteEquipmentFromMission(element.mission_equipment_id, index)}} /></div>
      </div>
    </Background>
    ))}
    <div><Delete src='/images/deletelogo.png' alt='DeleteMissionLogo' title='Delete Mission' data-testid='nav-to-home-page' onClick={() => deleteSelf()}/></div> 
    <div><AddEquipment src='/images/addlogo.png' alt='AddEquipLogo' title='Add Equipment' data-testid='nav-to-add-equipment-page' onClick={() => nav(`/add-weapons/${letParams.missionId}`)}></AddEquipment></div>
    </>
  )
}

export default MissionOverView;