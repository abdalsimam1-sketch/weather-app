const formatResponse = (response) => {
  const {
    time: dailyTime,
    weather_code: dailyWeatherCode,
    temperature_2m_max: dailyMax,
    temperature_2m_min: dailyMin,
  } = response.data.daily;

  const {
    time: hourlyTime,
    temperature_2m: hourlyTemp,
    weather_code: hourlyWeatherCode,
  } = response.data.hourly;

  return {
    current: response.data.current,
    daily: dailyTime.map((day, index) => ({
      day,
      weather_code: dailyWeatherCode[index],
      temperature_2m_max: dailyMax[index],
      temperature_2m_min: dailyMin[index],
    })),
    hourly: hourlyTime.map((hour, index) => ({
      hour,
      weather_code: hourlyWeatherCode[index],
      temperature_2m: hourlyTemp[index],
    })),
  };
};

module.exports = formatResponse;
