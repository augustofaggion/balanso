"use client";
import React, { useState } from "react";
import {
  FaApple,
  FaAndroid,
  FaShare,
  FaPlus,
  FaHome,
  FaDownload,
} from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";

const InstallSection: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<"ios" | "android">(
    "ios"
  );

  const iosSteps = [
    {
      icon: <FaShare className="text-blue-600 text-2xl" />,
      title: "Open Safari & Tap Share",
      description:
        "Go to balanso.com in Safari browser and tap the share button at the bottom of your screen.",
      tip: "The share button looks like a square with an arrow pointing up!",
    },
    {
      icon: <FaPlus className="text-green-600 text-2xl" />,
      title: "Find 'Add to Home Screen'",
      description:
        "Scroll down in the share menu and tap 'Add to Home Screen'.",
      tip: "Look for the plus (+) icon next to the text!",
    },
    {
      icon: <IoPhonePortraitOutline className="text-purple-600 text-2xl" />,
      title: "Give it a Name",
      description:
        "You can change the app name or keep 'Balanso', then tap 'Add'.",
      tip: "You can call it whatever you want - maybe 'My Money App'!",
    },
    {
      icon: <FaHome className="text-orange-600 text-2xl" />,
      title: "Find Your New App",
      description:
        "Look for the Balanso app icon on your home screen and tap it to open!",
      tip: "It works just like any other app now!",
    },
  ];

  const androidSteps = [
    {
      icon: <FaDownload className="text-blue-600 text-2xl" />,
      title: "Open Chrome Browser",
      description:
        "Go to balanso.com using Chrome browser on your Android phone.",
      tip: "Make sure you're using Chrome - it works best!",
    },
    {
      icon: <FaPlus className="text-green-600 text-2xl" />,
      title: "Look for 'Add to Home Screen'",
      description:
        "You'll see a popup asking to 'Add to Home Screen' or check the menu (3 dots) and tap 'Add to Home Screen'.",
      tip: "If you don't see it, tap the 3 dots at the top right!",
    },
    {
      icon: <IoPhonePortraitOutline className="text-purple-600 text-2xl" />,
      title: "Confirm Installation",
      description:
        "Tap 'Add' when asked if you want to add Balanso to your home screen.",
      tip: "You can change the name before adding it!",
    },
    {
      icon: <FaHome className="text-orange-600 text-2xl" />,
      title: "Open Your New App",
      description:
        "Find the Balanso icon on your home screen and tap it - it works like a real app!",
      tip: "You can move it around your home screen just like other apps!",
    },
  ];

  const currentSteps = selectedPlatform === "ios" ? iosSteps : androidSteps;

  return (
    <section id="install" className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-gray-900 text-3xl sm:text-4xl">
            Install Balanso on Your Phone
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600 text-lg">
            It&apos;s super easy! Just follow these simple steps to get Balanso on
            your phone like a real app.
          </p>

          {/* Platform Selector */}
          <div className="flex justify-center">
            <div className="flex bg-white shadow-md p-1 rounded-full">
              <button
                onClick={() => setSelectedPlatform("ios")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedPlatform === "ios"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <FaApple className="text-xl" />
                iPhone (iOS)
              </button>
              <button
                onClick={() => setSelectedPlatform("android")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedPlatform === "android"
                    ? "bg-green-600 text-white shadow-md"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                <FaAndroid className="text-xl" />
                Android
              </button>
            </div>
          </div>
        </div>

        {/* Installation Steps */}
        <div className="space-y-6">
          {currentSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white shadow-sm p-6 border border-gray-100 rounded-xl hover:scale-[1.02] transition-transform duration-200"
            >
              <div className="flex items-start gap-4">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="flex justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-12 h-12 font-bold text-white text-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex justify-center items-center bg-gray-50 rounded-lg w-10 h-10">
                      {step.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Reminder */}
        <div className="gap-4 grid grid-cols-1 md:grid-cols-3 mt-8">
          <div className="p-4 text-center">
            <div className="mb-2 text-2xl">⚡</div>
            <p className="text-gray-600 text-sm">Works offline</p>
          </div>
          <div className="p-4 text-center">
            <div className="mb-2 text-2xl">📱</div>
            <p className="text-gray-600 text-sm">Feels like a real app</p>
          </div>
          <div className="p-4 text-center">
            <div className="mb-2 text-2xl">🔒</div>
            <p className="text-gray-600 text-sm">Safe and secure</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallSection;
