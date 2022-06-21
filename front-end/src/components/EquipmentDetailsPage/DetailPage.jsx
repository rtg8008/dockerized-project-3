import NavHome from "../ReusableComponents/NavHome";
import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import { Background, Category, Details } from './StyledDetailsPage.js';
// import weg from '../../../public/weg.pdf';
import {Document, Page, pdfjs} from 'react-pdf';

function DetailPage() {
  let { id } = useParams();
  const [equipment, setEquipment] = useState({})
  const [finishedLoading, setFinishedLoading] = useState(false)
  useEffect(() => {
    fetch(`http://localhost:8080/equipment/${id}`)
    .then(res => res.json())
    .then(data => {
      setEquipment(data)
      setFinishedLoading(true);
    }) 
  },[])
    if(finishedLoading){
      return (
        <>
          <NavHome/>
  
          <Background>
            <StyledHeader>{equipment.name}</StyledHeader>
            <StyledImage src={equipment.image} alt = 'equipment'/>
            <StyledSpecs>
              <ul>
                <Category>Category:</Category><Details> {equipment.category ? `${equipment.category}` : 'N/A'}</Details>
                <Category>Subcategory:</Category><Details> {equipment.subcategory ? `${equipment.subcategory}` : 'N/A'}</Details>
                <Category>Caliber:</Category><Details> {equipment.caliber ? `${equipment.caliber}` : 'N/A'}</Details>
                <Category>Max range meters:</Category><Details> {equipment.maxrangemeters ? `${equipment.maxrangemeters}` : 'N/A'}</Details>
                <Category>Armored:</Category><Details> {equipment.armored ? 'True' : 'False'}</Details>
                <Category>Country:</Category><Details> {equipment.country ? `${equipment.country}` : 'N/A'}</Details>
              </ul>
            </StyledSpecs>
          </Background> 
          <Background> 
            <iframe title='WEG PDF' src={`https://upload.wikimedia.org/wikipedia/commons/1/1f/WorldwideEquipmentGuide_2015_Ground_Systems.pdf#page=${equipment.page_number}`}  width="90%" height="1000px" style={{marginRight: '5%', marginLeft: '5%'}}></iframe>
          </Background>
        </>
  
      );
    } else{
      return (
        <>
          <NavHome/>
          <Background>
            <StyledHeader>{equipment.name}</StyledHeader>
            <StyledImage src={equipment.image} alt = 'equipment'/>
            <StyledSpecs>
              <ul>
                <Category>Category:</Category><Details> {equipment.category ? `${equipment.category}` : 'N/A'}</Details>
                <Category>Subcategory:</Category><Details> {equipment.subcategory ? `${equipment.subcategory}` : 'N/A'}</Details>
                <Category>Caliber:</Category><Details> {equipment.caliber ? `${equipment.caliber}` : 'N/A'}</Details>
                <Category>Max range meters:</Category><Details> {equipment.maxrangemeters ? `${equipment.maxrangemeters}` : 'N/A'}</Details>
                <Category>Armored:</Category><Details> {equipment.armored ? 'True' : 'False'}</Details>
                <Category>Country:</Category><Details> {equipment.country ? `${equipment.country}` : 'N/A'}</Details>
              </ul>
            </StyledSpecs>
          </Background>  
        </>
      );
    }

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