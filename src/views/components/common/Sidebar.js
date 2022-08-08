import { Link } from "react-router-dom";
import SdiebarProfile from "./SdiebarProfile";
import SuggestedProfile from "./SuggestedProfile";

const Sidebar = () => {
  return (
    <div className="bg-transparent">
      <SdiebarProfile />

      {/* Suggested Profiles */}
      <div>
        <div className="flex items-center justify-between py-2">
          <div>
            <h2 className="text-[14px] text-[#8e8e8e] font-[700] capitalize">
              Suggestions For You
            </h2>
          </div>
          <div>
            <Link
              className="text-[12px] text-[#262626] font-[700] capitalize"
              to="/suggested"
            >
              see all
            </Link>
          </div>
        </div>
        <div className="px-3">
          <SuggestedProfile />
          <SuggestedProfile />
          <SuggestedProfile />
          <SuggestedProfile />
          <SuggestedProfile />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
