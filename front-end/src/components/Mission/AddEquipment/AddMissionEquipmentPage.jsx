import  React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Details } from './StyleAddEquipment.js'
import {FormControl, MenuItem, InputLabel} from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ReturnToMissionOverview } from './StyleAddEquipment.js';
//imports end

function AddMissionEquipmentPage() {//app below
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const letParams = useParams();
  const [equipmentData, setEquipmentData] = useState([])
  const [categories, setCategories] = useState([])
  const [subcategories, setSubcategories] = useState([])

  const nav = useNavigate();
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
  },[])
  
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
  const getCategoryID = (subcategoryID) => {
    return subcategories[subcategoryID-1].category_id;
  }

  return (
    <>
      <div>
        <ReturnToMissionOverview src='/tradoc-logo.png' alt='AddEquipLogo' data-testid='nav-back-to-mission-overview' onClick={()=>{
          nav(`/mission/${letParams.missionId}`);
        }} />
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
            {/* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>             */}
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
            {/* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>             */}
            {subcategories.map((element, index) => {
              return (
                <MenuItem value={element.id}>{element.name}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
        {/* <button onClick={searchBySubcategory(`document.getElementById('subcategorySelect').value`)}>Search by Subcategory</button> */}
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