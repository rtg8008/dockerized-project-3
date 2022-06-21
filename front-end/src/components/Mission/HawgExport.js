import React, { useEffect } from 'react';
import { CSVLink } from "react-csv";
 
function HawgExport({results, missionId}) {

  const headers = [
    { label: "TITLE", key: "title" },
    { label: "THREAT TYPE", key: "threatType" },
    { label: "CUSTOM RANGE (NM)", key: "customRange" },
    { label: "AFFILIATION", key: "affiliation" },
    { label: "LAT", key: "lat" },
    { label: "LNG", key: "lng" },
    { label: "MGRS/IDENT", key: "mgrsIdent" },
    { label: "BULLSEYE BEARING", key: "bullseyeBearing" },
    { label: "BULLSEYE RANGE", key: "bullseyeRange" }
  ];
  
  const data = results.map(equipment => {
    return { 
            title: equipment.equipment_name,
            threatType: '',
            customRange: equipment.maxrangemeters * 0.0005399568,
            affiliation: 'Hostile', 
            lat: equipment.lat,
            lng: equipment.lon,
            mgrsIdent: '',
            bullseyeBearing: '',
            bullseyeRange: '' 
          }
  });
  if (data.length > 0) {
    const length = data.length - 1;
    data[length].bullseyeRange = '\n';
    console.log('Compiled CSV Data:', data);
  };

  let timeStamp = Math.floor(new Date().getTime()/1000)
  timeStamp = (timeStamp+'').substring(6);
  const csvReport = {
    data: data,
    headers: headers,
    filename: `weg_msn_rpt_${missionId}_${timeStamp}.csv`
  };

  const exportHandler = () => {
    console.log('Console Log Export Props:', results)
  }
  return (
    <div>
      <CSVLink {...csvReport} enclosingCharacter={``} onClick={exportHandler}>Export Mission Data (.csv)</CSVLink>
    </div>
  );
}
 
export default HawgExport;