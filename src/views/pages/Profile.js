import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import Highlight from "../components/common/Highlight";
import Wrapper from "../components/custom/Wrapper";

const Profile = () => {
  return (
    <Wrapper title={"Abir Islam (@abirislam)"}>
      <Header />
      <div className="container mx-auto">
        <div className="flex lg:items-center items-start lg:gap-28 gap-8 lg:px-14 px-3 lg:py-8 py-4">
          <div>
            <img
              src="https://picsum.photos/200"
              className="lg:w-[150px] lg:h-[150px] w-[77px] h-[77px] rounded-full object-contain"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-5">
              <h2 className="text-[28px] text-[#262626] font-[300] dark:text-gray-300">
                abirislam1971
              </h2>
              <button className="text-[14px] text-[#262626] font-[600] border dark:border-gray-600 dark:text-gray-400 px-2 py-2 rounded lg:block hidden">
                Edit profile
              </button>
              <button className="dark:text-gray-300">
                <svg
                  aria-label="Options"
                  // color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    fill="none"
                    r="8.635"
                    stroke="currentColor"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                  ></circle>
                  <path
                    d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </button>
            </div>
            <button className="text-[14px] text-[#262626] font-[600] border px-2 py-1 rounded lg:hidden block dark:border-gray-600 dark:text-gray-400">
              Edit profile
            </button>
            <div className="lg:block hidden">
              <div className="flex items-center gap-10">
                <h3 className="text-[#262626] dark:text-gray-400 text-[16px] font-[400]">
                  <span className="font-semibold">12</span> posts
                </h3>
                <h3 className="text-[#262626] dark:text-gray-400 text-[16px] font-[400]">
                  <span className="font-semibold">100</span> followers
                </h3>
                <h3 className="text-[#262626] dark:text-gray-400 text-[16px] font-[400]">
                  <span className="font-semibold">12</span> following
                </h3>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#262626] dark:text-gray-300 text-[16px] font-[600]">
                Abir Islam
              </h2>
              <p className="text-[#262626] dark:text-gray-400 text-[16px] font-[400]">
                Trully madly deeply
              </p>
              <Link
                to="/"
                className="text-[#00376b] dark:text-blue-500 text-[16px] font-[700] hover:underline transition"
              >
                abdullahmia.me
              </Link>
            </div>
          </div>
        </div>
        <div className="py-5">
          {/* Featured */}
          <div className="flex items-center lg:gap-10 gap-3">
            <Highlight />
            <Highlight />
            <Highlight />
            <Highlight />
          </div>
        </div>
        <div></div>
      </div>
    </Wrapper>
  );
};

export default Profile;
