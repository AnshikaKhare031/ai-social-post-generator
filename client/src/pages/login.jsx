import { Link } from "react-router-dom";

function Login() {
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

          <form className="space-y-4">

            <div>
              <label className="text-sm text-gray-600">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98A1BC]"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98A1BC]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#98A1BC] text-white py-3 rounded-lg hover:bg-[#555879] transition"
            >
              Login
            </button>

          </form>

          {/* Signup Link */}
          <p className="text-sm text-gray-600 mt-6 text-center">
            Don’t have an account?{" "}
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