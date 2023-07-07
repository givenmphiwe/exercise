import React from "react";
import "./styles/Tco.css";
import Navbar from "../components/Navbar";
import TcoData from "../Data/TCO.json"

export const Tco = () => {
  return (
    <>
    <Navbar/>
    <div className="main">
      <div className="timeline">

        <div className="container left-container">
            
            <div className="text-box">
                <h2>Alphabet Inc.</h2>
                <small>2017 - 2018</small>
    
                <p>
                    {TcoData && TcoData[0].result.depreciationValue}
                </p>
                <span className="left-container-arrow"></span>
            </div>
        </div>

        <div className="container right-container">
        
            <div className="text-box">
                <h2>Alphabet Inc.</h2>
                <small>2018 - 2019</small>
                <p>The success of every website depends on search engine option optimistion and digital
                    marketing strategy. If you are first page
                </p>
                <span className="right-container-arrow"></span>
            </div>
        </div>

        <div className="container left-container">
        
            <img src=""/>
            <div className="text-box">
                <h2>Alphabet Inc.</h2>
                <small>2020 - 2021</small>
                <p>The success of every website depends on search engine option optimistion and digital
                    marketing strategy. If you are first page
                </p>
                <span className="left-container-arrow"></span>
            </div>
        </div>

        <div className="container right-container">
        {/* <FaFacebook className="container-img"/> */}
            <div className="text-box">
                <h2>Alphabet Inc.</h2>
                <small>2021 - 2022</small>
                <p>The success of every website depends on search engine option optimistion and digital
                    marketing strategy. If you are first page
                </p>
                <span className="right-container-arrow"></span>
            </div>
        </div>

        <div className="container left-container">
        {/* <FaFacebook className="container-img"/> */}
            <img src=""/>
            <div className="text-box">
                <h2>Alphabet Inc.</h2>
                <small>2020 - 2021</small>
                <p>The success of every website depends on search engine option optimistion and digital
                    marketing strategy. If you are first page
                </p>
                <span className="left-container-arrow"></span>
            </div>
        </div>

        <div className="container right-container">
        {/* <FaFacebook className="container-img"/> */}
            <div className="text-box">
                <h2>Alphabet Inc.</h2>
                <small>2021 - 2022</small>
                <p>The success of every website depends on search engine option optimistion and digital
                    marketing strategy. If you are first page
                </p>
                <span className="right-container-arrow"></span>
            </div>
        </div>

      </div>
    </div>
    </>
  );
}

