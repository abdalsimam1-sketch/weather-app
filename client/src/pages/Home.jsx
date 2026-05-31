import logo from "../assets/images/logo.svg";
import { Units } from "../components/Units";
import { useUnit } from "../hooks/useUnit";

export const Home = () => {
  const { unitOpen, toggleUnits, unit, switchUnits } = useUnit();
  return (
    <div className="home-page">
      <main className="container pt-5">
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
      </main>
    </div>
  );
};
