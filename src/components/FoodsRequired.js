import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { useAuthContext } from "../components/Auth";

function FoodsRequired() {
  
  // get users postcode
  const { authData } = useAuthContext();
  const postcode = useState(authData.attributes["custom:postcode"]);

  
  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.givefood.org.uk/api/1/foodbanks/search/?address=${postcode}`
    )
      .then((response) => response.json())
      .then((data) => {
        totalRequired(data);
      });
  });

  const [state, setState] = useState({});

  // function returns an object that shows combined list of foods required from API.
  const totalRequired = (data) => {
    const arr = data.map((location) => {
      return location.needs
        .toLowerCase() // removes any issues with capitilization
        .split("\n")
        .flat() // flattens arrays into single array
        .map((i) => i.trim()); // map and trim removes white space from start and end of each string
    });
    // loops through array and counts frequency of occurance
    let frequencyObj = {};
    arr.flat().forEach((i) => {
      !frequencyObj[i] ? (frequencyObj[i] = 1) : frequencyObj[i]++;
    });
    setState(frequencyObj);
    return frequencyObj;
  };

  // function returns new object with most need items only. (> 2)
  const mostNeeded = (object) => {
    let newObj = {};
    for (const key in object) {
      if (object[key] > 2) {
        newObj[key] = object[key];
      }
    }
    return newObj;
  };

  // chartJS data
  const data = {
    labels: Object.keys(mostNeeded(state)),
    datasets: [
      {
        label: "Items",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: Object.values(mostNeeded(state)),
      },
    ],
  };

  return (
    <>
      <Doughnut
        data={data}
        options={{
          title: {
            display: true,
            text: "Foods Needed In Your Area",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </>
  );
}

export default FoodsRequired;
