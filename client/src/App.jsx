import { Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider, useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreatePost from "./pages/CreatePost";
import CreateReel from "./pages/CreateReel";
import History from "./pages/History";

/** Redirects unauthenticated users to /login */
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

function AppRoutes() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Public */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/create-post" element={<ProtectedRoute><CreatePost /></ProtectedRoute>} />
        <Route path="/create-reel" element={<ProtectedRoute><CreateReel /></ProtectedRoute>} />
        <Route path="/history" element={<ProtectedRoute><History /></ProtectedRoute>} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;