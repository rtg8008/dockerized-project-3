import React, { useState, useEffect }from 'react';
import { useNavigate } from 'react-router-dom';
import { Background, Insert, Create, Search, Mission } from './StyledHomePage';



const HomePage = () => {
  const nav = useNavigate();
  const [results, setResults] = useState([]);
  const [searchInput, setSearchInput] = useState('')

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
      <>
        <Background>
          <Insert id="statement" placeholder="Insert Mission Statement"/>  
          <Insert type ="text" id="lat" placeholder="Insert Latitude of mission"/> 
          <Insert id="lon" placeholder="Insert Longitude of mission"/>
          <div> 
            <Create onClick={()=>{
              createMission(document.getElementById('statement').value,
              document.getElementById('lat').value,
              document.getElementById('lon').value)
            }}>Create New Mission</Create>
          </div>
        </Background>

        <Background>
            <Search type="text" placeholder="Search" onKeyUp={(e) => searchHandler(e)} />
            {filteredResults.map(element => (
              <Mission key={element.id} onClick={() => nav(`mission/${element.id}`)} >
                {element.statement}
              </Mission>
            ))}
        </Background>
      </>
    );
}


export default HomePage;