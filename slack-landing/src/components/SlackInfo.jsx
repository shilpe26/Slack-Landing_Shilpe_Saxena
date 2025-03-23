import React from "react";
import { FaThumbsUp } from "react-icons/fa6";
import { GiPartyPopper } from "react-icons/gi";
import { BsLightbulbFill } from "react-icons/bs";

const SlackInfo = () => {
  return (
    <div className="flex items-center justify-center w-full bg-beige-100">
      <div className="w-full max-w-[500px] bg-[#3F0E40] rounded-lg shadow-lg overflow-hidden">
        <div className="flex">
          <div className="w-1/3 bg-[#3F0E40] p-4 text-white">
            <h3 className="text-sm font-semibold">Channels</h3>
            <div className="mt-2">
              <div className="bg-[#1164A3] p-2 rounded-md text-sm">
                # project-unicorn
              </div>
            </div>
          </div>

          <div className="w-2/3 bg-white p-4 relative">
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="font-bold text-lg"># project-unicorn</h2>
              <div className="flex -space-x-2">
                <img
                  src="https://i.pravatar.cc/32?img=1"
                  className="w-6 h-6 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/32?img=2"
                  className="w-6 h-6 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/32?img=3"
                  className="w-6 h-6 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/32?img=4"
                  className="w-6 h-6 rounded-full border-2 border-white"
                />
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-start gap-3">
                <img
                  src="https://i.pravatar.cc/40?img=5"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="font-bold text-sm">Zoe Maxwell</p>
                  <p className="text-sm">Are we ready for launch?</p>
                </div>
              </div>

              <div className="flex items-start gap-3 mt-3">
                <img
                  src="https://i.pravatar.cc/40?img=6"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="font-bold text-sm">Matt Brewer</p>
                  <p className="text-sm">Here's the run of show:</p>
                  <div className="bg-gray-100 p-2 rounded-md mt-1 text-sm flex items-center gap-2">
                    📎 <span className="text-gray-500">Attachment</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-8 right-0 flex flex-col gap-2">
              <div className="flex items-center bg-white px-2 py-1 rounded-full shadow-md">
                <FaThumbsUp size={14} className="text-yellow-500" />{" "}
                <span className="ml-1 text-xs font-semibold">3</span>
              </div>
              <div className="flex items-center bg-white px-2 py-1 rounded-full shadow-md">
                <BsLightbulbFill size={14} className="text-yellow-500" />{" "}
                <span className="ml-1 text-xs font-semibold">8</span>
              </div>
              <div className="flex items-center bg-white px-2 py-1 rounded-full shadow-md">
                <GiPartyPopper size={14} className="text-yellow-500" />{" "}
                <span className="ml-1 text-xs font-semibold">5</span>
              </div>
            </div>

            <div className="absolute bottom-6 right-4 flex items-center bg-white px-2 py-1 rounded-full shadow-md">
              ✨ <span className="ml-1 text-xs font-semibold">5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlackInfo;
