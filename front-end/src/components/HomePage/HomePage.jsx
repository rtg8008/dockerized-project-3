import React, { useState, useEffect }from 'react';
import {useNavigate, Link} from 'react-router-dom';
import InputSubmit from "./inputSubmit/inputSubmit"
import { Mission, Background, Input, StyledBackground  } from './StyledHomePage';



const HomePage = () => {
  const nav = useNavigate();
  const [results, setResults] = useState([]);
  const [searchInput, setSearchInput] = useState('')

  // let func = props.func
  // let buttonName = props.buttonName
  // let placeHolderText = props.placeHolderText


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
    return mission.statement.includes(searchInput)
  })

 
  
      return (
      <StyledBackground>
      {/* <Background> */}
        {/* <InputSubmit func ={(inputValue)=>createMission(inputValue)} buttonName = "create" placeHolderText = "Create a New Mission"/> */}
        <input id="statement" placeholder="Insert Mission Statement"/> 
        <input type ="text" id="lat" placeholder="Insert Latitude of mission"/> 
        <input id="lon" placeholder="Insert Longitude of mission"/> 
        <button onClick={()=>{
          createMission(document.getElementById('statement').value,
          document.getElementById('lat').value,
          document.getElementById('lon').value)
        }}>Create new Mission</button>

        <Input type="text" placeholder="Search" onKeyUp={(e) => searchHandler(e)} />
        {filteredResults.map(element => (
          <Mission key={element.id} onClick={() => nav(`mission/${element.id}`)} >
          {element.statement}</Mission>
        ))
        }
      {/* </Background> */}
      </StyledBackground>
    );
}


export default HomePage;

// const SearchBar = () => {
//   const {selectedMovie} = useContext(MovieSelectContext);
//   const {searchInput, setSearchInput} = useContext(QueryContext)

