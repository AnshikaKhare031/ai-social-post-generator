import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreatePost from "./pages/CreatePost";
import CreateReel from "./pages/CreateReel";
import History from "./pages/History"; // ✅ NEW

function App() {
  return (
    <div>

      {/* Navbar visible on all pages */}
      <Navbar />

      {/* Routes */}
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Creator Studio */}
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/create-reel" element={<CreateReel />} />

        {/* 🔥 NEW HISTORY ROUTE */}
        <Route path="/history" element={<History />} />

      </Routes>

    </div>
  );
}

export default App;