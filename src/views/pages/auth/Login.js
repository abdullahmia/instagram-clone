import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import appleStore from "../../../assets/appstore.png";
import facebook from "../../../assets/facebook.png";
import playStore from "../../../assets/googleplay.png";
import loginImg from "../../../assets/insta.jpg";
import logo from "../../../assets/logo.png";
import Wrapper from "../../components/custom/Wrapper";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();

  // login form submit
  const loginSubmit = async (data) => {
    console.log(data);
    reset();
  };
  return (
    <Wrapper title="Instagram">
      <div className="w-full">
        <div className="flex pt-10 justify-center gap-6">
          <div className="hidden lg:block">
            <img src={loginImg} alt="" />
          </div>
          <div>
            <div className="bg-white w-[348px] h-[424px] px-8 border border-[#d3d0d0]">
              <div className="py-10 flex justify-center">
                <img src={logo} alt="" />
              </div>
              <div>
                <form
                  onSubmit={handleSubmit(loginSubmit)}
                  className="flex flex-col gap-3"
                >
                  <input
                    {...register("email")}
                    type="text"
                    className="border text-xs py-2.5 bg-gray-50 px-3 rounded focus:outline-none"
                    placeholder="Phone number, email or username"
                  />
                  <input
                    {...register("password")}
                    type="password"
                    className="border text-xs py-2.5 px-3 rounded focus:outline-none"
                    placeholder="Password"
                  />
                  <button
                    type="submit"
                    className="capitalize text-sm bg-blue-500 text-white py-1.5 rounded"
                  >
                    log in
                  </button>
                </form>

                <div className="relative mt-10 h-px bg-gray-300">
                  <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                    <span className="bg-white px-4 text-xs text-gray-500 uppercase">
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
                    to="/forgot-password"
                    className="text-[#00376b] text-[12px]"
                  >
                    forgot password?
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white mt-4 py-6 border border-[#d3d0d0]">
              <h2 className="text-center text-[14px] text-[#262626]">
                Don't have an account?{" "}
                <Link to="/signup" className="text-[#0095f6] font-[600]">
                  Sign up
                </Link>
              </h2>
            </div>

            {/* App Section */}
            <div className="py-6">
              <h2 className="text-center text-[14px] text-[#262626]">
                Get the app.
              </h2>
              <div className="mt-4 flex items-center justify-center gap-2">
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
