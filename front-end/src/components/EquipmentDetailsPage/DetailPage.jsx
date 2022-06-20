import NavHome from "../ReusableComponents/NavHome";
import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

function DetailPage() {
  let { id } = useParams();
  const [equipment, setEquipment] = useState({})
  useEffect(() => {
    fetch(`http://localhost:8080/equipment/${id}`)
    .then(res => res.json())
    .then(data => setEquipment(data)) 
  },[])
    return (
      <>
        <NavHome/>

        <StyledBackground>
          <StyledHeader>{equipment.name}</StyledHeader>
          <StyledImage src={equipment.image} alt = 'equipment'/>
          <StyledSpecs>
            <ul>
              <li><strong>Category:</strong> {equipment.category ? `${equipment.category}` : 'N/A'}</li>
              <li><strong>Subcategory:</strong> {equipment.subcategory ? `${equipment.subcategory}` : 'N/A'}</li>
              <li><strong>Caliber:</strong> {equipment.caliber ? `${equipment.caliber}` : 'N/A'}</li>
              <li><strong>Max range meters:</strong> {equipment.maxrangemeters ? `${equipment.maxrangemeters}` : 'N/A'}</li>
              <li><strong>Armored:</strong> {equipment.armored ? 'True' : 'False'}</li>
              <li><strong>Country:</strong> {equipment.country ? `${equipment.country}` : 'N/A'}</li>
            </ul>
          </StyledSpecs>
        </StyledBackground>  
      </>

    );
}

export default DetailPage;

const StyledImage = styled.img`
  width: 480px;
  height: auto;
  margin: 20px;
  border: 1px;
  border-radius: 2rem;
  border-style: solid;
  border-width: 4px;
  justify-content: center;
  
`;

const StyledHeader = styled.h1`
  margin-top: 0;
  margin-left: 20px;
  padding-top: 16px;
`;

const StyledBackground = styled.div`
  background-color: lightgrey;
  height: 97.3vh;
  width: 100%;
`;

const StyledSpecs = styled.div`
  color: black;
  font-size: large;
`