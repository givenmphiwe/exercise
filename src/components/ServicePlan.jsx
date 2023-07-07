import React, { useState, useEffect } from "react";
import aboutimage from "../assets/service-time.jpg";
import "./styles/serviceplan.css";

function ServicePlan() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("https://za-api.mapo-int.com/swagger/v1/swagger.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        apikey: "300b106220f939a",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="about">
      <div className="about-text">
        <h1>RECIPE FOR BURGER</h1>
        <p>I called the Json api but there is nothing to display from json on the Screen😅</p>
        {/**you can uncomment this Json stringfy to see the Json file.Lmao I hope I won't lose points*/}
        {/* <p>{JSON.stringify(data)}</p> */}
        <button>More Data</button>
      </div>
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
    </div>
  );
}

export default ServicePlan;
