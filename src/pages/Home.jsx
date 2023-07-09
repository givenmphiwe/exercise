import React from "react";
import Navbar from "../components/Navbar";
import "./styles/Home.css";
import { Link } from "react-scroll";
import serviceimg from "../assets/s1.png";
import ServicePlan from "../components/ServicePlan";
import data from "../Data/ServiceTotal.json";
import Chart from "../components/Chart";

export const Home = () => {
  return (
    <body>
      <Navbar />

      <div id="main">
        <div className="header-heading">
          <h3>IT's a Great Time For A Good Service Plan</h3>
          <h1>
            <span>Volkswagen</span> 1.0
            <br /> Life
          </h1>
          <p className="details"></p>

          <div className="header-btns">
            <a className="header-btn">
              <Link to="graph" smooth={true} duration={2000}>
                Chart
              </Link>
            </a>
          </div>
        </div>
      </div>

      <div id="products">
        <h1>CHOOSE & ENJOY</h1>
        {data.servicePlans?.map((data, i) => (
          <p>
            Taking Care your vehicle is extending the life span of it. At{" "}
            {data.interval} km, the parts will cost R{data.parts} and the fluids
            will cost R{data.fluids},<br/> the labour for Servicing your car will be R{data.labour} and
            The sundries will cost R{data.sundries}.
          </p>
        ))}

        <div className="a-container">
          <div className="a-box">
            <div className="a-b-img">
              <img src={serviceimg} alt="" />
            </div>

            <div className="a-b-text">
              {data.servicePlans?.map((data, i) => (
                <h3 key={i}>
                  {" "}
                  Total Service Plan for {data.interval} Km is R{data.total}<br/>
                </h3>
              ))}

              <button className="productbox-button">
                <Link to="about" smooth={true} duration={2000}>
                  Learn More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ServicePlan />
      <Chart />
    </body>
  );
};
