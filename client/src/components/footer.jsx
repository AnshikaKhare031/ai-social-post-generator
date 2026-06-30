function Footer() {
  return (
    <footer className="bg-[#555879] text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="font-bold text-lg">Udaan AI</h2>
          <p className="text-sm mt-2 text-gray-200">
            AI powered platform to create viral social media content.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Product</h3>
          <ul className="text-sm space-y-1 text-gray-200">
            <li>Caption Generator</li>
            <li>Hook Generator</li>
            <li>Reel Script Generator</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="text-sm space-y-1 text-gray-200">
            <li>About</li>
            <li>Contact</li>
            <li>Privacy</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-sm pb-6 text-gray-300">
        © 2026 Udaan AI. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;