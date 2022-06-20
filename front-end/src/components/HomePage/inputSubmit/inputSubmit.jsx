import React,{useNavigate, useState} from 'react';

const InputSubmit = (props) => {
  let func = props.func
  let buttonName = props.buttonName
  let placeHolderText = props.placeHolderText

  return(
    <div>
      <input id={buttonName} placeholder={placeHolderText}/> 
      <button onClick={()=>func(document.getElementById(buttonName).value)}>{buttonName}</button>
    </div>
  )
}

export default InputSubmit;