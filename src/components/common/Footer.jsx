import { Link } from 'react-router-dom';  
import { FacebookIcon, TwitterIcon, InstagramIcon } from '../ui/Icons';

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1E] text-[#FAFAFA] py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6">
          <div>
            <h3 className="text-lg font-bold mb-2 md:mb-3">VoyaVillas</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Discover the world's most luxurious villas for your dream vacation.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-2 md:mb-3 text-base">Quick Links</h4>
            <ul className="space-y-1 text-sm md:text-base">
              <li><Link to="/" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">Home</Link></li>
              <li><Link to="/villas" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">Villas</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">Blog</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2 md:mb-3 text-base">Contact</h4>
            <address className="text-gray-400 not-italic text-sm md:text-base leading-relaxed">
              <p>Email: info@luxuryvillas.com</p>
            </address>
          </div>

          <div>
            <h4 className="font-bold mb-2 md:mb-3 text-base">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="https://x.com/" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                <InstagramIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-5 md:mt-6 pt-5 md:pt-6 text-center text-gray-400 text-sm md:text-base">
          <p>&copy; {new Date().getFullYear()} LuxuryVillas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
