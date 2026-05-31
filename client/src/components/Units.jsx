import { unitData } from "../data/unitData";

export const Units = ({ unit, switchUnits }) => {
  return (
    <div className="units-dropdown d-flex gap-3 flex-column position-absolute text-nowrap p-4 rounded">
      <span className="cursor-pointer" onClick={switchUnits}>
        {unit === "metric" ? <>Switch to imperial</> : <>Switch to metric</>}
      </span>

      {unitData.map((item) => (
        <div key={item.label}>
          <span className="section-heading">{item.label}</span>
          <div
            className={`rounded p-1 ${unit === "metric" ? "active-unit" : ""} d-flex justify-content-between`}
          >
            <span className="">{item.metric}</span>
            {unit === "metric" && <i className="bi bi-check"></i>}
          </div>
          <div
            className={`rounded p-1 ${unit === "imperial" ? "active-unit" : ""}  d-flex justify-content-between`}
          >
            <span>{item.imperial}</span>{" "}
            {unit === "imperial" && <i className="bi bi-check"></i>}
          </div>
        </div>
      ))}
    </div>
  );
};
