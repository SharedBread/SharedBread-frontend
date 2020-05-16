import React, { useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";
import "./Profile.css";
import axios from "axios";

function Profile() {
  // set initial user points
  const [points, setPoints] = useState(0);
  
  // AuthID is dynamic - SEE DEPLOYMENT BRANCH FOR LIVE DYNAMIC VERSION
  const AuthId = '124-afgfhak-123'

  useEffect(() => {
    // fetch donations from api
    axios
      .get(
        `https://f999w3tddd.execute-api.eu-west-1.amazonaws.com/dev/profile/${AuthId}`
      )
      .then((response) => {
        userPoints(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // function to determine overall user score using 3 data points
  const userPoints = (data) => {
    // first data point (number of individual donations made)
    const numOfDonations = data.length;

    // second data point (total amount of items donated)
    let amountOfItems = 0;
    data.forEach((i) => {
      amountOfItems += i.Amount;
    });

    // third data point (number of unique items donated)
    const uniqueItems = [...new Set(data.map((i) => i.FoodItem))].length;

    setPoints(numOfDonations + (amountOfItems - numOfDonations) + uniqueItems);
  };

  const userfullname = "Leslie Knope";
  const location = "Pawnee";

  const hasAchieved = (usersPoints, thresholdPoints) => {
    return usersPoints >= thresholdPoints ? "achievedBadge" : "greyBadge";
  };

  return (
    <>
      {/* Profile user icon, information and point score section */}
      <div className="upper-box">
        <div className="image-container">
          <img className="profileImg" src="leslie.jpg" alt="Avatar"></img>
          <Badge variant="warning" className="rounded-circle">
            <div className="text-circle"> {points} </div>
          </Badge>{" "}
        </div>
      </div>
      <div className="user-info">
        <h2> {userfullname} </h2>
        <p>{location}</p>
      </div>

      {/* Badges section. If the user score reached certain badges the icon becomes full color */}
      <div className="badgeSection">
        <h2> Badges </h2>

        <div className="container">
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col text-center">
              <img
                className={hasAchieved(points, 1)}
                src="checktest.jpg"
                alt="Badge for 1 donation achieved"
              ></img>
              <div className="badgeTag"> Your first donation!</div>
            </div>
            <div className="col text-center">
              <img
                className={hasAchieved(points, 5)}
                src="checktest.jpg"
                alt="Badge for 5 donations achieved"
              ></img>
              <div className="badgeTag"> Five donations!</div>
            </div>
            <div className="col text-center">
              <img
                className={hasAchieved(points, 10)}
                src="checktest.jpg"
                alt="Badge for 10 donations achieved"
              ></img>
              <div className="badgeTag"> Ten donations!</div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col text-center">
              <img
                className={hasAchieved(points, 25)}
                src="checktest.jpg"
                alt="Badge for 25 donations achieved"
              ></img>
              <div className="badgeTag"> Big Donator!</div>
            </div>
            <div className="col text-center">
              <img
                className={hasAchieved(points, 50)}
                src="checktest.jpg"
                alt="Badge for 50 donations achieved"
              ></img>
              <div className="badgeTag"> Charitable Chamption!</div>
            </div>
            <div className="col text-center">
              <img
                className={hasAchieved(points, 100)}
                src="checktest.jpg"
                alt="Badge for 100 donations achieved"
              ></img>
              <div className="badgeTag"> Community Hero!</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
