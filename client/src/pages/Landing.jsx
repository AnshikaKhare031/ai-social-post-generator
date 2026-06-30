import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Landing() {
  return (
    <div className="bg-[#F4EBD3] min-h-screen">

      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-6 py-24 text-center">

        <h1 className="text-5xl font-bold text-[#555879] leading-tight">
          Create Viral Social Media Content with AI
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
          Udaan AI helps businesses instantly create ready-to-post
          social media content optimized for maximum engagement.
        </p>

      </section>


      {/* FEATURES SECTION */}

      <section id="features" className="max-w-6xl mx-auto px-6 pb-24">

        <h2 className="text-3xl font-bold text-[#555879] text-center mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* CREATE POST */}

          <Link to="/create-post">

            <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer text-center">

              <h2 className="text-2xl font-bold text-[#555879] mb-4">
                Create Post
              </h2>

              <p className="text-gray-600">
                Generate a complete ready-to-post social media post
                with captions, hooks and hashtags optimized for engagement.
              </p>

              <div className="mt-6">

                <button className="bg-[#98A1BC] text-white px-6 py-3 rounded-lg hover:bg-[#555879] transition">
                  Start Creating
                </button>

              </div>

            </div>

          </Link>


          {/* CREATE REEL */}

          <Link to="/create-reel">

            <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer text-center">

              <h2 className="text-2xl font-bold text-[#555879] mb-4">
                Create Reel
              </h2>

              <p className="text-gray-600">
                Generate viral reel ideas and scripts, then upload your
                reel to automatically add captions and hooks.
              </p>

              <div className="mt-6">

                <button className="bg-[#98A1BC] text-white px-6 py-3 rounded-lg hover:bg-[#555879] transition">
                  Create Reel
                </button>

              </div>

            </div>

          </Link>

        </div>

      </section>


      {/* HOW IT WORKS */}

      <section id="how-it-works" className="bg-[#DED3C4] py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#555879] mb-12">
            How Udaan AI Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow">

              <h3 className="font-semibold text-[#555879] mb-2">
                1. Enter Details
              </h3>

              <p className="text-gray-600">
                Tell us about your product and platform.
              </p>

            </div>

            <div className="bg-white p-6 rounded-xl shadow">

              <h3 className="font-semibold text-[#555879] mb-2">
                2. AI Generates Content
              </h3>

              <p className="text-gray-600">
                AI creates captions, hooks and hashtags automatically.
              </p>

            </div>

            <div className="bg-white p-6 rounded-xl shadow">

              <h3 className="font-semibold text-[#555879] mb-2">
                3. Ready to Post
              </h3>

              <p className="text-gray-600">
                Copy or publish directly to your social media.
              </p>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Landing;