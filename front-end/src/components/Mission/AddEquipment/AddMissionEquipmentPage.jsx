import  React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Details } from './StyleAddEquipment.js'

function AddMissionEquipmentPage() {//app below
  const letParams = useParams();
  const [equipmentData, setEquipmentData] = useState([])
  const nav = useNavigate();
  useEffect(() => {
    fetch('http://localhost:8080/equipment')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setEquipmentData(data)}
      )
  },[])

  const addToMission = (equipmentID) => {
    
    const init = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(
        {
          "phase": 1,
          "quantity": 1,
          "location_lat" : 123,
          "location_long": 123
        } 
      )
    }
    fetch(`http://localhost:8080/mission/${letParams.missionId}?equipment_id=${equipmentID}&operation=add`, init)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      alert(`Equipment ID: ${equipmentID} added to Mission ID: ${letParams.missionId}`)
    })
  }

  return (
    <>
      <div>This is the add equipments page </div>
      <div>
        <button onClick={()=>{
          nav(`/mission/${letParams.missionId}`);
        }}>Go back to mission</button>
        {equipmentData.map((element, index)=>{
          return (
            <Details key={element.id}>
              <img src = {element.image} alt = {element.name} height="100px"></img>
              <div>{element.name}</div>
              <button onClick={() => {
                addToMission(element.id)
              }}>Add me to mission {letParams.missionId}</button>
            </Details>
          )
        })}
      </div>
    </>
  );
}

export default AddMissionEquipmentPage;