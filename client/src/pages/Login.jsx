import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { login as loginApi } from "../services/authService";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await loginApi(email, password);
      login(data.access_token, data.user);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4EBD3] flex items-center justify-center px-6">

      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg grid md:grid-cols-2 overflow-hidden">

        {/* LEFT SIDE - Illustration Section */}
        <div className="bg-[#555879] text-white p-10 flex flex-col justify-center">

          <h2 className="text-3xl font-bold mb-4">
            Welcome Back 👋
          </h2>

          <p className="text-gray-200 mb-6">
            Login to continue creating viral social media content with AI.
          </p>

          <ul className="space-y-3 text-sm text-gray-200">
            <li>✔ AI Caption Generator</li>
            <li>✔ Viral Hook Generator</li>
            <li>✔ Reel Script Generator</li>
            <li>✔ Engagement Analytics</li>
          </ul>

        </div>

        {/* RIGHT SIDE - Login Form */}
        <div className="p-10">

          <h2 className="text-2xl font-bold text-[#555879] mb-6">
            Login to Udaan AI
          </h2>

          {error && (
            <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>

            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                id="login-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full mt-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98A1BC]"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                id="login-password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full mt-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98A1BC]"
              />
            </div>

            <button
              id="login-submit"
              type="submit"
              disabled={loading}
              className="w-full bg-[#98A1BC] text-white py-3 rounded-lg hover:bg-[#555879] transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in…" : "Login"}
            </button>

          </form>

          {/* Signup Link */}
          <p className="text-sm text-gray-600 mt-6 text-center">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-[#555879] font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;