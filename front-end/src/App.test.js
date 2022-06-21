
import { render, screen } from '@testing-library/react';
import HomePage from './components/HomePage/HomePage';
import DetailPage from './components/EquipmentDetailsPage/DetailPage';
import AddEquipmentPage from './components/addEquipment/addEquipmentPage.jsx';
import MissionOverView from './components/Mission/MissionOverView';
import AddMissionEquipment from './components/Mission/AddEquipment/AddMissionEquipmentPage';
import { BrowserRouter } from "react-router-dom";

describe('home Page', () => {
  test('renders header', () => {
    render(<BrowserRouter><HomePage /></BrowserRouter>);
    const header = screen.getByText(/worldwide equipment guide/i);
    expect(header).toBeInTheDocument();
  });
  test('renders create new equpiment button', () => {
    render(<BrowserRouter><HomePage /></BrowserRouter>);
    const equipmentButton = screen.getByText(/CREATE NEW EQUIPMENT/);
    expect(equipmentButton).toBeInTheDocument();
  });
  test('renders create new mission button', () => {
    render(<BrowserRouter><HomePage /></BrowserRouter>);
    const missionButton = screen.getByText(/CREATE NEW MISSION/);
    expect(missionButton).toBeInTheDocument();
  });
  test('renders search mission button', () => {
    render(<BrowserRouter><HomePage /></BrowserRouter>);
    const searchButton = screen.getByText(/SEARCH MISSION/);
    expect(searchButton).toBeInTheDocument();
  });
})

describe('details page', () => {
  test('renders category', () => {
    render(<BrowserRouter><DetailPage /></BrowserRouter>);
    const category = screen.getByText(/Category/);
    expect(category).toBeInTheDocument();
  });
  test('renders subcategory', () => {
    render(<BrowserRouter><DetailPage /></BrowserRouter>);
    const subcategory = screen.getByText(/Subcategory/);
    expect(subcategory).toBeInTheDocument();
  });
  test('renders caliber', () => {
    render(<BrowserRouter><DetailPage /></BrowserRouter>);
    const caliber = screen.getByText(/Caliber/);
    expect(caliber).toBeInTheDocument();
  });
  test('renders max range meter', () => {
    render(<BrowserRouter><DetailPage /></BrowserRouter>);
    const maxRangeMeter = screen.getByText(/Max range meter/);
    expect(maxRangeMeter).toBeInTheDocument();
  });
  test('renders armored', () => {
    render(<BrowserRouter><DetailPage /></BrowserRouter>);
    const armored = screen.getByText(/Armored/);
    expect(armored).toBeInTheDocument();
  });
  test('renders country', () => {
    render(<BrowserRouter><DetailPage /></BrowserRouter>);
    const country = screen.getByText(/Country/);
    expect(country).toBeInTheDocument();
  });
})

// describe('add mission equipment page', () => {
//  test('renders learn react link', () => {
//    render(<AddMissionEquipment />);
//    const linkElement = screen.getByText(/learn react/i);
//    expect(linkElement).toBeInTheDocument();
//  });
// })

//

// describe('mission overview', () => {
//   test('renders learn react link', () => {
//     render(<MissionOverView />);
//     const linkElement = screen.getByText(/learn react/);
//     expect(linkElement).toBeInTheDocument();
//   });
//   test('renders learn react link', () => {
//     render(<MissionOverView />);
//     const linkElement = screen.getByText(/learn react/);
//     expect(linkElement).toBeInTheDocument();
//   });
//   test('renders learn react link', () => {
//     render(<MissionOverView />);
//     const linkElement = screen.getByText(/learn react/);
//     expect(linkElement).toBeInTheDocument();
//   });
//   test('renders learn react link', () => {
//     render(<MissionOverView />);
//     const linkElement = screen.getByText(/learn react/);
//     expect(linkElement).toBeInTheDocument();
//   });
// })

//equipment, latitude, longitude, phase, quantity

// describe('add equipment page', => {
//  test('renders learn react link', () => {
//    render(<AddEquipmentPage />);
//    const linkElement = screen.getByText(/learn react/i);
//    expect(linkElement).toBeInTheDocument();
// });
// })

//

