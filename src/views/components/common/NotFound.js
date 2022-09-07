import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 lg:px-14 py-20">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-[#262626] text-[22px] font-[700] dark:text-gray-300">
          Sorry, this page isn't available.
        </h2>
        <p className="text-[#262626] text-[16px] font-[400] dark:text-gray-300">
          The link you followed may be broken, or the page may have been
          removed.{" "}
          <Link to={"/"} className="text-blue-400">
            Go back to Instagram.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
