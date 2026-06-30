import { useState } from "react";
import Sidebar from "../components/Sidebar";

function CreateReel() {

  const [loading, setLoading] = useState(false);
  const [script, setScript] = useState(null);

  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [platform, setPlatform] = useState("Instagram Reel");

  const handleGenerate = async (e) => {

    e.preventDefault();
    setLoading(true);

    try {

      const topic = `${productName} ${description} for ${platform}`;

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/generate-reel?topic=${topic}`,
        {
          method: "POST"
        }
      );

      const data = await response.json();

      setScript({
        hook: data.hook,
        script: data.script,
        caption: data.caption,
        hashtags: data.hashtags
      });

    } catch (error) {
      console.error("Error generating reel:", error);
    }

    setLoading(false);
  };

  return (

    <div className="flex min-h-screen bg-[#F4EBD3]">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10">

        <h1 className="text-3xl font-bold text-[#555879] mb-10">
          Create Reel
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT SIDE FORM */}

          <div className="bg-white p-8 rounded-xl shadow">

            <h2 className="text-xl font-semibold mb-6">
              Reel Details
            </h2>

            <form onSubmit={handleGenerate} className="space-y-4">

              <input
                type="text"
                placeholder="Product Name"
                className="w-full p-3 border rounded-lg"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />

              <textarea
                placeholder="Describe your product"
                className="w-full p-3 border rounded-lg"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />

              <select
                className="w-full p-3 border rounded-lg"
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
              >

                <option>Instagram Reel</option>
                <option>YouTube Shorts</option>
                <option>TikTok</option>

              </select>

              <button
                className="w-full bg-[#98A1BC] text-white py-3 rounded-lg hover:bg-[#7f88a5]"
              >
                {loading ? "Generating..." : "Generate Reel Script"}
              </button>

            </form>

          </div>

          {/* RIGHT SIDE OUTPUT */}

          <div className="bg-white p-8 rounded-xl shadow">

            <h2 className="text-xl font-semibold mb-6">
              AI Generated Reel
            </h2>

            {!script && (
              <p className="text-gray-500">
                AI generated reel script will appear here.
              </p>
            )}

            {script && (

              <div className="space-y-6">

                <div>
                  <h3 className="font-semibold text-[#555879]">
                    Hook
                  </h3>
                  <p>{script.hook}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#555879]">
                    Reel Script
                  </h3>
                  <pre className="whitespace-pre-wrap">
                    {script.script}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-[#555879]">
                    Caption
                  </h3>
                  <p>{script.caption}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#555879]">
                    Hashtags
                  </h3>
                  <p>{script.hashtags}</p>
                </div>

              </div>

            )}

          </div>

        </div>

      </div>

    </div>

  );
}

export default CreateReel;