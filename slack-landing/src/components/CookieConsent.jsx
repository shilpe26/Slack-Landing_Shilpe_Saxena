import React from "react";
import { RxCross1 } from "react-icons/rx";

const CookieConsent = () => {
  return (
    <div className="fixed bottom-6 right-6 bg-white shadow-lg pt-6 pb-4 px-4 rounded-lg w-80 border border-gray-200">
      <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
        <RxCross1 size={14} strokeWidth={1.5} />
      </button>

      <p className="text-sm text-gray-700">
        This website uses cookies to enhance user experience and to analyze
        performance and traffic on our website. We also share information about
        your use of our site with our social media, advertising, and analytics
        partners.{" "}
        <a href="#" className="text-blue-600 underline">
          More Info
        </a>
      </p>

      <button className="mt-3 w-full bg-[#622166] text-white py-2 rounded-md font-medium hover:bg-purple-800">
        ACCEPT ALL COOKIES
      </button>
    </div>
  );
};

export default CookieConsent;
