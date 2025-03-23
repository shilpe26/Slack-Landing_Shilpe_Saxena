import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const ChatBubble = () => {
  const [isVisible, setIsVisible] = useState(true);
  return isVisible ? (
    <div className="fixed bottom-4 left-3.5 md:right-6 flex items-end space-x-2">
      <div className="relative bg-white shadow-lg p-3 rounded-lg text-sm border border-gray-200">
        <button
          className="absolute -top-2 -left-2 bg-gray-400 p-1 rounded-full text-white cursor-pointer"
          onClick={() => setIsVisible(false)}
        >
          <RxCross1 size={6} strokeWidth={1.5} />
        </button>
        <p>Hey there 👋 Want to know something cool?</p>
      </div>

      <button className="bg-[#622166] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
        👏
      </button>
    </div>
  ) : null;
};
export default ChatBubble;
