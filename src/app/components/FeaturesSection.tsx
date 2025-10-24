import React from "react";
import { FaWallet, FaChartLine, FaHistory } from "react-icons/fa";

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-gray-900 text-3xl sm:text-4xl">
            Everything You Need to Manage Your Money
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 text-lg">
            Simple, powerful tools to help you take control of your finances and
            reach your goals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
          {/* Feature 1: Expense Budget */}
          <div className="bg-white shadow-lg hover:shadow-xl p-8 border border-gray-100 rounded-2xl transition-shadow duration-300">
            <div className="flex justify-center items-center bg-blue-100 mb-6 rounded-xl w-16 h-16">
              <FaWallet className="text-blue-600 text-2xl" />
            </div>
            <h3 className="mb-4 font-bold text-gray-900 text-xl">
              Budget Tracking
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Set monthly budgets and stay on track with your financial goals.
            </p>
          </div>

          {/* Feature 2: Full Track */}
          <div className="bg-white shadow-lg hover:shadow-xl p-8 border border-gray-100 rounded-2xl transition-shadow duration-300">
            <div className="flex justify-center items-center bg-green-100 mb-6 rounded-xl w-16 h-16">
              <FaChartLine className="text-green-600 text-2xl" />
            </div>
            <h3 className="mb-4 font-bold text-gray-900 text-xl">
                Expense Tracking
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Track every purchase you make.
              Get comprehensive insights into your spending patterns and habits.
            </p>
          </div>

          {/* Feature 3: History Check */}
          <div className="bg-white shadow-lg hover:shadow-xl p-8 border border-gray-100 rounded-2xl transition-shadow duration-300">
            <div className="flex justify-center items-center bg-purple-100 mb-6 rounded-xl w-16 h-16">
              <FaHistory className="text-purple-600 text-2xl" />
            </div>
            <h3 className="mb-4 font-bold text-gray-900 text-xl">
              Transaction History
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Access your complete spending history. Review past transactions and analyze your
              financial trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
