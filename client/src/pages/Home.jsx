import logo from "../assets/images/logo.svg";
import { Units } from "../components/Units";
import { useUnit } from "../hooks/useUnit";
import { weatherData } from "../data/weatherData";
import { useState } from "react";
import { formatFullDate } from "../helper functions/formatDate";
import { useCurrentStat } from "../hooks/useCurrentStat";
import { CurrentStatCard } from "../components/CurrentStatCard";
import { getWeekDay } from "../helper functions/formatDate";
import { weatherCodeToIcon } from "../helper functions/weatherIcon";

export const Home = () => {
  const { unitOpen, toggleUnits, unit, switchUnits } = useUnit();
  const [inputCity, setInputCity] = useState("");
  const { currentStats } = useCurrentStat(weatherData.data.current);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="home-page">
      <main className="container pt-5 d-flex flex-column gap-3 pb-lg-5">
        <header className="d-flex justify-content-between">
          <img src={logo} alt="logo" />
          <div className="position-relative">
            <div
              className="rounded unit-button p-2 d-flex gap-3 cursor-pointer "
              onClick={toggleUnits}
            >
              <i className="bi bi-gear"></i>
              <>Units</>
              <i className="bi bi-chevron-down"></i>
            </div>
            {unitOpen && (
              <div>
                <Units unit={unit} switchUnits={switchUnits}></Units>
              </div>
            )}
          </div>
        </header>

        <section className="heading text-center">
          <h1>How's the sky looking today?</h1>
        </section>

        <section className="input-section mx-auto">
          <form
            className="d-flex gap-3 flex-column flex-md-row"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="form-control"
              value={inputCity}
              onChange={(e) => setInputCity(e.target.value)}
            />
            <button className="btn btn-primary">Search</button>
          </form>
        </section>

        <section className="row main-section ">
          <div className="left-column col-12 col-lg-8 d-flex flex-column gap-3 ">
            <div className="main-weather-section d-flex flex-column align-items-center flex-md-row justify-content-between align-items-md-center p-5 text-center text-md-start">
              <div className="city-country">
                <h1 className="text-light">
                  <>{weatherData.city}</>
                  <>, {weatherData.country}</>
                </h1>
                <span>{formatFullDate(weatherData.data.current.time)}</span>
              </div>
              <div className="d-flex align-items-center gap-5">
                <img
                  src={weatherCodeToIcon(
                    weatherData.data.daily[0].weather_code,
                  )}
                  alt="sunny"
                  style={{ width: "5rem" }}
                />
                <h1>{weatherData.data.current.temperature_2m}&deg;</h1>
              </div>
            </div>

            <div className="current-stats-section row g-3">
              {currentStats.map((item) => (
                <div key={item.label} className="col-6 col-md-3">
                  <CurrentStatCard
                    label={item.label}
                    value={item.value}
                    unit={item.unit}
                  ></CurrentStatCard>
                </div>
              ))}
            </div>

            <div className="daily-section">
              <h3>Daily Section</h3>
              <div className="text-center row g-2">
                {weatherData.data.daily.map((day) => (
                  <div className="col-4 col-md-2">
                    <div className="daily-card rounded d-flex flex-column p-3">
                      <span>{getWeekDay(day.day)}</span>
                      <span>
                        <img
                          src={weatherCodeToIcon(day.weather_code)}
                          alt="sunny"
                          style={{ width: "5rem" }}
                        />
                      </span>
                      <div className="d-flex justify-content-between">
                        <span>{day.temperature_2m_max}&deg;</span>
                        <span>{day.temperature_2m_min}&deg;</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="right-column col-12 col-lg-4">
            <div className="hourly-section"></div>
          </div>
        </section>
      </main>
    </div>
  );
};
