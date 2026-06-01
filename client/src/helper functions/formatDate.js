export const formatFullDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    year: "numeric",
    day: "numeric",
  });
};

export const getWeekDayShort = (date) => {
  return new Date(date).toLocaleDateString("en-US", { weekday: "short" });
};

export const getWeekDayLong = (date) => {
  return new Date(date).toLocaleDateString("en-US", { weekday: "long" });
};

export const getHour = (date) => {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: "true",
  });
};
