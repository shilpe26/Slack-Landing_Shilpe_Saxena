import { useState } from "react";
import React from "react";
import { RxCross1 } from "react-icons/rx";
const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative top-4 left-1/2 transform -translate-x-1/2 w-full md:h-[70px] bg-[#00639f] text-white text-sm md:text-base px-6 py-3 rounded-full flex items-center justify-between shadow-lg">
      <p className="flex-1 text-center">
        Slack is your digital HQ. Meet the new features keeping teams connected
        in a work-from-anywhere world.{" "}
        <a href="#" className="font-bold underline hover:no-underline">
          Let’s go →
        </a>
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="text-white hover:opacity-70 transition"
      >
        <RxCross1 />
      </button>
    </div>
  );
};

export default NotificationBanner;
