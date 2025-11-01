"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is Balanso completely free?",
      answer:
        "Yes! Balanso is 100% free to use. No hidden fees, no premium subscriptions, no ads. Just pure budget tracking goodness.",
    },
    {
      question: "Do I need to create an account or login?",
      answer:
        "Nope! No registration required. Just install the app and start tracking your expenses right away. Your privacy is important to us.",
    },
    {
      question: "Does it work without internet?",
      answer:
        "Absolutely! After the first download, Balanso works completely offline. Track your expenses anywhere, anytime - no internet needed.",
    },
    {
      question: "Is my financial data safe?",
      answer:
        "Your data stays on YOUR device only. We don't collect, store, or share any of your financial information. It's 100% private and secure.",
    },
    {
      question: "What devices does it work on?",
      answer:
        "Balanso works on any smartphone or tablet with a web browser - iPhone, Android, iPad, you name it! Just install it like any other app.",
    },
    {
      question: "How much storage does it use?",
      answer:
        "Very little! Balanso is lightweight and uses minimal storage space on your device. Perfect for phones with limited storage.",
    },
    {
      question: "Does it track my location or personal info?",
      answer:
        "Never! We don't track your location, contacts, or any personal information. Balanso only focuses on helping you manage your money.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-gray-900 text-3xl sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 text-lg">
            Got questions? We&apos;ve got answers! Here&apos;s everything you
            need to know about Balanso.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center hover:bg-gray-100 px-6 py-5 w-full text-left transition-colors duration-200"
              >
                <h3 className="pr-4 font-semibold text-gray-900 text-lg">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <FaChevronUp className="text-blue-600 text-lg" />
                  ) : (
                    <FaChevronDown className="text-gray-400 text-lg" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="pt-4 border-gray-200 border-t">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Email */}
        <div className="mt-12 text-center">
          <h3 className="mb-4 font-bold text-gray-900 text-2xl">
            Still have questions? Contact us!
          </h3>
          <a
            href="mailto:team.augudo@outlook.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Email us at team.augudo@outlook.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
