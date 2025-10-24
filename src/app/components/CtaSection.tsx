import React from 'react';
import Link from 'next/link';

const CtaSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-100 to-blue-200 px-4 sm:px-6 lg:px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="items-center gap-12 grid grid-cols-1 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex">
              <span className="bg-white/60 backdrop-blur-sm px-4 py-2 border border-white/20 rounded-full font-medium text-purple-600 text-sm">
                Your Money, Your Control
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="font-bold text-gray-900 text-4xl sm:text-5xl lg:text-6xl leading-tight">
                Keep Your Spending in Check
              </h1>
              
              <p className="max-w-lg text-gray-700 text-lg sm:text-xl">
                Set a goal, track your buys, and stay within budget, all in one tap.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex sm:flex-row flex-col gap-4">
              <Link
                href="/install"
                className="inline-flex justify-center items-center bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-xl px-8 py-4 rounded-full font-semibold text-white text-lg transition-colors duration-200"
              >
                Try it for free
              </Link>
              
              <Link
                href="#learn-more"
                className="inline-flex justify-center items-center bg-white/40 hover:bg-white/60 backdrop-blur-sm px-8 py-4 border border-white/30 rounded-full font-semibold text-purple-700 text-lg transition-colors duration-200"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="bg-black shadow-2xl p-2 rounded-[3rem]">
                <div className="relative bg-white rounded-[2.5rem] w-72 h-[600px] overflow-hidden">
                  {/* Phone Screen Content */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white p-6">
                    {/* Notch */}
                    <div className="top-0 left-1/2 absolute bg-black rounded-b-2xl w-32 h-6 -translate-x-1/2 transform"></div>
                    
                    {/* App Content Placeholder */}
                    <div className="space-y-6 mt-12">
                      <div className="text-center">
                        <div className="flex justify-center items-center bg-blue-600 mx-auto mb-4 rounded-lg w-12 h-12">
                          <span className="font-bold text-white text-xl">B</span>
                        </div>
                        <h3 className="font-bold text-gray-800">Balanso</h3>
                      </div>
                      
                      {/* Sample UI Elements */}
                      <div className="space-y-4">
                        <div className="bg-white shadow-sm p-4 rounded-xl">
                          <div className="bg-gray-200 mb-2 rounded w-3/4 h-4"></div>
                          <div className="bg-gray-100 rounded w-1/2 h-3"></div>
                        </div>
                        <div className="bg-white shadow-sm p-4 rounded-xl">
                          <div className="bg-gray-200 mb-2 rounded w-2/3 h-4"></div>
                          <div className="bg-gray-100 rounded w-3/4 h-3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;