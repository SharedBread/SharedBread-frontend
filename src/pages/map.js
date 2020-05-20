import React, { useState, useEffect } from 'react';
import {Card } from 'react-bootstrap';
import { useAuthContext } from "../components/Auth";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";
import Geocode from "react-geocode";
import Attribution from "../components/Attribution"

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);

function Map() {
  const postCode = "PR253NX";

  const [locations, setLocation] = useState([]);

    // get users postcode
  const { authData } = useAuthContext();
  const postcode = authData.attributes["custom:postcode"];

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.givefood.org.uk/api/1/foodbanks/search/?address=${postcode}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLocation(data);
      });
  }, [postcode]);

  const [map, setMap] = useState([]);

  const markerFunc = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      Geocode.fromAddress(arr[i]).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          newArr.push({ lat: lat, lng: lng });
        },
        (error) => {
          console.error(error);
        }
      );
    }
    setMap(newArr);
  };

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.givefood.org.uk/api/1/foodbanks/search/?address=${postCode}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLocation(data);
        markerFunc(data);
      });
  }, []);

  const MyMapComponent = withScriptjs(
    withGoogleMap((data) => (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 53.483959, lng: -2.244644 }}
      >
        {map.map((i) => {
          return <Marker position={{ lat: i.lat, lng: i.lng }} />;
        })}
      </GoogleMap>
    ))
  );

  return (
    <div>
      <h1>Your Local Food Banks</h1>
      <div>
        <MyMapComponent
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `500px`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        {locations.map((location) => {
          return (
            <Card>
              <Card.Body>
                <Card.Title>
                  {" "}
                  <h4>{location.name} </h4>
                </Card.Title>
                <Card.Text> {location.address}</Card.Text>
                <Card.Text>
                  {" "}
                  <a href={`tel:${location.phone}`}>Call: {location.phone}</a>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <Attribution />
    </div>
  );
}
export default Map;
