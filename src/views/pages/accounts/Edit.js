import AccountWrapper from "../../components/custom/AccountWrapper";

const Edit = () => {
  return (
    <AccountWrapper title={"Edit profile • Instagram"}>
      <div className="py-3">
        <div>
          <div className="flex items-center">
            <div>
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
        </div>
      </div>
    </AccountWrapper>
  );
};

export default Edit;
