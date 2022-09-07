import { BiCamera } from "react-icons/bi";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <>
      {posts?.length === 0 ? (
        <div className="flex justify-center items-center py-16">
          <div className="flex flex-col justify-center items-center">
            <BiCamera className="border border-black rounded-full w-16 h-16 p-3 dark:text-gray-200 dark:border-gray-500" />
            <h3 className="text-[28px] text-[#262626] font-[300] dark:text-gray-300">
              No Posts Yet
            </h3>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 lg:gap-5 gap-1">
          {posts?.map((post, key) => (
            <Post key={key} post={post} />
          ))}
        </div>
      )}
    </>
  );
};

export default Posts;
