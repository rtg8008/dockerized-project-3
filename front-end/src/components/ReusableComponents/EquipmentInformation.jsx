//imports begin

import thing from ""
//imports end




function EquipmentInformation(...params) {//app below
   let RequestedInformation = {
    Caliber       :false,
    MaxRange      :false,
    Armored       :false,
    Country       :false,
    MaxRangeUnits :false,
  }
  //map over params and if it was sent as true 
    //change the RequestedInformation key to true.
  
  //navigate over the key and value pair of RequestedInformation to 
    //create a get request form the back end
      //we will return any fetched information back to who ever requested.
  

  

//this component will use the fetch request from the data base to set information and return specific information.




  {//return below
    return (
      <div class="equipment-information">
        {/* the information will go here in what ever style the request component wants */}
      </div>
    );
    //return above}
    {//Hoisted helper functions below
    
    //HelperFunctions Hoisted end
    }
  }
}



export default EquipmentInformation;