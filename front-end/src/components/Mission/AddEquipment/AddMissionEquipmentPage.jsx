import  React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavHome from '../../ReusableComponents/NavHome.jsx';
import { AddMission, Background, BackMission, Category, Details, Image } from './StyleAddMissionEquipment.js'
// import { Details } from './StyleAddEquipment.js'
import {FormControl, MenuItem, InputLabel, Button} from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ReturnToMissionOverview, StyledButton } from './StyleAddEquipment.js';
import { Header } from '../StyleMissionOverview.js';
//imports end

function AddMissionEquipmentPage() {//app below
  const [category, setCategory] = useState(0);
  const [subcategory, setSubcategory] = useState(0);
  const letParams = useParams();
  const [equipmentData, setEquipmentData] = useState([])
  const [categories, setCategories] = useState([{name: ''}])
  const [subcategories, setSubcategories] = useState([{name: ''}])
  const [results, setResults] = useState({equipment: [], statement: ''})
  const missionURL = 'http://localhost:8080/mission/' + letParams.missionId


  const nav = useNavigate();
  // useEffect(() => {
  //   fetch('http://localhost:8080/equipment')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     setEquipmentData(data)}
  //   )
  //   fetch('http://localhost:8080/category')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     setCategories(data)}
  //   )
  //   fetch('http://localhost:8080/subcategory')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     setSubcategories(data)}
  //   )
  // },[])
  useEffect(() => {
    fetch('http://localhost:8080/equipment')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setEquipmentData(data)}
    )
    fetch('http://localhost:8080/category')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setCategories(data)}
    )
    fetch('http://localhost:8080/subcategory')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setSubcategories(data)}
    )
    fetch(missionURL)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setResults(data)})
  },[missionURL])
  
  const searchByCategory = (category) => {
    console.log(`searching by category: `, category);
    fetch(`http://localhost:8080/equipment/category/${category}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setEquipmentData(data)}
      )
      .catch(err => console.log(err))
  }
  const searchBySubcategory = (subcategory) => {
    console.log(`searching by subcat`, subcategory)
    fetch(`http://localhost:8080/equipment/subcategory/${subcategory}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setEquipmentData(data)}
      )
      .catch(err => console.log(err))

  }  
  const updateQuantityToMission = (equipmentID, quantity) => {
      const init = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(
        {
          "quantity": quantity
        } 
      )
    }
    fetch(`http://localhost:8080/mission/${letParams.missionId}?equipment_id=${equipmentID}&operation=update`, init)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      alert(`Equipment ID: ${equipmentID} added to Mission ID: ${letParams.missionId}`)
    })
  }

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
          "location_lat" : results.location_lat,
          "location_long": results.location_long
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
  const getCategoryID = (subcategoryID) => {
    return subcategories[subcategoryID-1].category_id;
  }
  // conditional returns depending if there is equipment to display
  if (equipmentData.length > 0){
    return (
    <>
      <NavHome/>
      <Header>
        <h1>ADD EQUIPMENT TO MISSION:</h1>
        <BackMission onClick={()=>{nav(`/mission/${letParams.missionId}`)}}>Go back to mission</BackMission>
      </Header>  

      {/* <Background>      */}
  
      <div>
      <Category>  
        <FormControl sx={{ m: 1, minWidth: 240 }} size="small">
          <InputLabel id="categorySelect-label">Category</InputLabel>
          <Select
            labelId="categorySelect-label"
            id="categorySelect"
            value={category}
            label="Category"
            onChange={(event)=>{
              event.preventDefault();
              setCategory(event.target.value)
              setSubcategory('');
              searchByCategory(event.target.value);
            }}
          >
            {categories.map((element, index) => {
              return (
                <MenuItem value={element.id}>{element.name}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 240 }} size="small">
          <InputLabel id="subcategorySelect-label">Subcategory</InputLabel>
          <Select
            labelId="subcategorySelect-label"
            id="subcategorySelect"
            value={subcategory}
            label="Category"
            onChange={(event)=>{
              event.preventDefault();
              setSubcategory(event.target.value)
              searchBySubcategory(event.target.value);
              setCategory(getCategoryID(event.target.value));

            }}
          >
            {subcategories.map((element, index) => {
              return (
                <MenuItem value={element.id}>{element.name}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
        </Category>  
        <Background>  
        {
        equipmentData.map((element, index)=>{
          return (
            <Details key={element.id}>
              <Image src = {element.image} alt = {element.name} height="100px" onClick={()=>{nav(`/equipment/${element.id}`)}}/>
              <div>{element.name}</div>
                <AddMission src='/images/addlogo.png' alt='AddEquipmentLogo' title='Add Equipment to Mission' onClick={() => {
                  addToMission(element.id)
                }}/>
            </Details>
          )
        })
        }
      </Background>
      </div>
    </>
    );
  } 
  else{
    return (
      <>
        <NavHome/>
        <Background>
          <h1>Add any equipment to the mission below:</h1>
          <BackMission onClick={()=>{nav(`/mission/${letParams.missionId}`)}}>Go back to mission</BackMission>
        </Background>  

        <Background>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="categorySelect-label">Category</InputLabel>
            <Select
              labelId="categorySelect-label"
              id="categorySelect"
              value={category}
              label="Category"
              onChange={(event)=>{
                event.preventDefault();
                setCategory(event.target.value)
                setSubcategory('');
                searchByCategory(event.target.value);
              }}
            >
              {categories.map((element, index) => {
                return (
                  <MenuItem value={element.id}>{element.name}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="subcategorySelect-label">Subcategory</InputLabel>
            <Select
              labelId="subcategorySelect-label"
              id="subcategorySelect"
              value={subcategory}
              label="Category"
              onChange={(event)=>{
                event.preventDefault();
                setSubcategory(event.target.value)
                searchBySubcategory(event.target.value);
                setCategory(getCategoryID(event.target.value));
  
              }}
            >
              {subcategories.map((element, index) => {
                return (
                  <MenuItem value={element.id}>{element.name}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
          <h2>{
            `No Equipment Information Found Here`
          }</h2>
        </Background>
      </>
    );
  }




}

export default AddMissionEquipmentPage;