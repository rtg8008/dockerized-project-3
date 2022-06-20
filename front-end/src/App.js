import React from 'react';
import { AppProvider } from './AppContext';
import { Routes, Route } from "react-router-dom";
import DetailPage from './components/EquipmentDetailsPage/DetailPage';
import HomePage from './components/HomePage/HomePage'
import MissionOverView from './components/Mission/MissionOverView';
import AddMissionEquipmentPage from './components/Mission/AddEquipment/AddMissionEquipmentPage';
import LightDarkMode from './components/Theme/LightDarkMode';
import AddEquipmentPage from './components/addEquipment/addEquipmentPage';


function App() {

  return (
    <>
      <AppProvider>
        <LightDarkMode/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/mission/:missionId" element={<MissionOverView/>}/>
            <Route path="/add-weapons/:missionId" element={<AddMissionEquipmentPage/>}/>
            <Route path="/equipment/:id" element={<DetailPage/>}/>
            <Route path="/add-weapons" element = {<AddEquipmentPage/>} />
        </Routes> 
      </AppProvider>
    </>
    );
  }

export default App;