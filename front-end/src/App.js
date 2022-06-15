import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";



function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/:mission" element={<MissionPage/>}/>
      <Route path="/:mission/add-equipment" element={<AddEquipment/>}/>
      <Route path="/:weaponID" element={<GetWeapon/>}/>
    </Routes>
  );
}

export default App;
