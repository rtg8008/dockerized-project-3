import {useNavigate} from 'react-router-dom';
import InputSubmit from "./inputSubmit/inputSubmit"
//imports end

const HomePage = () => {
  const nav = useNavigate();
  // let func = props.func
  // let buttonName = props.buttonName
  // let placeHolderText = props.placeHolderText

  function navToMission(input) {
    nav('/mission/'+input)
    console.log(input)
  }
  
  function createMission(input){
    //we will need to send a post request to create a new empty mission
    nav('/mission'+input)
    console.log(input)
  }
  
      return (
      <>
        <InputSubmit func ={(inputValue)=>navToMission(inputValue)} buttonName = "submit" placeHolderText = "Enter to Navigate to"/>
        <InputSubmit func ={(inputValue)=>createMission(inputValue)} buttonName = "create" placeHolderText = "Enter to Create"/>
      </>
    );
}

export default HomePage;