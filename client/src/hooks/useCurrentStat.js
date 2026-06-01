export const useCurrentStat = (current) => {
  const currentStats = [
    { label: "Feels Like", value: current.apparent_temperature, unit: "" },
    { label: "Humidity", value: current.relative_humidity_2m, unit: "" },
    { label: "Wind", value: current.wind_speed_10m, unit: "" },
    { label: "Precipitation", value: current.precipitation, unit: "" },
  ];
  return { currentStats };
};
