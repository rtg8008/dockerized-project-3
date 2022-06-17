import React, { useState, useEffect }from 'react';
import {useNavigate, Link} from 'react-router-dom';
import InputSubmit from "./inputSubmit/inputSubmit"
// import { Mission } from './StyledHomePage';



const HomePage = () => {
  const nav = useNavigate();
  const [results, setResults] = useState([]);
  const [filteredMission, setFilteredMission] = useState('');
  const [searchInput, setSearchInput] = useState('')
  const [missionId, setMissionId] = useState(1);

  // let func = props.func
  // let buttonName = props.buttonName
  // let placeHolderText = props.placeHolderText


  useEffect(() => {
    fetch('http://localhost:8080/mission/')
    .then(res => res.json())
    .then(data => setResults(data))
  },[])

  function navToMission(input) {
    nav('/mission/'+input)
    // <MissionOverView />
    console.log('this is the results', results)
  }
  
  function createMission(input){
    nav('/mission'+input)
    //we will need to send a post request to create a new empty mission
  }

  const searchHandler = (e) => {
    setSearchInput(e.target.value)
  };

  const clickHandler = (e) => {
    console.log(e.target)
  }
  
  let filteredResults = results.filter(mission => {
    return mission.statement.includes(searchInput)
  })

 
  
      return (
      <>
        <InputSubmit func ={(inputValue)=>createMission(inputValue)} buttonName = "create" placeHolderText = "Create a New Mission"/>
        {/* <InputSubmit func ={(inputValue)=>navToMission(inputValue)} buttonName = "submit" placeHolderText = "Search for a Mission"/> */}
        <input type="text" placeholder="Search" onKeyUp={(e) => searchHandler(e)} />
        {filteredResults.map(element => (
          <div key={element.id} onClick={() => nav(`mission/${element.id}`)} >
          {element.statement}</div>
        ))
        }
      </>
    );
}


export default HomePage;

// const SearchBar = () => {
//   const {selectedMovie} = useContext(MovieSelectContext);
//   const {searchInput, setSearchInput} = useContext(QueryContext)