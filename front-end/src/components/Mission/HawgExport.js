import React from 'react';
import { CSVLink } from "react-csv";
 
function HawgExport(results) {

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
   
  const data = [
    { title: 'Sample Title', threatType: '', customRange: 2000, affiliation: '', lat: 34.455635, lng: 43.799957, mgrsIdent: '', bullseyeBearing: '', bullseyeRange: 'ryan' },
    { title: 'Sample Title', threatType: '', customRange: 2000, affiliation: '', lat: 34.455635, lng: 43.799957, mgrsIdent: '', bullseyeBearing: '', bullseyeRange: '\n' },

  ];
   
  const csvReport = {
    data: data,
    headers: headers,
    filename: 'weg_msn_rpt.csv'
  };
  return (
    <div>
      <CSVLink {...csvReport} enclosingCharacter={``}>Export Mission Data (.csv)</CSVLink>
    </div>
  );
}
 
export default HawgExport;