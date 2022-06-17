//imports begin

import Picture from "../ReusableComponents/Picture.jsx"
//imports end




function DetailPage() {//app below
  //Take in the URL PARAMS to request the picture form the database



  {//return below
    return (
      <>

      </>
    );
    //return above}
    {//Hoisted helper functions below
      <>
        <Picture/> 
        {/* above is the picture dive that should be on the left side 
        and take up 33% of the window */}
        <EqupmentInformaiton all={true} />
        {/* above is the information div that allows us to return what information we want
        if we tell it all then it send all the information back if we only want certain
         categories it will only sned back certain categories */}

      </>
    //HelperFunctions Hoisted end
    }
  }
}



export default DetailPage;