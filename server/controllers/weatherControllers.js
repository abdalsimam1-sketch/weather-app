const axios = require("axios");
const formatWeather = require("../util/formatResponse");
const cityToCoordinates = require("../util/cityToCoordinates");
const cache = require("../util/cache");

const getWeather = async (req, res) => {
  const { city } = req.body;
  const coordinates = await cityToCoordinates(city);

  const isCached = cache.get(city);
  if (isCached) {
    console.log("hit");
    return res.status(200).json({
      city: coordinates.name,
      country: coordinates.country,
      data: isCached,
    });
  } else {
    console.log("miss");
    const response = await axios.get(process.env.API_URI, {
      params: {
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        current:
          "temperature_2m,relative_humidity_2m,precipitation,apparent_temperature,wind_speed_10m",
        daily: "weather_code,temperature_2m_max,temperature_2m_min",
        hourly: "temperature_2m,weather_code",
      },
    });
    const formated = formatWeather(response);
    cache.set(city, formated);

    res.status(200).json({
      city: coordinates.name,
      country: coordinates.country,
      data: formated,
    });
  }
};

module.exports = { getWeather };
