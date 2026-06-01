import drizzle from "../assets/images/icon-drizzle.webp";
import fog from "../assets/images/icon-fog.webp";
import overcast from "../assets/images/icon-overcast.webp";
import partlyCloudy from "../assets/images/icon-partly-cloudy.webp";
import rain from "../assets/images/icon-rain.webp";
import snow from "../assets/images/icon-snow.webp";
import storm from "../assets/images/icon-storm.webp";
import sunny from "../assets/images/icon-sunny.webp";

export const weatherCodeToIcon = (code) => {
  if ([0, 1].includes(code)) {
    return sunny;
  } else if ([2].includes(code)) {
    return partlyCloudy;
  } else if ([3].includes(code)) {
    return overcast;
  } else if ([45, 48].includes(code)) {
    return fog;
  } else if ([51, 53, 55, 56, 57].includes(code)) {
    return drizzle;
  } else if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) {
    return rain;
  } else if ([71, 73, 75, 77, 85, 86].includes(code)) {
    return snow;
  } else if ([95, 96, 99]) {
    return storm;
  } else {
    return sunny;
  }
};
