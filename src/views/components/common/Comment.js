const Comment = () => {
  return (
    <div className="flex gap-3 items-start py-2">
      <img
        src="https://picsum.photos/200"
        alt=""
        className="w-[32px] h-[32px] rounded-full"
      />
      <div>
        <h2 className="text-[14px] text-[#262626] font-[600] dark:text-gray-300">
          riazuddin12{" "}
          <span className="font-[400] ml-3 dark:text-gray-400">
            In web development c# is required more than python
          </span>
        </h2>
        <p className="text-[12px] text-[#8e8e8e]">2h</p>
      </div>
    </div>
  );
};

export default Comment;
