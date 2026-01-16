export const getWeatherData = async () => {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=9.0579&longitude=7.4951&daily=weather_code&hourly=temperature_2m,weather_code&current=weather_code,wind_speed_10m,temperature_2m,relative_humidity_2m,precipitation&temperature_unit=fahrenheit&timezone=auto";

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching weather : ", error);
  }
};
