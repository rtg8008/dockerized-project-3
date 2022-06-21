import React, { useState, useEffect }from 'react';
import { useNavigate } from 'react-router-dom';
import AddEquipmentPage from '../addEquipment/addEquipmentPage';
import { Background, Insert, Create, Search, Mission, Header } from './StyledHomePage';
import {Button, FormControl, MenuItem, InputLabel, TextField} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Box from '@mui/system/Box';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import ArrowDropUp from '@mui/icons-material/ArrowDropUp'; 
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
  'margin': '10px',
  color: `#FFF8DC`,
  backgroundColor: '#2F4F4F',
  transition: `all 0.4s`,
  '&:hover': {
    backgroundColor: `#FFF8DC`,
    color: '#2F4F4F'
  }
}));


const HomePage = () => {
  const nav = useNavigate();
  const [results, setResults] = useState([]);
  const [searchInput, setSearchInput] = useState('')
  const [showCreateEquipment, setShowCreateEquipment] = useState(false)
  const [showCreateMission, setShowCreateMission] = useState(false)
  const [showSearchMission, setShowSearchMission] = useState(false)


  useEffect(() => {
    fetch('http://localhost:8080/mission/')
    .then(res => res.json())
    .then(data => setResults(data))
  },[])
  
  function createMission(statement, lat, lon){
    
    // if (typeof statement !== 'string' || parseFloat(lat) === NaN || parseFloat(lon) === NaN)
    // {
    //   alert('Please enter the correct parameters');
    //   return;
    // }
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({statement: statement,
                            location_lat: parseFloat(lat),
                            location_long: parseFloat(lon)})
    }
    fetch('http://localhost:8080/mission', init)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      nav(`/add-weapons/${data[data.length-1].id}`)
    })
  }

  const searchHandler = (e) => {
    setSearchInput(e.target.value)
  };
  
  let filteredResults = results.filter(mission => {
    return mission.statement.toUpperCase().includes(searchInput.toUpperCase())
  })

 
  
      return (
      <>
        <Header><h1>WORLDWIDE EQUIPMENT GUIDE</h1></Header>
        <Background>
          {showCreateEquipment?
          <>
            <ColorButton sx={{bgcolor: '#2F4F4F', color: '#FFF8DC', boxShadow: 5}} variant="contained" endIcon={<ArrowDropUp/>}
              onClick={()=>setShowCreateEquipment(!showCreateEquipment)}>CREATE NEW EQUIPMENT</ColorButton>
            <AddEquipmentPage/>
          </>
          : 
            <ColorButton sx={{bgcolor: '#2F4F4F', color: '#FFF8DC', boxShadow: 5}} variant="contained" endIcon={<ArrowDropDown/>}
                onClick={()=>setShowCreateEquipment(!showCreateEquipment)}>CREATE NEW EQUIPMENT</ColorButton>
          }
        </Background>

        <Background>
          {showCreateMission?
            <>
              <ColorButton sx={{bgcolor: '#2F4F4F', color: '#FFF8DC', boxShadow: 5}} variant="contained" endIcon={<ArrowDropUp/>}
                onClick={()=>setShowCreateMission(!showCreateMission)}>CREATE NEW MISSION</ColorButton>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch',
                  'margin-top': '2vh',
                  bgcolor: '#FFF8DC',
                  boxShadow: 5,
                },
                }}
                noValidate
                autoComplete="off"          
              >
                <TextField sx={{input: {color: 'DarkSlateGray', borderColor: 'White'}}} variant='outlined' label='Mission' id="statement" placeholder="Mission"/>  
                <TextField variant='outlined' label='Latitude' id="lat" placeholder="Latitude"/> 
                <TextField variant='outlined' label='Longitude' id="lon" placeholder="Longitude"/>
              </Box>
              <div> 
                <ColorButton sx={{'margin-top': '2vh', bgcolor: '#2F4F4F', color: '#FFF8DC', boxShadow: 5}} variant="contained" endIcon={<SendIcon />}
                onClick={()=>{
                  createMission(document.getElementById('statement').value,
                  document.getElementById('lat').value,
                  document.getElementById('lon').value)
                }}>Submit</ColorButton>
              </div>
            </>
            : 
            <ColorButton sx={{bgcolor: '#2F4F4F', color: '#FFF8DC', boxShadow: 5}} variant="contained" endIcon={<ArrowDropDown/>}
            onClick={()=>setShowCreateMission(!showCreateMission)}>CREATE NEW MISSION</ColorButton>
          }
         
        </Background>

        <Background>
          {showSearchMission?
            <>
              <ColorButton sx={{bgcolor: '#2F4F4F', color: '#FFF8DC', boxShadow: 5}} variant="contained" endIcon={<ArrowDropUp/>}
                onClick={()=>setShowSearchMission(!showSearchMission)}>SEARCH MISSIONS</ColorButton>
              <div>
                <Search type="text" placeholder="Search" onKeyUp={(e) => searchHandler(e)} />
                {filteredResults.map(element => (
                  <Mission key={element.id} onClick={() => nav(`mission/${element.id}`)} >
                    {element.statement}
                  </Mission>
                ))}
              </div>
            </>
          : 
          <ColorButton sx={{bgcolor: '#2F4F4F', color: '#FFF8DC', boxShadow: 5}} variant="contained" endIcon={<ArrowDropDown/>}
          onClick={()=>setShowSearchMission(!showSearchMission)}>SEARCH MISSIONS</ColorButton>
          }
        </Background>

      </>
    );
}


export default HomePage;
