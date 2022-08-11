const Highlight = () => {
  return (
    <div className="lg:w-[85px] w-[56px] flex flex-col gap-2">
      <img
        src="https://picsum.photos/200"
        className="lg:w-[85px] lg:h-[85px] w-[56px] h-[56px] rounded-full border dark:border-gray-600 p-1"
        alt=""
      />
      <h2 className="text-[#262626] lg:text-[14px] text-[12px] lg:font-[700] font-[400] text-center dark:text-gray-400">
        Mine
      </h2>
    </div>
  );
};

export default Highlight;
