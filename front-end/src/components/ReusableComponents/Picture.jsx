//imports begin

import thing from ""
//imports end




function Picture(props) {//app below
  let imageURL = props.url
//We will need to fetch the picture form the backend
  //this picture will not need to change
console.log(imageURL)


  {//return below
    return (
      <div class ="equipment-image" >
       tested
        {/* 
          the component requesting the image will choose the styling
        */}
      </div>
      
    );
    //return above}
    {//Hoisted helper functions below
    
    //HelperFunctions Hoisted end
    }
  }
}



export default Picture;