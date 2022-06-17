import React,{useNavigate, useState} from 'react';

const InputSubmit = (props) => {
  let func = props.func
  let buttonName = props.buttonName
  let placeHolderText = props.placeHolderText
  //this component will take in two displayable props a function and a place holder text for the input
  // the function will take what ever is inputed inside of the input and will send it to the function
  // there should be at least two know functions. the first will navigate to a mission page the next
  // will navigate to a add equipment to mission page and also will need to add the equipment
  // the third will be a search bar on the add equipment page that will use a get request to find
  // the equipment
  const nav = useNavigate;
  //add an onChange handler to allow the input field to work
  return(
    <div>
       <input id={buttonName}/> 
       {/* The button needs to now pass in the value of the inputs */}
      <button onClick={()=>func(document.getElementById(buttonName).value)}>{buttonName}</button>
        {/* to test this buttons functionality pass in console.log() as the function */}
    </div>
  )
}
//here is the error i am trying to solve.
// You provided a `value` prop to a
//form field without an `onChange` handler. This will render a read-only field.
export default InputSubmit;