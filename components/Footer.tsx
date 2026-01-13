import Link from 'next/link';
import { Scissors, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 border-t border-blue-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-blue-800" />
              <span className="text-2xl font-bold text-blue-800">
                BLUE<span className="text-gray-300">DIAMOND</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Premium grooming experience for the modern gentleman. Style, sophistication, and precision in every cut.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-800 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-800 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-800 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-800 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-800 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-800 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-blue-800 transition-colors">
                  Style
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-800 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

         

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-800 mt-0.5 flex-shrink-0" />
                <span className="text-sm">No.4/101 ECR Road, Thanthai Periyar Street, Neelangarai, Chennai -600115, Tamilnadu</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-800 flex-shrink-0" />
                <span className="text-sm">+91 8668054693</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-800 flex-shrink-0" />
                <span className="text-sm">bluediamondsalonspa@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Naveen . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
