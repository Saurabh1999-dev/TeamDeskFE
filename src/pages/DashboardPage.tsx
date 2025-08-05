import KPISection from "../components/KPISection";

const DashboardPage = () => {
  return (
    <>
      <KPISection />

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">My Account</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Settings
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-600">Username</label>
            <input
              className="w-full border rounded px-3 py-2 mt-1"
              value="lucky.jesse"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Email Address</label>
            <input
              className="w-full border rounded px-3 py-2 mt-1"
              value="jesse@example.com"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">First Name</label>
            <input
              className="w-full border rounded px-3 py-2 mt-1"
              value="Lucky"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Last Name</label>
            <input
              className="w-full border rounded px-3 py-2 mt-1"
              value="Jesse"
              readOnly
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
