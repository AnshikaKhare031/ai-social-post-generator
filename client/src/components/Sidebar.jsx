import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-[#555879] text-white p-6 flex flex-col">

      {/* Logo */}
      <h2 className="text-2xl font-bold mb-10">
        Udaan AI
      </h2>

      {/* Navigation */}
      <nav className="flex flex-col gap-5 text-sm">

        <Link
          to="/dashboard"
          className="hover:text-[#F59E0B] transition"
        >
          Dashboard
        </Link>

        <Link
          to="/create-post"
          className="hover:text-[#F59E0B] transition"
        >
          Create Post
        </Link>

        <Link
          to="/create-reel"
          className="hover:text-[#F59E0B] transition"
        >
          Create Reel
        </Link>

        {/* 🔥 NEW HISTORY LINK */}
        <Link
          to="/history"
          className="hover:text-[#F59E0B] transition"
        >
          History
        </Link>

        <Link
          to="/"
          className="hover:text-[#F59E0B] transition"
        >
          Home
        </Link>

      </nav>

      <div className="flex-grow"></div>

      <p className="text-xs text-gray-300">
        © 2026 Udaan AI
      </p>

    </div>
  );
}

export default Sidebar;