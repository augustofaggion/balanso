import React from 'react';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 px-4 sm:px-6 lg:px-8 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-4">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex justify-center items-center bg-blue-600 rounded-lg w-10 h-10">
                <span className="font-bold text-white text-xl">B</span>
              </div>
              <span className="font-bold text-2xl">Balanso</span>
            </div>
            <p className="mb-4 max-w-md text-gray-400">
              Take control of your finances with our simple, free, and privacy-focused budget tracking app. No ads, no tracking, just pure financial freedom.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/balanso"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://twitter.com/balanso"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="mailto:hello@balanso.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#install" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Install
                </Link>
              </li>
              <li>
                <Link href="/tracker" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Try Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-white transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="mailto:support@balanso.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-gray-800 border-t">
          <div className="flex sm:flex-row flex-col justify-between items-center">
            <p className="mb-4 sm:mb-0 text-gray-400 text-sm">
              © {new Date().getFullYear()} Balanso. All rights reserved.
            </p>
            <p className="flex items-center text-gray-400 text-sm">
              Made with <FaHeart className="mx-1 text-red-500" size={12} /> for better financial health
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;