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


    const  [text, setText] = useState("");
    const handleTextChange =(event) => {
        setText(event.target.value);
    }

    //1- click on the button
    //2- upon clicking, fetch data from API
    //3- map the data in a new object and display in the card body

    const handleTextUpdate = (event) => {
        setLocation(event.target.value)
        console.log("changed")
    }

    const handleButtonClicked = (event) => {
        console.log(event.target.value)
        console.log("clicked")
    };

    return (
        <div>
            <h1>Your Local Food Banks</h1>
            <div>
                
                <MyMapComponent
                    containerElement={<div style={{ height: `500px`, width: `500px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                <div className="row">
                    <div className="col-12 col-md-4"> <input type="test" className="text-control" placeholder="Postcode" onChange={handleTextChange}/>
                        <button type="Button" class="btn btn-primary" onClick={handleButtonClicked} > Go </button>
                        <div className="card">
                            <div> <input type="text" className="form-control" onClick={handleTextUpdate} />
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Map;