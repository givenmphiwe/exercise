import React from "react";
import "./styles/Tco.css";
import Navbar from "../components/Navbar";
import TcoData from "../Data/TCO.json";

export const Tco = () => {
  const total =
    TcoData &&
    TcoData[0].result.serviceCost + TcoData &&
    TcoData[0].result.maintenanceCost + TcoData &&
    TcoData[0].result.maintenanceAdditionalCost + TcoData &&
    TcoData[0].result.tyreCost + TcoData &&
    TcoData[0].result.fuelCost + TcoData &&
    TcoData[0].result.financeCost + TcoData &&
    TcoData[0].result.financeCostBase + TcoData &&
    TcoData[0].result.financeCostInterest + TcoData &&
    TcoData[0].result.insuranceCost;

  //calculating for the total per km
  const totalperkm =
    TcoData &&
    TcoData[0].result.serviceCostPerKm + TcoData &&
    TcoData[0].result.maintenanceCostPerKm + TcoData &&
    TcoData[0].result.maintenanceAdditionalCostPerKm + TcoData &&
    TcoData[0].result.tyreCostPerKm + TcoData &&
    TcoData[0].result.fuelCostPerKm + TcoData &&
    TcoData[0].result.residualValuePerKm + TcoData &&
    TcoData[0].result.depreciationPerKm + TcoData &&
    TcoData[0].result.financeCostPerKm + TcoData &&
    TcoData[0].result.financeCostBasePerKm + TcoData &&
    TcoData[0].result.financeCostPerInterestKm + TcoData &&
    TcoData[0].result.insuranceCostPerKm;

  const totalWithKm =
    parseFloat(totalperkm) * parseFloat(TcoData && TcoData[0].result.lifeTime);

  const ResaleVaule =
    parseFloat(TcoData && TcoData[0].result.residualValue) +
    parseFloat(TcoData && TcoData[0].result.depreciationValue);

  return (
    <>
      <Navbar />
      <div className="main">
        <div className="timeline">
          <div className="container left-container">
            <div className="text-box">
              <h2>Total cost of ownership</h2>
              <small>At {TcoData && TcoData[0].result.lifeTime} Km</small>

              <p>R {total}</p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <div className="text-box">
              <h2>Total cost of ownership PerKm</h2>
              <small>
                At {TcoData && TcoData[0].result.lifeTime}Km will be R
                {totalWithKm}{" "}
              </small>
              <p>Per Km total R {totalperkm}</p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container left-container">
            <div className="text-box">
              <h2>Resale value</h2>
              <small>{TcoData && TcoData[0].result.lifeTime} Km</small>
              <p>R{ResaleVaule}</p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <div className="text-box">
              <h2>Service Cost Per Km</h2>
              <small></small>
              <p>R{TcoData && TcoData[0].result.serviceCostPerKm}</p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container left-container">
            <div className="text-box">
              <h2>Service Cost</h2>
              <small>{TcoData && TcoData[0].result.lifeTime} Km</small>
              <p>R{TcoData && TcoData[0].result.serviceCost}</p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <div className="text-box">
              <h2>Maintenance Cost Per Km</h2>
              <small></small>
              <p>R{TcoData && TcoData[0].result.maintenanceCostPerKm}</p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container left-container">
            <div className="text-box">
              <h2>Trye Cost</h2>
              <small>{TcoData && TcoData[0].result.lifeTime} Km</small>
              <p>R{TcoData && TcoData[0].result.tyreCost}</p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <div className="text-box">
              <h2>Tyre Cost Cost Per Km</h2>
              <small></small>
              <p>R{TcoData && TcoData[0].result.tyreCostPerKm}</p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container left-container">
            <div className="text-box">
              <h2>Fuel Cost</h2>
              <small>{TcoData && TcoData[0].result.lifeTime} Km</small>
              <p>R{TcoData && TcoData[0].result.fuelCost}</p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <div className="text-box">
              <h2>Fuel Cost Per Km</h2>
              <small></small>
              <p>R{TcoData && TcoData[0].result.fuelCostPerKm}</p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container left-container">
            <div className="text-box">
              <h2>Residual Value</h2>
              <small>{TcoData && TcoData[0].result.lifeTime} Km</small>
              <p>R{TcoData && TcoData[0].result.residualValue}</p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <div className="text-box">
              <h2>Residual Value Per Km</h2>
              <small></small>
              <p>R{TcoData && TcoData[0].result.residualValuePerKm}</p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container left-container">
            <div className="text-box">
              <h2>Depreciation Value</h2>
              <small>{TcoData && TcoData[0].result.lifeTime} Km</small>
              <p>R{TcoData && TcoData[0].result.depreciationValue}</p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <div className="text-box">
              <h2>Depreciation Value Per Km</h2>
              <small></small>
              <p>R{TcoData && TcoData[0].result.depreciationPerKm}</p>
              <span className="right-container-arrow"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
