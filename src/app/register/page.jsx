"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowRightLong, FaEye, FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Slide, toast } from "react-toastify";

const Register = () => {
  const [isHidden, setIsHidden] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = async (data) => {
    const { data: SignupData, error: signUpError } =
      await authClient.signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
        image: data.image,
        callbackURL: "/",
      });

    if (signUpError) {
      toast.error(signUpError.message || "Sign up failed. Please try again.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      return;
    }

    toast.success("Account created successfully! Welcome, " + data.name, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };

  return (
    <div className="container mx-auto p-4 min-h-[60vh]">
      <div className="flex flex-col gap-4 sm:w-5/12 p-4 bg-secondary-text/10 py-10 mx-auto shadow-sm">
        <div className="text-center">
          <h2 className="text-4xl font-bold ">Register</h2>
          <p className="text-secondary-text">
            Please fill the form with right info
          </p>
        </div>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          {/* name */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-md">Name</legend>
            <input
              type="text"
              className="input w-full"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
            />
            <p className="label text-error">{errors.name?.message}</p>
          </fieldset>
          {/* image */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-md">Image</legend>
            <input
              type="text"
              className="input w-full"
              {...register("image", {
                required: "Image Url is required",
                validate: {
                  isValidUrl: (value) => {
                    try {
                      const url = new URL(value);
                      return url.protocol === "http:" ||
                        url.protocol === "https:"
                        ? true
                        : "URL must start with http:// or https://";
                    } catch (error) {
                      return "Please enter a valid URL";
                    }
                  },
                },
              })}
              placeholder="Enter your profile image url"
            />
            <p className="label text-error">{errors.image?.message}</p>
          </fieldset>

          {/* email */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-md">Email</legend>
            <input
              type="email"
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
                  required: "Password is required",
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
            <span>Register</span> <FaArrowRightLong />
          </button>
        </form>
        <p className="text-lg font-medium text-secondary-text text-center">
          Already have a account?{" "}
          <Link href={"/login"} className="text-error cursor-pointer">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={async () => {
            const data = await authClient.signIn.social({
              provider: "google",
            });
          }}
          className="btn btn-ghost group text-xl bg-white"
        >
          <FcGoogle />
          <span>Login With Google</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
