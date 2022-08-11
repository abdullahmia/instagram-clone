import React from "react";
import { Link } from "react-router-dom";

const SuggestedProfile = () => {
  return (
    <div className="flex items-center justify-between py-1">
      <div className="flex gap-3">
        <div>
          <img
            src="https://picsum.photos/200"
            alt=""
            className="w-[32px] h-[32px] rounded-full"
          />
        </div>
        <div>
          <Link
            to={"/abirislam"}
            className="text-[14px] text-[#262626] dark:text-gray-400 font-[700]"
          >
            riazuddin10
          </Link>
          <h3 className="text-[12px] text-[#8e8e8e] font-[400]">
            New to Instagram
          </h3>
        </div>
      </div>
      <div>
        <button className="text-[12px] font-[700] text-[#0095f6] capitalize">
          follow
        </button>
      </div>
    </div>
  );
};

export default SuggestedProfile;
