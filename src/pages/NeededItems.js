import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "./NeededItems.css";

function NeededItems() {
  const postCode = "M130LE";

  const [locations, setLocation] = useState([]);

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.givefood.org.uk/api/1/foodbanks/search/?address=${postCode}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLocation(data);
        console.log(data);
      });
  }, []);

  const addItem = (data) => {
    console.log(data);
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
            <div className="row">
              <div className="col-4">
                <h5>{location.name} </h5>
                <p>{location.distance_mi} miles</p>
              </div>

              <div className="col-8">
                <form>
                  {location.needs
                    .replace(/And/g, ",")
                    .split(/[,\n/]+/)
                    .map((need) => {
                      return (
                        <Card>
                          <div className="form col d-flex justify-content-between">
                            <div className="need">
                              {" "}
                              {need}{" "}
                            </div>
                            <div className="plus" onClick={() => addItem({need})}> + </div>
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
    </div>
  );
}

export default NeededItems;
