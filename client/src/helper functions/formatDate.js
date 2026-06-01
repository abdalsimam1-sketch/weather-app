export const formatFullDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    year: "numeric",
    day: "numeric",
  });
};

export const getWeekDay = (date) => {
  return new Date(date).toLocaleDateString("en-US", { weekday: "short" });
};
