import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiLockAlt } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useResetPasswordMutation } from "../../../redux/services/authServices";
import Loader from "../../components/common/Loader";
import Wrapper from "../../components/custom/Wrapper";

const ResetPasswordSet = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { register, handleSubmit, reset } = useForm();
  const { user, token } = useParams();
  const navigate = useNavigate();

  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  // set new password handler
  const resetPasswordHandler = async (data) => {
    await resetPassword({ user: user, token: token, body: data }).then(
      (res) => {
        if (res?.data) {
          setSuccess(res?.data?.message);
          setError("");
          reset();
          navigate("/login");
        }
        if (res?.error) {
          setError(res?.error?.data?.message);
          setSuccess("");
        }
      }
    );
  };
  return (
    <Wrapper title="Reset Password • Instagram">
      <div className="w-full h-screen flex justify-center items-center">
        <div className="bg-[#FFFFFF] w-[348px] border border-[#d3d0d0]">
          <div className="px-8">
            <div className="flex flex-col justify-center items-center gap-2 pt-8">
              <div className="border border-black h-24 w-24 flex justify-center items-center rounded-full">
                <BiLockAlt className="text-[35px] text-black" />
              </div>
              <h2 className="text-[#262626] text-[16px] font-[600]">
                Set new password
              </h2>
              <p className="text-[13px] text-[#8e8e8e]">
                Enter your email, phone, or username and we'll send you a link
                to get back into your account.
              </p>
            </div>

            {error && (
              <p className="text-[14px] my-5 text-[#b63131] px-2 text-center">
                {error}
              </p>
            )}

            {success && (
              <p className="text-[14px] my-5 px-2 text-center dark:text-gray-500">
                {success}
              </p>
            )}

            <form
              onSubmit={handleSubmit(resetPasswordHandler)}
              className="flex flex-col gap-3 mt-5"
            >
              <input
                {...register("newPassword")}
                type="text"
                className="border text-xs py-2.5 bg-gray-50 px-3 rounded-md focus:outline-none"
                placeholder="New Password"
                required
              />
              <input
                {...register("confirmPassword")}
                type="text"
                className="border text-xs py-2.5 bg-gray-50 px-3 rounded-md focus:outline-none"
                placeholder="Confirm password"
                required
              />

              <button
                type="submit"
                className="flex items-center gap-2 justify-center capitalize text-sm bg-blue-500 text-white py-1.5 rounded"
              >
                {isLoading && <Loader />}
                set new password
              </button>
            </form>
          </div>

          <div className="text-center mt-8 flex flex-col gap-4">
            <Link
              to="/login"
              className="mt-10 w-full inline-block capitalize border py-2 text-[#262626] text-[14px] font-[600]"
            >
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ResetPasswordSet;
