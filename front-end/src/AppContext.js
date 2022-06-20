


import React, { useState } from "react";

const AppContext = React.createContext();

// Use AppProvider at the root of your project to provided to all children
const AppProvider = ({ children }) => {

  const [equipmentDetails, setEquipmentDetails] = useState( {
    name: '',
    category: '',
    subcategory: '',
    caliber: '',
    armored: false,
    country: '',
    image: ''
  });

  /* EQUIPMENT VALUES AND TYPES
    table.increments();
    table.string('name', 256) // specifies type, field name, and limit (i.e. character limit)
    table.integer('subcategory_id');    
    table.foreign('subcategory_id').references('subcategory.id');
    table.string('caliber', 128);
    table.integer('max_range_meters');
    table.boolean('armored');
    table.string('country', 256);
    table.string('image', 1024);
*/

const [metaContext, setMetaContext] = useState( {
  id: '',
  quantity: '',
  phase: '',
  location_lat: '',
  location_long: '',
});


  const values = {
    equipmentDetails
  }

  const setters = {
    setEquipmentDetails
  }

  return (
    <AppContext.Provider value={{values, setters}}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };