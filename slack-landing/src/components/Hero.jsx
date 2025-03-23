import React from "react";
import SlackInfo from "./SlackInfo";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <section className="flex flex-col justify-start text-left py-12">
        <h1 className="text-6xl font-bold leading-[65px]">
          Slack is where the future works
        </h1>
        <p className="mt-4 text-lg">
          Transform the way you work with one place for everyone and everything
          you need to get stuff done.
        </p>
        <div className="mt-6 flex items-center">
          <button className="px-6 py-[7px] md:py-3 bg-[#622166] text-white rounded uppercase text-xs md:text-base">
            Try for Free
          </button>
          <button className="md:pr-6 p-1 border rounded ml-2 uppercase bg-[#2c86ef] text-white">
            <span className="flex items-center gap-2 text-xs md:text-base">
              <img
                src="/google-icon.png"
                alt="Google"
                className="h-[38px] bg-white p-1"
              />
              Sign up with Google
            </span>
          </button>
        </div>
      </section>

      <SlackInfo />
    </div>
  );
};
export default Hero;
