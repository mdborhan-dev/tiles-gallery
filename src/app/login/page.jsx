"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowRightLong, FaEye, FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [isHidden, setIsHidden] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = (data) => {
    console.log("data", data);
  };

  return (
    <div className="container mx-auto p-4 min-h-[60vh]">
      <div className="flex flex-col gap-4 sm:w-5/12 p-4 bg-secondary-text/10 py-10 mx-auto shadow-sm">
        <div className="text-center">
          <h2 className="text-4xl font-bold ">Login</h2>
          <p className="text-secondary-text">
            Please fill the form with right info
          </p>
        </div>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-md">Email</legend>
            <input
              type="text"
              className="input w-full"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
            />
            <p className="label text-error">{errors.email?.message}</p>
          </fieldset>
          {/* password */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-md">Password</legend>
            <div className="relative">
              <input
                type={`${isHidden ? "password" : "text"}`}
                className="input w-full"
                {...register("password", {
                  required: "Email is required",
                  minLength: {
                    value: 8,
                    message: "Password should at least be 8 characters",
                  },
                })}
                placeholder="Type here"
              />
              <span
                onClick={() => setIsHidden(!isHidden)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xl cursor-pointer"
              >
                {isHidden ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <p className="label text-error">{errors.password?.message}</p>
          </fieldset>
          <button
            type="submit"
            className="btn btn-primary border-0 cursor-pointer hover:gap-3 group w-full mt-4"
          >
            <span>Login</span> <FaArrowRightLong />
          </button>
        </form>
        <p className="text-lg font-medium text-secondary-text text-center">
          Don&apos;t have a account?{" "}
          <Link href={"register"} className="text-error cursor-pointer">
            Register
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-ghost group text-xl bg-white">
          <FcGoogle />
          <span>Login With Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
