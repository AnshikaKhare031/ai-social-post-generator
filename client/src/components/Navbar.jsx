import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#555879] text-white px-8 py-4 flex justify-between items-center shadow-md">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#98A1BC] rounded-full flex items-center justify-center font-bold">
          U
        </div>
        <span className="text-xl font-bold">Udaan AI</span>
      </Link>

      {/* Navigation */}
      <div className="flex items-center gap-6 text-sm font-medium">

        <Link to="/" className="hover:text-[#F59E0B] transition">
          Home
        </Link>

        <a href="#features" className="hover:text-[#F59E0B] transition">
          Features
        </a>

        <a href="#how-it-works" className="hover:text-[#F59E0B] transition">
          How it Works
        </a>

        <Link to="/dashboard" className="hover:text-[#F59E0B] transition">
          Dashboard
        </Link>

        <Link
          to="/login"
          className="px-4 py-2 border border-white rounded-lg hover:bg-[#DED3C4] hover:text-[#555879] transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-[#98A1BC] px-4 py-2 rounded-lg hover:bg-[#F59E0B] transition"
        >
          Get Started
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;