import React, { useState, useEffect } from "react";
import {Pie, Doughnut} from 'react-chartjs-2';


function FoodsRequired() {
  const postcode = "PR253NX"; // this will be dynamic - either geolocation or pc from DB.

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.givefood.org.uk/api/1/foodbanks/search/?address=${postcode}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        totalRequired(data);
      });
  }, []);

  const [state, setState] = useState({})

  // function returns an object that shows combined list of foods required from API.
  const totalRequired = (data) => {
    const arr = data.map((location) => {
      return location.needs
        .toLowerCase() // removes any issues with capitilization
        .split("\n")
        .flat() // flattens arrays into single array
        .map((i) => i.trim()); // map and trim removes white space from start and end of each string
    });
    // loops through array and counts frquency of occurance
    let frequencyObj = {};
    arr.flat().forEach((i) => {
      !frequencyObj[i] ? (frequencyObj[i] = 1) : frequencyObj[i]++;
    });
    console.log(frequencyObj)
    setState(frequencyObj)
    return frequencyObj;
  };

  const testObj = {
    beans: 5,
    milk: 10,
    'tinned tomatoes': 5
  }  

  function filterItems(arr) {
    return Object.keys(arr).filter(el => arr[el] > 2);
  }
  
  console.log(filterItems(state));
  
  
  const data = {
    labels: Object.keys(testObj),
    datasets: [
      {
        label: 'Items',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
        ],
        data: [100, 59, 80, 81, 56]
      }
    ]
  }
  

  return (<>

    <Doughnut
          data={data}
          options={{
            title:{
              display:true,
              text:'Foods Most Needed',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
  </>);
}

export default FoodsRequired;
