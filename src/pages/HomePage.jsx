import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.svg";
import { getWeatherData } from "../services/weatherAPI";

export const HomePage = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [hourly, setHourly] = useState(null);
  const [daily, setDaily] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      const data = await getWeatherData();
      if (data) {
        setCurrentWeather(data.current);
        setHourly(data.hourly);
        setDaily(data.daily);
      }
      setLoading(false);
    };
    fetchWeather();
  }, []);
  return (
    <>
      <div className="home-page text-center d-flex flex-column ">
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
          className="weather-section d-flex flex-column  flex-md-row gap-3 align-self-center p-5 mb-5"
          style={{ border: "1px solid black" }}
        >
          <div className="weather-left d-flex flex-column gap-5">
            {loading ? (
              <div className="weather-main-card d-flex justify-content-center">
                <h2>Loading ....</h2>
              </div>
            ) : (
              <div
                className="weather-main-card "
                style={{ borderRadius: "1rem" }}
              >
                <h2>Current: {currentWeather.temperature_2m}</h2>
              </div>
            )}
            <div className="stat-grid d-flex flex-column flex-md-row gap-3 justify-content-between">
              {" "}
              <div className="stat-card ">
                {loading ? (
                  <h2>Loading...</h2>
                ) : (
                  <div>
                    {" "}
                    <p>Feels like:{currentWeather.temperature_2m}</p>
                  </div>
                )}
              </div>
              <div className="stat-card ">
                {" "}
                {loading ? (
                  <h2>Loading...</h2>
                ) : (
                  <div>
                    {" "}
                    <p>Humiduty:{currentWeather.relative_humidity_2m}</p>
                  </div>
                )}
              </div>
              <div className="stat-card ">
                {" "}
                {loading ? (
                  <h2>Loading...</h2>
                ) : (
                  <div>
                    {" "}
                    <p>Wind:{currentWeather.wind_speed_10m}</p>
                  </div>
                )}
              </div>
              <div className="stat-card ">
                {" "}
                {loading ? (
                  <h2>Loading...</h2>
                ) : (
                  <div>
                    {" "}
                    <p>Precipitation:{currentWeather.precipitation}</p>
                  </div>
                )}
              </div>
            </div>
            {loading ? (
              <p>Loading..</p>
            ) : (
              <div className="daily-forecast d-flex flex-column flex-md-row gap-5 ">
                {daily.time.map((day, index) => (
                  <div key={index} className="daily-card ">
                    <p>{day}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="weather-right d-flex flex-column ">
            <div className="hourly-forecast">
              {loading ? (
                <p>Loading...</p>
              ) : (
                hourly.time.slice(3, 12).map((hour, index) => {
                  return (
                    <div className="hourly-card" key={index}>
                      <p>Hour : {hour}</p>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
