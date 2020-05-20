import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import pattern from 'patternomaly';
import { Spinner } from "react-bootstrap";


function FoodsRequired() {
  const postcode = "M85QE"; // this will be dynamic - either geolocation or pc from DB.

  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.givefood.org.uk/api/1/foodbanks/search/?address=${postcode}`
    )
      .then((response) => response.json())
      .then((data) => {
        totalRequired(data);
        setLoading(false)
      });
  }, []);

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
          pattern.draw('square', '#a3aba2'),
          pattern.draw('diagonal-right-left', '#39AA71'),
          pattern.draw('dot', '#497C5B'),
          pattern.draw('zigzag-horizontal', '#E8BC00'),
          pattern.draw('dash', '#6EB257')
        ],
        hoverBackgroundColor: [
          pattern.draw('square',"#464a46"),
          pattern.draw('diagonal-right-left', "#184a31"),
          pattern.draw('dot', '#1b2e22'),
          pattern.draw('zigzag-horizontal','#826900'), 
          pattern.draw('dash', '#37592b')
        ],
        data: Object.values(mostNeeded(state)),
      },
    ],
  };

  return (
    <>
      <h2 style={{marginTop: 30}}>Needed Items in Your Area</h2>
      {loading ? <Spinner style = {{position: "fixed", top: "50%", left: "50%" }} animation="border" size="lg" /> : null}
      <Doughnut
        data={data}
        options={{
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
