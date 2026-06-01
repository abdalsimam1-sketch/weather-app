import { useState } from "react";

export const useUnit = () => {
  const [unit, setUnit] = useState("metric");
  const [unitOpen, setUnitOpen] = useState(false);
  const toggleUnits = () => {
    setUnitOpen(unitOpen ? false : true);
  };
  const switchUnits = () => {
    setUnit(unit === "metric" ? "imperial" : "metric");
  };
  return { unit, unitOpen, toggleUnits, switchUnits };
};
