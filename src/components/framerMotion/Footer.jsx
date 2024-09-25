const Footer = () => {
    return (
      <footer className="bg-zinc-700 text-white py-8">
        {/* Container for Footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* News Channel Logo and Description */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">News Channel</h2>
              <p className="text-gray-400">
                Your trusted source for breaking news, analysis, exclusive interviews, and in-depth reports from across the globe.
              </p>
            </div>
  
            {/* Navigation Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    World News
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Sports
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Entertainment
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Social Media and Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400
                     transition"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook text-2xl"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400  hover:text-purple-400 transition"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter text-2xl"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram text-2xl"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition"
                    aria-label="YouTube"
                  >
                    <i className="fab fa-youtube text-2xl"></i>
                  </a>
                </li>
              </ul>
  
              <div className="mt-4">
                <h4 className="text-lg font-semibold">Contact Us</h4>
                <p className="text-gray-400 mt-1">Email: girisanjib191s@gmail.com</p>
                <p className="text-gray-400 mt-1 ">Phone: 9898989898</p>
              </div>
            </div>
          </div>
  
          {/* Copyright Section */}
          <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
            &copy; {new Date().getFullYear()} IXSN News. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  