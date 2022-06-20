import './App.css';
import { AppProvider, AppContext } from './AppContext';
import { Routes, Route } from "react-router-dom";
import DetailPage from './components/EquipmentDetailsPage/DetailPage';
import React,{ useEffect, useState } from 'react';
import NavHome from './components/ReusableComponents/NavHome';
import HomePage from './components/HomePage/HomePage'
import MissionOverView from './components/Mission/MissionOverView';
import AddMissionEquipmentPage from './components/Mission/AddEquipment/AddMissionEquipmentPage';
import AddEquipmentPage from './components/addEquipment/addEquipmentPage';
function App() {

  return (
    <>
      <AppProvider>
        <NavHome/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            {/* allows you to navigate to or create missions */}
            <Route path="/mission/:missionId" element={<MissionOverView/>}/>
            {/*  */}
            <Route path="/add-weapons/:missionId" element={<AddMissionEquipmentPage/>}/>
            {/*  */}
            <Route path="/equipment/:id" element={<DetailPage/>}/>
            {/*  */}
            <Route path="/add-weapons" element = {<AddEquipmentPage/>} />
            {/*  */}
        </Routes> 
      </AppProvider>
    </>
    );
  }

export default App;