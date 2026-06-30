import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="flex bg-[#F4EBD3] min-h-screen">

      <Sidebar />

      <div className="flex-1 p-10">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-[#555879]">
            Welcome to Udaan AI
          </h1>

          <p className="text-gray-600 mt-2">
            Your AI-powered social media growth assistant.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-500">Total Posts</p>
            <h2 className="text-3xl font-bold text-[#555879] mt-2">
              12
            </h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-500">Engagement</p>
            <h2 className="text-3xl font-bold text-[#F59E0B] mt-2">
              2.3K
            </h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-500">Reach</p>
            <h2 className="text-3xl font-bold text-[#555879] mt-2">
              8.1K
            </h2>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;