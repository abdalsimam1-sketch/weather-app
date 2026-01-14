import React from "react";
import logo from "../assets/images/logo.svg";

export const HomePage = () => {
  return (
    <>
      <div className="home-page text-center  ">
        <nav className="d-flex justify-content-between p-5 ">
          <img src={logo} alt="logo" />
          <div className="btn btn-primary d-flex align-items-center gap-3">
            <i className="bi bi-gear"></i>
            <select className="form-select ">
              <option disabled>Units</option>
            </select>
          </div>
        </nav>

        <div className=" d-flex flex-column search-section mb-5">
          <h1 className="mb-5">How's the sky looking today?</h1>
          <div className="d-flex gap-3 px-5 ">
            <input
              type="text"
              className="form-control bg-secondary"
              placeholder=" 🔍    Search for a place...."
            />
            <button className="btn btn-primary">Search</button>
          </div>
        </div>

        <div
          className="weather-section d-flex"
          style={{ border: "1px solid black" }}
        >
          <div className="first-column">
            <div className="row row1"></div>
            <div className="row"></div>
            <div className="row"></div>
          </div>
          <div className="second-column"></div>
        </div>
      </div>
    </>
  );
};
