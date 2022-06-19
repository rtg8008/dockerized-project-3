//imports begin
import  React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavHome from '../../ReusableComponents/NavHome.jsx';
import { Background, Details, Image } from './StyleAddMissionEquipment.js'
//imports end




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
      <NavHome/>
      <Background>
      <div>This is the add equipments page </div>
      <button onClick={()=>{nav(`/mission/${letParams.missionId}`)}}>Go back to mission</button>
      </Background>  

      <Background>
        {equipmentData.map((element, index)=>{
          return (
            <Details key={element.id}>
              <Image src = {element.image} alt = {element.name} height="100px"/>
              <div>{element.name}</div>
              <button onClick={() => {
                addToMission(element.id)
              }}>Add me to mission {letParams.missionId}</button>
            </Details>
          )
        })}
      </Background>
  
    </>

  );



}



export default AddMissionEquipmentPage;