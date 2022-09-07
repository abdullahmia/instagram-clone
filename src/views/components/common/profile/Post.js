import { FiHeart, FiMessageCircle } from "react-icons/fi";
import Image from "../Image";

const Post = ({ post }) => {
  return (
    <div className="group relative">
      <Image src={post?.image} classname="w-full h-64 object-cover" />
      <div className="absolute top-0 w-full h-full bg-[#00000052] opacity-0 fd-sh group-hover:opacity-100">
        <div className="flex items-center justify-center h-full">
          <div className="flex items-center text-2xl gap-7 text-white">
            <span className="flex items-center gap-2 font-normal">
              {post?.likes?.length}
              <FiHeart />
            </span>
            <span className="flex items-center gap-2 font-normal">
              {post?.comments?.length}
              <FiMessageCircle />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
