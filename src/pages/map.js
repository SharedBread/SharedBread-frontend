import React, { setLocation, useState } from 'react';
import { GoogleMap, Marker, withGoogleMap } from "react-google-maps";
import { Button } from "react-bootstrap"
import { useHistory } from 'react-router-dom';


function Map() {

    const MyMapComponent = withGoogleMap(props => (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 53.4808, lng: -2.2426 }}
        >
            {props.isMarkerShown && <Marker position={{ lat: 53.4808, lng: -2.2426 }} />}
        </GoogleMap>
    ));

  


    return (
        <div>
            <h1>Your Local Food Banks</h1>
            <div>
                
                <MyMapComponent
                    containerElement={<div style={{ height: `500px`, width: `500px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                <div className="row">
                    <div className="col-12 col-md-4"> <input type="test" className="text-control" placeholder="Postcode" />
        
                </div>
            </div>
        </div>
    );
}

export default Map;