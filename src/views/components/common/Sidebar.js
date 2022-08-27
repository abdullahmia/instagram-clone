import { Link } from "react-router-dom";
import getUser from "../../../helper/user";
import { useSuggestionUsersQuery } from "../../../redux/services/userService";
import SuggestedProfile from "../common/SuggestedProfile";
import SdiebarProfile from "./SdiebarProfile";

const Sidebar = () => {
  const { data: suggestedUsers } = useSuggestionUsersQuery();
  const userData = getUser();

  // users filter if user is not login user
  const filterUsers = (user) => {
    if (user._id !== userData.id) {
      return user;
    }
  };

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
              className="text-[12px] text-[#262626] font-[700] dark:text-gray-400 capitalize"
              to="/suggested"
            >
              see all
            </Link>
          </div>
        </div>
        <div className="px-3">
          {" "}
          {suggestedUsers?.users?.filter(filterUsers).map((user, key) => (
            <SuggestedProfile key={key} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
