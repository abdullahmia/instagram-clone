const SdiebarProfile = () => {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-4">
        <div>
          <img
            src="https://picsum.photos/200"
            alt=""
            className="w-[56px] h-[56px] rounded-full"
          />
        </div>
        <div>
          <h2 className="text-[14px] text-[#262626] dark:text-gray-200 font-[600]">
            abirislam1971
          </h2>
          <h2 className="text-[14px] text-[#8e8e8e] dark:text-gray-300">
            Abir Islam
          </h2>
        </div>
      </div>
      <div>
        <button className="text-[12px] font-[700] capitalize text-[#0095f6]">
          switch
        </button>
      </div>
    </div>
  );
};

export default SdiebarProfile;
