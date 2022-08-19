import { AiOutlineEllipsis } from "react-icons/ai";
import post from "../../../assets/post.jpg";
import Comment from "../../components/common/Comment";
import Header from "../../components/common/Header";
import Posts from "../../components/common/profile/Posts";
import Wrapper from "../../components/custom/Wrapper";

const Post = () => {
  return (
    <Wrapper title={"Post title is goes here..."}>
      <Header />
      <div className="container mx-auto">
        <div className="mt-5 lg:mx-16 flex lg:flex-row flex-col border dark:border-[#2d343b]">
          <div>
            <img
              src={post}
              alt=""
              className="max-h-[700px] object-cover w-full"
            />
          </div>
          <div className="flex-1">
            <div className="p-5 flex justify-between items-center border-b dark:border-[#2d343b]">
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="w-[32px] h-[32px] rounded-full"
                  />
                </div>
                <div>
                  <h2 className="text-[14px] text-[#262626] dark:text-gray-100 font-[600]">
                    abirislam1971
                  </h2>
                </div>
              </div>
              <div>
                <button>
                  <AiOutlineEllipsis className="dark:text-gray-100" />
                </button>
              </div>
            </div>

            <div className="p-5 h-auto">
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="w-[32px] h-[32px] rounded-full ring-2"
                  />
                </div>
                <div className="flex">
                  <h2 className="text-[14px] text-[#262626] dark:text-gray-100 font-[600]">
                    abirislam1971
                  </h2>
                </div>
              </div>
              {/* Caption */}
              <div className="mt-3">
                <p className="text-[14px] text-[#262626] font-[400] dark:text-gray-300">
                  Skills required in different sectors. Skills required in
                  different sectors. Skills required in different sectors.
                </p>
              </div>

              {/* Comments */}
              <div className="w-full h-[300px] overflow-y-scroll mt-4 no-scrollbar">
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
              </div>
            </div>
            {/* likes, comment, share, saves */}
            <div className="border-t px-5 dark:border-[#2d343b]">
              <div>
                <div className="py-2 flex items-center justify-between">
                  <div className="flex gap-3">
                    <button>
                      <svg
                        aria-label="Like"
                        className="_ab6-"
                        color="#8e8e8e"
                        fill="#8e8e8e"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                      </svg>
                    </button>
                    <button>
                      <svg
                        aria-label="Comment"
                        className="_ab6-"
                        color="#262626"
                        fill="#262626"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path
                          d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                          fill="none"
                          stroke="currentColor"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        ></path>
                      </svg>
                    </button>
                    <button>
                      <svg
                        aria-label="Share Post"
                        className="_ab6-"
                        color="#262626"
                        fill="#262626"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <line
                          fill="none"
                          stroke="currentColor"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          x1="22"
                          x2="9.218"
                          y1="3"
                          y2="10.083"
                        ></line>
                        <polygon
                          fill="none"
                          points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                          stroke="currentColor"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        ></polygon>
                      </svg>
                    </button>
                  </div>
                  <div>
                    <button>
                      <svg
                        aria-label="Save"
                        className="_ab6-"
                        color="#262626"
                        fill="#262626"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <polygon
                          fill="none"
                          points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        ></polygon>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-5">
              <h2 className="text-[14px] text-[#262626] font-[700] dark:text-gray-300">
                1,832 likes
              </h2>
              <p className="text-[11px] text-[#8e8e8e] font-[400]">
                3 hours ago
              </p>
            </div>
            <div className="px-3 w-full flex items-center justify-between border-t dark:border-[#2d343b] py-3 mt-3">
              <div className="flex items-center gap-3">
                <button>
                  <svg
                    aria-label="Emoji"
                    className="_ab6-"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
                  </svg>
                </button>
                <input
                  type="text"
                  placeholder="Add a comment"
                  className="text-[14px] text-[#8e8e8e] font-[400] border-none focus:outline-none bg-transparent"
                />
              </div>
              <div>
                <button className="capitalize text-[14px] text-[#0095f6] font-[700]">
                  post
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t dark:border-[#2d343b] mt-10  py-8">
          <h3 className="text-[14px] font-[700] text-[#8e8e8e] mb-4">
            More posts form{" "}
            <span className="text-[#262626]"> abirislam1971</span>
          </h3>
          <Posts />
        </div>
      </div>
    </Wrapper>
  );
};

export default Post;
