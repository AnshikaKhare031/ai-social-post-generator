import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen bg-[#F4EBD3] flex items-center justify-center px-6">

      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg grid md:grid-cols-2 overflow-hidden">

        {/* LEFT SIDE */}

        <div className="bg-[#555879] text-white p-10 flex flex-col justify-center">

          <h2 className="text-3xl font-bold mb-4">
            Start Your Growth Journey 🚀
          </h2>

          <p className="text-gray-200 mb-6">
            Join Udaan AI and start creating high engagement
            social media content with the power of AI.
          </p>

          <ul className="space-y-3 text-sm text-gray-200">
            <li>✔ AI Caption Generator</li>
            <li>✔ Viral Hook Generator</li>
            <li>✔ Trending Reel Ideas</li>
            <li>✔ Social Media Analytics</li>
          </ul>

        </div>

        {/* RIGHT SIDE */}

        <div className="p-10">

          <h2 className="text-2xl font-bold text-[#555879] mb-6">
            Create Your Account
          </h2>

          <form className="space-y-4">

            <div>
              <label className="text-sm text-gray-600">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98A1BC]"
              />
            </div>

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
                placeholder="Create a password"
                className="w-full mt-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98A1BC]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#98A1BC] text-white py-3 rounded-lg hover:bg-[#555879] transition"
            >
              Create Account
            </button>

          </form>

          {/* Login link */}

          <p className="text-sm text-gray-600 mt-6 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#555879] font-medium hover:underline"
            >
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;
