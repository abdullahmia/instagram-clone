import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import getUser from "../../../helper/user";
import Switcher from "../custom/Switcher";
import Image from "./Image";
import AddPost from "./modals/addPost/AddPost";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const user = getUser();
  // let image = user?.image ? user?.image : "user_cowfsl";
  const navigate = useNavigate();

  // logout function
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="w-full bg-white dark:bg-[#121212] border-b py-4 border-[#dddddde0] dark:border-gray-800 px-4 lg:px-0 md:px-0 sticky top-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <img src={logo} className="w-[110px]" alt="logo" />
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/">
              <svg
                aria-label="Home"
                className="dark:text-gray-200"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </Link>
            <Link to="/chat">
              <svg
                aria-label="Messenger"
                className="dark:text-gray-200"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M12.003 2.001a9.705 9.705 0 110 19.4 10.876 10.876 0 01-2.895-.384.798.798 0 00-.533.04l-1.984.876a.801.801 0 01-1.123-.708l-.054-1.78a.806.806 0 00-.27-.569 9.49 9.49 0 01-3.14-7.175 9.65 9.65 0 0110-9.7z"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="1.739"
                ></path>
                <path
                  d="M17.79 10.132a.659.659 0 00-.962-.873l-2.556 2.05a.63.63 0 01-.758.002L11.06 9.47a1.576 1.576 0 00-2.277.42l-2.567 3.98a.659.659 0 00.961.875l2.556-2.049a.63.63 0 01.759-.002l2.452 1.84a1.576 1.576 0 002.278-.42z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </Link>

            <button onClick={() => setShowModal(!showModal)}>
              <svg
                aria-label="New post"
                className="dark:text-gray-200"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="6.545"
                  x2="17.455"
                  y1="12.001"
                  y2="12.001"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="12.003"
                  x2="12.003"
                  y1="6.545"
                  y2="17.455"
                ></line>
              </svg>
            </button>
            {showModal && (
              <div className="overflow-hidden">
                <AddPost setShowModal={setShowModal} />
              </div>
            )}

            <Link to="/search">
              <svg
                aria-label="Find People"
                className="dark:text-gray-200"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="16.511"
                  x2="22"
                  y1="16.511"
                  y2="22"
                ></line>
              </svg>
            </Link>
            <Link to="/notification" className="dark:text-gray-200">
              <svg
                aria-label="Activity Feed"
                className="dark:text-gray-200"
                // color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
              </svg>
            </Link>

            <Menu as={"div"} className="relative">
              <Menu.Button className="flex">
                <Image
                  src={user?.image}
                  classname="w-[24px] h-[24px] rounded-full object-cover"
                />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-[0px] top-[36px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700">
                  <div className="py-1">
                    <ul
                      className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefault"
                    >
                      <li className="">
                        <Link
                          to={`/${user?.username}`}
                          className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-4 text-[#262626] dark:text-gray-300"
                        >
                          <svg
                            aria-label="Profile"
                            className="dark:text-gray-300"
                            color="#262626"
                            fill="#262626"
                            height="16"
                            role="img"
                            viewBox="0 0 24 24"
                            width="16"
                          >
                            <circle
                              cx="12.004"
                              cy="12.004"
                              fill="none"
                              r="10.5"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeMiterlimit="10"
                              strokeWidth="2"
                            ></circle>
                            <path
                              d="M18.793 20.014a6.08 6.08 0 00-1.778-2.447 3.991 3.991 0 00-2.386-.791H9.38a3.994 3.994 0 00-2.386.791 6.09 6.09 0 00-1.779 2.447"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeMiterlimit="10"
                              strokeWidth="2"
                            ></path>
                            <circle
                              cx="12.006"
                              cy="9.718"
                              fill="none"
                              r="4.109"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeMiterlimit="10"
                              strokeWidth="2"
                            ></circle>
                          </svg>
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/"}
                          className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-4 text-[#262626] dark:text-gray-300"
                        >
                          <svg
                            aria-label="Saved"
                            className="dark:text-gray-300"
                            color="#262626"
                            fill="#262626"
                            height="16"
                            role="img"
                            viewBox="0 0 24 24"
                            width="16"
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
                          Saved
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/"}
                          className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-4 text-[#262626] dark:text-gray-300"
                        >
                          <svg
                            aria-label="Settings"
                            className="dark:text-gray-300"
                            color="#262626"
                            fill="#262626"
                            height="16"
                            role="img"
                            viewBox="0 0 24 24"
                            width="16"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              fill="none"
                              r="8.635"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            ></circle>
                            <path
                              d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096"
                              fill="none"
                              stroke="currentColor"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            ></path>
                          </svg>
                          Settings
                        </Link>
                      </li>
                      <li className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        <button className="w-full flex items-center gap-4 text-[#262626] dark:text-gray-300">
                          <Switcher />
                          Theme
                        </button>
                      </li>
                      <li className="border-t mt-1 block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white dark:border-gray-800 ">
                        <button
                          onClick={logout}
                          className="w-full flex items-center gap-4 text-[#262626] dark:text-gray-300"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
