import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './NeededItems.css';
import { useAuthContext } from "../components/Auth";
import Snackbar from "@material-ui/core/Snackbar";
import axios from "axios";
import Attribution from "../components/Attribution"

function NeededItems() {

  // state to open / close snackbar
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

   // get users postcode
  const { authData } = useAuthContext();
  const postcode = authData.attributes["custom:postcode"];
  const AuthID = authData.attributes.sub.toString();


    const [locations, setLocation] = useState([])

    useEffect(() => {
        fetch(`https://cors-anywhere.herokuapp.com/https://www.givefood.org.uk/api/1/foodbanks/search/?address=${postcode}`)
            .then((response) => response.json())
            .then((data) => {
                setLocation(data);
            })
    }, []);

  // function to add item into DB
  const addItem = (data) => {
    console.log(data);
    axios
      .post(
        "https://f999w3tddd.execute-api.eu-west-1.amazonaws.com/dev/addToBasket",
        {
          FoodItem: data.need,
          AuthID: AuthID
        }
      )
      .then((response) => {
        setOpen(true);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <div style={{ marginBottom: 86 }}>
      <h1>Needed Items</h1>
      <div>
        <p>Click + to add the item to your shopping list</p>
      </div>

      {locations.map((location) => {
        return (
          <div className="container">
            <div className="row" key={`${location.charity_number}`}>
              <div className="col-4">
                <h5>{location.name} </h5>
                <p>{location.distance_mi} miles</p>
              </div>

              <div className="col-8">
                <form>
                  {location.needs
                    .replace(/And/g, ",")
                    .trim()
                    .split(/[,\n/]+/)
                    .map((need) => {
                      return (
                        <Card>
                          <div className="form col d-flex justify-content-between">
                            <div className="need"> {need} </div>
                            <div
                              className="plus"
                              onClick={() => addItem({ need })}
                            >
                              {" "}
                              +{" "}
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                </form>
              </div>
              <div className="col">
                {" "}
                <hr />{" "}
              </div>
            </div>
          </div>
        );
      })}

      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Added To Shopping Basket"
      />
      <Attribution />
    </div>
  );
}

export default NeededItems;
