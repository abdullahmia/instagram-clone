import AccountWrapper from "../../components/custom/AccountWrapper";

const Edit = () => {
  return (
    <AccountWrapper title={"Edit profile • Instagram"}>
      <div className="py-8 px-6">
        <div className="w-full flex flex-col gap-6">
          <div className="flex items-center gap-11">
            <div className="lg:w-36 flex justify-end">
              <img
                src="https://picsum.photos/200"
                className="w-[38px] h-[38px] rounded-full"
                alt="profile"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[#262626] text-[20px] font-[400] dark:text-gray-300">
                abirislam1971
              </h2>
              <button className="text-[14px] text-[#0095f6] font-[600]">
                Change profile photo
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:gap-10 gap-1">
            <div className="lg:w-36 flex justify-end">
              <label className="text-end text-[#262626] text-[16px] font-[600] dark:text-gray-300">
                Name
              </label>
            </div>
            <div className="flex flex-col w-[335px] gap-2">
              <input
                type="text"
                value={"Abir Islam"}
                className="border px-2 py-1 focus:outline-none background dark:text-gray-300 dark:border-[#2d343b]"
              />
              <p className="text-[12px] text-[#8e8e8e] font-[400]">
                Help people discover your account by using the name you're known
                by: either your full name, nickname, or business name.
              </p>
              <p className="text-[12px] text-[#8e8e8e] font-[400]">
                You can only change your name twice within 14 days.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:gap-10 gap-1">
            <div className="lg:w-36 flex justify-end">
              <label className="text-end text-[#262626] text-[16px] font-[600] dark:text-gray-300">
                Username
              </label>
            </div>
            <div className="flex flex-col w-[335px] gap-2">
              <input
                type="text"
                value={"abirislam1971"}
                className="border px-2 py-1 focus:outline-none background dark:text-gray-300 dark:border-[#2d343b]"
              />
              <p className="text-[12px] text-[#8e8e8e] font-[400]">
                In most cases, you'll be able to change your username back to
                abirislam1971 for another 14 days.{" "}
                <span className="hover:underline text-[#0095f6] cursor-pointer">
                  Learn more
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:gap-10 gap-1">
            <div className="lg:w-36 flex justify-end">
              <label className="text-end text-[#262626] text-[16px] font-[600] dark:text-gray-300">
                Website
              </label>
            </div>
            <div className="flex flex-col w-[335px] gap-2">
              <input
                type="text"
                value={"http://abdullahmia.me"}
                className="border px-2 py-1 focus:outline-none background dark:text-gray-300 dark:border-[#2d343b]"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:gap-10 gap-1">
            <div className="lg:w-36 flex justify-end">
              <label className="text-end text-[#262626] text-[16px] font-[600] dark:text-gray-300">
                Bio
              </label>
            </div>
            <div className="flex flex-col w-[335px] gap-2">
              <textarea
                type="text"
                value={"Truly madly deeply...😍😍😍😍"}
                className="border px-2 py-1 focus:outline-none background dark:text-gray-300 dark:border-[#2d343b]"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:gap-10 gap-1">
            <div className="lg:w-36 flex justify-end">
              <label className="text-end text-[#262626] text-[16px] font-[600]"></label>
            </div>
            <div className="flex flex-col w-[335px] gap-2">
              <h2 className="text-[#8e8e8e] text-[14px] font-[600]">
                Personal information
              </h2>
              <p className="text-[12px] text-[#8e8e8e]">
                Provide your personal information, even if the account is used
                for a business, a pet or something else. This won't be a part of
                your public profile.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:gap-10 gap-1">
            <div className="lg:w-36 flex justify-end">
              <label className="text-end text-[#262626] text-[16px] font-[600] dark:text-gray-300">
                Email
              </label>
            </div>
            <div className="flex flex-col w-[335px] gap-2">
              <input
                type="email"
                value={"abdullahbang1971@gmail.com"}
                className="border px-2 py-1 focus:outline-none background dark:text-gray-300 dark:border-[#2d343b]"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:gap-10 gap-1">
            <div className="lg:w-36 flex justify-end">
              <label className="text-end text-[#262626] text-[16px] font-[600]">
                Phone number
              </label>
            </div>
            <div className="flex flex-col w-[335px] gap-2">
              <input
                type="email"
                value={"01775748710"}
                className="border px-2 py-1 focus:outline-none background dark:text-gray-300 dark:border-[#2d343b]"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:gap-10 gap-1">
            <div className="lg:w-36 flex justify-end">
              <label className="text-end text-[#262626] text-[16px] font-[600] dark:text-gray-300">
                Gender
              </label>
            </div>
            <div className="flex flex-col w-[335px] gap-2">
              <select className="border px-2 py-1 bg-white focus:outline-none background dark:text-gray-300 dark:border-[#2d343b]">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:gap-10 gap-1">
            <div className="lg:w-36 flex justify-end">
              <label className="text-end text-[#262626] text-[16px] font-[600] dark:text-gray-300">
                Similar account suggestions
              </label>
            </div>
            <div className="flex w-[335px] gap-4">
              <input
                type="checkbox"
                className="background dark:text-gray-300 dark:border-[#2d343b]"
              />
              <label className="text-[14px] text-[#262626] dark:text-[#8e8e8e]">
                Include your account when recommending similar accounts people
                might want to follow.[?]
              </label>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:gap-10 gap-1">
            <div className="lg:w-36 flex justify-end">
              <label className="text-end text-[#262626] text-[16px] font-[600] dark:text-gray-300"></label>
            </div>
            <div className="flex w-[335px] gap-4">
              <button
                type="submit"
                className="bg-[#0095F6] text-[14px] text-white py-1 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </AccountWrapper>
  );
};

export default Edit;
