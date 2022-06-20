import React, { useState, useEffect }from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {Button, FormControl, MenuItem, InputLabel, TextField} from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import { StyledBackground } from '../HomePage/StyledHomePage';
import { GridContainerDiv, StyledFormDiv, StyledFormDivLeft, StyledFormDivRight } from './StyledAddEquipmentPage';
import SendIcon from '@mui/icons-material/Send';
import NavHome from '../ReusableComponents/NavHome';
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

const AddEquipmentPage = () => {
  const nav = useNavigate();
  const [subcategory, setSubcategory] = useState('');
  const [subcategories, setSubcategories] = useState([])
  const [isArmored, setIsArmored] = useState(true);
  const [missionInventory, setMissionInventory] = useState([]);

  // let func = props.func
  // let buttonName = props.buttonName
  // let placeHolderText = props.placeHolderText


  useEffect(() => {
    fetch('http://localhost:8080/subcategory')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setSubcategories(data)}
      )
  },[])
      const SubmitButtonHandler = (e) =>{

        const data = {
          name: document.getElementById('name-textfield').value,
          subcategory_id: subcategory,
          caliber: document.getElementById('caliber-textfield').value,
          max_range_meters: parseInt(document.getElementById('max-effective-range-textfield').value),
          armored: isArmored,
          country: document.getElementById('country-textfield').value,
          image: document.getElementById('image-url-textfield').value,
          page_number: document.getElementById('page-number-textfield').value
        }
        console.log('Data Being Submitted: ', data)
        const init = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(data)
        }
        fetch('http://localhost:8080/equipment', init)
        .then(res => res.json())
        .then(data => {
          console.log('Equipment now in Database: ', data);
          alert('New equipment added to the database!')
        })

      }

      return (
        <>
      {/* <StyledBackground> */}
        {/* <GridContainerDiv> */}
        {/* <NavHome/> */}
          {/* <StyledFormDiv> */}
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch',
                'margin-top': '2vh',
                bgcolor: '#FFF8DC',
                boxShadow: 5,
                inputProps: 'blue',
              },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="page-number-textfield" label="WEG-Page-Number" variant="outlined" />
              <TextField id="name-textfield" label="Name" variant="outlined" />
              <TextField id="caliber-textfield" label="Caliber" variant="outlined" />
              <TextField id="max-effective-range-textfield" label="Max Effective Range" variant="outlined" />
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="is-armored-label">Armored</InputLabel>
                <Select
                  labelId="is-armored-label"
                  id="is-armored"
                  value={isArmored}
                  label="Armored"
                  onChange={(event)=>{
                    event.preventDefault();
                    setIsArmored(event.target.value)
                  }}
                >
                  <MenuItem value={true}>True</MenuItem>
                  <MenuItem value={false}>False</MenuItem>
                </Select>
              </FormControl>
              
              <TextField id="country-textfield" label="Country" variant="outlined" />
              <TextField id="image-url-textfield" label="Image-URL" variant="outlined" />
              <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="subcategorySelect-label">Subcategory</InputLabel>
              <Select
                labelId="subcategorySelect-label"
                id="subcategorySelect"
                value={subcategory}
                label="Category"
                onChange={(event)=>{
                  event.preventDefault();
                  setSubcategory(event.target.value)
                }}
              >
                {/* <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>             */}
                {subcategories.map((element, index) => {
                  return (
                    <MenuItem value={element.id}>{element.name}</MenuItem>
                  )
                })}
              </Select>
              </FormControl>
            </Box>
                <ColorButton onClick={SubmitButtonHandler} sx={{'margin-top': '2vh', bgcolor: '#2F4F4F', color: '#FFF8DC', boxShadow: 5}} variant="contained" endIcon={<SendIcon />}>
                  Submit
                </ColorButton>
          {/* </StyledFormDiv> */}
        {/* </GridContainerDiv> */}
      {/* </StyledBackground> */}
    </>
    );
}


export default AddEquipmentPage;

// const SearchBar = () => {
//   const {selectedMovie} = useContext(MovieSelectContext);
//   const {searchInput, setSearchInput} = useContext(QueryContext)

