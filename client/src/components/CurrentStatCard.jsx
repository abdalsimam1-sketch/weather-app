export const CurrentStatCard = ({ label, value, unit }) => {
  return (
    <div className="d-flex flex-column gap-3 p-3 current-stat-card rounded">
      <span>{label}</span>
      <span>
        <>{value}</>
        <>{unit}</>
      </span>
    </div>
  );
};
