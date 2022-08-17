import { FiHeart, FiMessageCircle } from "react-icons/fi";

const Post = () => {
  return (
    <div className="group relative">
      <img
        src="https://picsum.photos/200"
        alt="post"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 w-full h-full bg-[#00000052] opacity-0 fd-sh group-hover:opacity-100">
        <div className="flex items-center justify-center h-full">
          <div className="flex text-2xl gap-7 text-white">
            <FiHeart />
            <FiMessageCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
