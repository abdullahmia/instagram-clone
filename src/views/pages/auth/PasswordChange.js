import { useState } from "react";
import { useForm } from "react-hook-form";
import { usePasswordChangeMutation } from "../../../redux/services/authServices";
import Loader from "../../components/common/Loader";
import AccountWrapper from "../../components/custom/AccountWrapper";

const PasswordChange = () => {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const { register, handleSubmit, reset } = useForm();

  const [passwordChange, { isLoading }] = usePasswordChangeMutation();
  // password change handler
  const passwordChangeHandler = async (data) => {
    console.log(data);
    if (data.newPassword !== data.confirmPassword) {
      setMessage("Password not matched");
    } else {
      await passwordChange(data).then((res) => {
        if (res.data) {
          // console.log(res?.data?.message);
          setSuccess(res?.data?.message);
          reset();
        }
        if (res?.error) {
          setSuccess("");
          setMessage(res.error.data.message);
        }
      });
    }
  };

  return (
    <AccountWrapper title={"Change password • Instagram"}>
      <div className="py-8 px-6">
        <div className="w-full flex flex-col gap-6">
          <div className="flex items-center gap-11">
            <div className="lg:w-36 flex justify-end">
              <img
                src="https://picsum.photos/200"
                className="w-[38px] h-[38px] rounded-full"
                alt="profile"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[#262626] text-[24px] font-[400] dark:text-gray-300">
                abirislam1971
              </h2>
            </div>
          </div>

          {message && (
            <p className="text-[17px] mb-5 text-[#b63131] px-2 text-center">
              {message}
            </p>
          )}

          {success && (
            <p className="text-[17px] mb-5 px-2 text-center dark:text-gray-500">
              {success}
            </p>
          )}

          <form
            onSubmit={handleSubmit(passwordChangeHandler)}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col lg:flex-row items-start lg:gap-10 gap-1">
              <div className="lg:w-36 flex justify-end">
                <label className="text-end text-[#262626] text-[16px] font-[600] dark:text-gray-300">
                  Old Password
                </label>
              </div>
              <div className="flex flex-col w-[335px] gap-2">
                <input
                  {...register("oldPassword")}
                  type="password"
                  className="border px-3 py-2 rounded-md focus:outline-none background dark:text-gray-300 dark:border-[#2d343b]"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:gap-10 gap-1">
              <div className="lg:w-36 flex justify-end">
                <label className="text-end text-[#262626] text-[16px] font-[600] dark:text-gray-300">
                  New Password
                </label>
              </div>
              <div className="flex flex-col w-[335px] gap-2">
                <input
                  {...register("newPassword")}
                  type="password"
                  className="border px-3 py-2 rounded-md focus:outline-none background dark:text-gray-300 dark:border-[#2d343b]"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:gap-10 gap-1">
              <div className="lg:w-36 flex justify-end">
                <label className="text-end text-[#262626] text-[16px] font-[600] dark:text-gray-300">
                  Confirm Password
                </label>
              </div>
              <div className="flex flex-col w-[335px] gap-2">
                <input
                  {...register("confirmPassword")}
                  type="password"
                  className="border px-3 py-2 rounded-md focus:outline-none background dark:text-gray-300 dark:border-[#2d343b]"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:gap-10 gap-1">
              <div className="lg:w-36 flex justify-end">
                <label className="text-end text-[#262626] text-[16px] font-[600] dark:text-gray-300"></label>
              </div>
              <div className="flex w-[335px] gap-4">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-[#0095F6] text-[14px] text-white py-2 px-4 rounded"
                >
                  {isLoading && <Loader />}
                  Change Password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </AccountWrapper>
  );
};

export default PasswordChange;
