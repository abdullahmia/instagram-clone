import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { FiX } from "react-icons/fi";
import getUser from "../../../../../helper/user";
import Image from "../../Image";

const PostInput = ({ setShowModal, image }) => {
  const [caption, setCaption] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);
  const user = getUser();

  // for adding emojis
  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setCaption(caption + emoji);
  };

  // new post
  const addNewPost = async (e) => {
    e.preventDefault();
    console.log("post has been added");
  };

  console.log(image);

  return (
    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
      <form onSubmit={addNewPost}>
        <div className="background w-[800px] h-full py-2 px-4 flex justify-between border-b dark:border-[#2d343b]">
          <button onClick={() => setShowModal(false)}>
            <FiX className="text-xl dark:text-gray-400" />
          </button>
          <h3 className="dark:text-gray-400">Create a new post</h3>
          <button
            type="submit"
            className="text-[#0095f6] text-[14px] font-[600] focus:outline-none"
          >
            Share
          </button>
        </div>
        <div className="background w-[800px] h-[600px] flex">
          <div className="w-3/5 h-full">
            <img
              src={URL.createObjectURL(image)}
              className="w-full h-full object-cover"
              alt="profile"
            />
          </div>
          <div className="w-2/5">
            <div className="p-5 flex items-center gap-3">
              <Image
                src={user?.image}
                classname="w-[38px] h-[38px] rounded-full object-cover"
              />
              <h2 className="text-[#262626] text-[16px] font-[700] dark:text-gray-300">
                {user?.username}
              </h2>
            </div>
            <div className="px-5 pt-0 pb-0">
              <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                rows="2"
                className="w-full bg-transparent text-[16px] font-[400] outline-none text-[#262626] placeholder-gray-500 tracking-wide min-h-[70px]dark:text-gray-200"
                placeholder="Write a caption......"
              />
            </div>
            <div
              className="px-5 icon"
              onClick={() => setShowEmojis(!showEmojis)}
            >
              <BsEmojiSmile className="text-[#8e8e8e] text-lg" />
            </div>
            <div className="px-5 border-b pb-5 dark:border-[#2d343b]">
              {showEmojis && (
                <Picker
                  onSelect={addEmoji}
                  style={{
                    position: "absolute",
                    //   marginTop: "400px",
                    marginLeft: -40,
                    maxWidth: "400px",
                    // borderRadius: "20px",
                  }}
                  theme="dark"
                />
              )}
            </div>

            <div className="px-5 flex items-center justify-between border-b dark:border-[#2d343b]">
              <input
                type="text"
                placeholder="Add Location"
                className="text-[14px] text-[#262626] font-[400] focus:outline-none py-3 dark:bg-transparent dark:text-gray-400"
              />
              <svg
                aria-label="Add location"
                className="_ab6-"
                color="#8e8e8e"
                fill="#8e8e8e"
                height="16"
                role="img"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M12.053 8.105a1.604 1.604 0 101.604 1.604 1.604 1.604 0 00-1.604-1.604zm0-7.105a8.684 8.684 0 00-8.708 8.66c0 5.699 6.14 11.495 8.108 13.123a.939.939 0 001.2 0c1.969-1.628 8.109-7.424 8.109-13.123A8.684 8.684 0 0012.053 1zm0 19.662C9.29 18.198 5.345 13.645 5.345 9.66a6.709 6.709 0 0113.417 0c0 3.985-3.944 8.538-6.709 11.002z"></path>
              </svg>
            </div>
            <div className="px-5 flex items-center justify-between border-b py-3 dark:border-[#2d343b]">
              <h2 className="text-[16px] text-[#262626] font-[400] dark:text-gray-400">
                Accessibility
              </h2>
              <svg
                aria-label="Down chevron icon"
                className="rotate-180 dark:text-gray-400"
                color="#262626"
                fill="#262626"
                height="16"
                role="img"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
              </svg>
            </div>
            <div className="px-5 flex items-center justify-between border-b py-3 dark:border-[#2d343b]">
              <h2 className="text-[16px] text-[#262626] font-[400] dark:text-gray-400">
                Advanced Settings
              </h2>
              <svg
                aria-label="Down chevron icon"
                className="rotate-180 dark:text-gray-400"
                color="#262626"
                fill="#262626"
                height="16"
                role="img"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
              </svg>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostInput;
