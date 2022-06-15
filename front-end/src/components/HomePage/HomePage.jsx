import inputSubmit from "./inputSubmit/inputSubmit.jsx"

import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function HomePage() {

    return (
        <>
      <inputSubmit name="search for mission" action="submit"/>
      <inputSubmit name="create new mission" action="create"/>
        </>
    );
  }
  
  export default HomePage;