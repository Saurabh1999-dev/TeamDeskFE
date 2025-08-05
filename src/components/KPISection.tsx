const kpis = [
  { label: "TRAFFIC", value: "350,897", change: "+3.48%", positive: true },
  { label: "NEW USERS", value: "2,356", change: "-3.48%", positive: false },
  { label: "SALES", value: "924", change: "-1.10%", positive: false },
  { label: "PERFORMANCE", value: "49.65%", change: "+12%", positive: true },
];

const KPISection = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
    {kpis.map(({ label, value, change, positive }) => (
      <div key={label} className="bg-white p-4 rounded-lg shadow-md">
        <h4 className="text-xs text-gray-500 font-medium mb-1">{label}</h4>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
        <p
          className={`text-sm mt-1 ${
            positive ? "text-green-500" : "text-red-500"
          }`}
        >
          {change} <span className="text-gray-400 text-xs">Since last period</span>
        </p>
      </div>
    ))}
  </div>
);

export default KPISection;
