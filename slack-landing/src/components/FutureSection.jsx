import React from "react";

const FutureSection = () => {
  return (
    <div className="bg-[#F9F1EB] py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
        <div className="relative">
          <img
            src="/footer-img.png"
            alt="Future concept"
            className="rounded-lg shadow-lg w-full"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <button className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition">
              ▶
            </button>
          </div>
        </div>

        <div className="text-left">
          <h2 className="text-3xl font-semibold text-gray-900">
            Now is your moment to build a better tomorrow
          </h2>
          <p className="text-gray-600 mt-4">
            We've seen what the future can be. Now it's time to decide what it
            will be.
          </p>
          <button className="mt-6 px-6 py-3 border border-[#622166] text-[#622166] rounded-lg hover:bg-[#704971] hover:text-white transition">
            WATCH VIDEO
          </button>
        </div>
      </div>
    </div>
  );
};

export default FutureSection;
