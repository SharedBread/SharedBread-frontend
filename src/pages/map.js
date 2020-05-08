import React from 'react';
import { GoogleMap,Marker, withGoogleMap} from "react-google-maps"


    


function Map(){

const MyMapComponent = withGoogleMap(props =>(
<GoogleMap
    defaultZoom={8}
    defaultCenter={{lat:-34.397, lng:150.644}}
    >
        {props.isMarkerShown && <Marker position ={{lat: -34.397, lng: 150.644}}/>}
        </GoogleMap>
));
    return (
        <div>
         <h1>Map Template</h1>  
        <div>
      <MyMapComponent
      containerElement ={<div style={{height: `500px`, width: `500px`}}/>}
      mapElement={<div style={{height: `100%`}}/>}
      />
      
        </div>
       </div>
    );
}

export default Map;