import React from "react";
import { Link } from "react-router-dom";
import getUser from "../../../helper/user";
// prettier-ignore
import {
  useFollowMutation,
  useUnfollowMutation
} from "../../../redux/services/userService";
import Image from "./Image";

const SuggestedProfile = ({ user }) => {
  let image = user?.image ? user?.image : "user_cowfsl";
  let currentUser = getUser();

  // follow user
  const [follow] = useFollowMutation();
  const followHandler = async () => {
    console.log(user._id);
    await follow(user?._id).then((res) => {
      console.log(res);
    });
  };

  // unfollow a user
  const [unfollow] = useUnfollowMutation();
  const unfollowHandler = async () => {
    console.log(user._id);
    await unfollow(user?._id).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className="flex items-center justify-between py-1">
      <div className="flex gap-3">
        <div>
          {/* <img
            src="https://picsum.photos/200"
            alt=""
            className="w-[32px] h-[32px] rounded-full"
          /> */}
          <Image src={image} classname="w-[32px] h-[32px] rounded-full" />
        </div>
        <div>
          <Link
            to={"/abirislam"}
            className="text-[14px] text-[#262626] dark:text-gray-400 font-[700]"
          >
            {user?.username}
          </Link>
          <h3 className="text-[12px] text-[#8e8e8e] font-[400]">
            {user?.fullName}
          </h3>
        </div>
      </div>
      <div>
        {user?.followers.includes(currentUser.id) ? (
          <button
            onClick={unfollowHandler}
            className="text-[12px] font-[700] text-[#0095f6] capitalize"
          >
            unfollow
          </button>
        ) : (
          <button
            onClick={followHandler}
            className="text-[12px] font-[700] text-[#0095f6] capitalize"
          >
            follow
          </button>
        )}
      </div>
    </div>
  );
};

export default SuggestedProfile;
