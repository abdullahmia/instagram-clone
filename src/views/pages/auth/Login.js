import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import appleStore from "../../../assets/appstore.png";
import facebook from "../../../assets/facebook.png";
import playStore from "../../../assets/googleplay.png";
import loginImg from "../../../assets/insta.jpg";
import logo from "../../../assets/logo.png";
import { useLoginMutation } from "../../../redux/services/authServices";
import Loader from "../../components/common/Loader";
import Wrapper from "../../components/custom/Wrapper";

const Login = () => {
  const [message, setMessage] = useState("");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  // redirect login if user is already login
  const user = JSON.parse(localStorage.getItem("user"))?.token;
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  // login form submit
  const [login, { isLoading }] = useLoginMutation();
  const loginSubmit = async (data) => {
    await login(data).then((res) => {
      if (res.data) {
        setMessage("");
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");
      }

      if (res.error) {
        setMessage(res?.error?.data?.message);
      }
    });
  };
  return (
    <Wrapper title="Log In • Instagram">
      <div className="w-full h-screen flex justify-center items-center background">
        <div className="flex pt-10 justify-center gap-6">
          <div className="lg:block hidden">
            <img src={loginImg} alt="" />
          </div>
          <div>
            <div className="bg-[#FFFFFF] w-[348px] h-[424px] px-8 border border-[#d3d0d0] dark:bg-[#252a30] dark:border-[#2d343b]">
              <div className="py-10 flex justify-center">
                <img src={logo} alt="" />
              </div>
              <div>
                {message && (
                  <p className="text-[12px] mb-5 text-[#b63131] px-2 text-center">
                    {message}
                  </p>
                )}
                <form
                  onSubmit={handleSubmit(loginSubmit)}
                  className="flex flex-col gap-3"
                >
                  <input
                    {...register("username")}
                    type="text"
                    className="border text-xs py-2.5 bg-gray-50 px-3 rounded focus:outline-none background dark:text-gray-300 dark:border-[#2d343b]"
                    placeholder="Phone number, email or username"
                  />
                  <input
                    {...register("password")}
                    type="password"
                    className="border text-xs py-2.5 px-3 rounded focus:outline-none background dark:text-gray-300 dark:border-[#2d343b]"
                    placeholder="Password"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-4 capitalize text-sm bg-blue-500 text-white py-1.5 rounded"
                  >
                    {isLoading && <Loader />}
                    log in
                  </button>
                </form>

                <div className="relative mt-10 h-px bg-gray-300 background">
                  <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                    <span className="px-4 text-xs text-gray-500 uppercase background">
                      Or
                    </span>
                  </div>
                </div>

                <div className="text-center mt-8 flex flex-col gap-4">
                  <h2 className="flex justify-center items-center gap-2">
                    <img src={facebook} alt="" className="w-4" />
                    <span className="text-[#385185] text-sm font-semibold">
                      Log in with Facebook
                    </span>
                  </h2>
                  <Link
                    to="/password-reset"
                    className="text-[#00376b] text-[12px] hover:underline dark:text-blue-200"
                  >
                    forgot password?
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white mt-4 py-6 border border-[#d3d0d0] dark:bg-[#252a30] dark:border-[#2d343b]">
              <h2 className="text-center text-[14px] text-[#262626] dark:text-gray-300">
                Don't have an account?{" "}
                <Link to="/signup" className="text-[#0095f6] font-[600]">
                  Sign up
                </Link>
              </h2>
            </div>

            {/* App Section */}
            <div className="py-6">
              <h2 className="text-center text-[14px] text-[#262626] dark:text-gray-300">
                Get the app.
              </h2>
              <div className="mt-4 flex items-center justify-center gap-2 background">
                <img src={appleStore} className="w-32" alt="" />
                <img src={playStore} className="w-32" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
