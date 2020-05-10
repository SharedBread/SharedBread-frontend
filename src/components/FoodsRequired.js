import React, { useEffect } from "react";

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

  // function returns an object that shows combined list of foods required from API.
  const totalRequired = (data) => {
    const arr = data.map((location) => {
      return location.needs
        .toLowerCase()
        .split("\n")
        .flat()
        .map((i) => i.trim());
    });
    let frequencyObj = {};
    arr.flat().forEach((i) => {
      !frequencyObj[i] ? (frequencyObj[i] = 1) : frequencyObj[i]++;
    });

    return arr;
  };

  return <></>;
}

export default FoodsRequired;
