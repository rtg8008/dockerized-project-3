//imports begin

import thing from ""
//imports end




function AddEquipmentComponent() {//app below
//this component will need to keep track of a number and update that number with use state
//this number will need to be accessible to the modify equipment component 
  //this number will be used to modify the database
//this number will never be allowed to be less than 0
//this number will be incremitted in values of (+/-)1



  {//return below
    return (
      <div class ="add-equipment" >
        <Picture/>
        <EquipmentInformation/>
        <div class = "add-subtract">
          <div class="subtract-button" onClick = {()=>{}}>
              -1
          </div>
          <div class = "spacer">

          </div>
          <div class="add-button" onClick = {()=>{}}>
              +1
          </div>
        </div>
      </div>
      
    );
    //return above}
    {//Hoisted helper functions below
    
    //HelperFunctions Hoisted end
    }
  }
}



export default AddEquipmentComponent;