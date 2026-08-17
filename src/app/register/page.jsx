"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowRightLong, FaEye, FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [isHidden, setIsHidden] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // This function now needs to be ASYNC because uploading the image
  // to imgbb is a network request — we have to WAIT for it to finish
  // and give us back a URL before we can continue.
  const handleSubmitForm = async (data) => {
    console.log("raw form data", data);

    // 1. Grab the image file from the form.
    // react-hook-form gives us a FileList (even for a single file input),
    // so we reach into it with [0] to get the actual File object.
    const imageFile = data.image[0];

    // 2. Create a FormData object.
    // FormData is a special browser object built for sending files
    // (unlike text data, files can't just be JSON.stringify'd).
    const formData = new FormData();

    // 3. Attach the file to the FormData under the key "image".
    // This key name matters — it must match what imgbb's API expects.
    formData.append("image", imageFile);

    // 4. Build the imgbb upload URL.
    // imgbb expects your API key as a query parameter called "key".
    // Store your API key in an env variable (NEXT_PUBLIC_ prefix
    // is required so it's accessible in the browser).
    const imgbbAPIKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
    const imgbbURL = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;

    try {
      // 5. Send the file to imgbb.
      // Note: we do NOT manually set a Content-Type header here.
      // The browser automatically sets the correct multipart header
      // (with the required boundary string) when the body is FormData.
      const res = await fetch(imgbbURL, {
        method: "POST",
        body: formData,
      });

      // 6. Parse imgbb's JSON response.
      const imgbbResponse = await res.json();
      console.log("imgbb response", imgbbResponse);

      // 7. Pull out the actual hosted image URL.
      // (Logged above first so you can confirm the exact shape —
      // imgbb nests it inside data.url)
      const imageURL = imgbbResponse.data.url;

      // 8. Now build the final object you'd actually save —
      // combining your normal form fields with the new image URL
      // instead of the raw file.
      const finalUserInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
        image: imageURL,
      };

      console.log("final data ready to send to your backend:", finalUserInfo);

      // Next step (not shown here) would be sending finalUserInfo
      // to your own Render backend to actually create the user.
    } catch (error) {
      // Always handle the case where the image upload itself fails
      // (bad network, wrong API key, etc.)
      console.error("Image upload failed:", error);
    }
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

          {/* image upload */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-md">Photo</legend>
            {/*
              type="file" makes the browser show its native file picker.
              accept="image/*" restricts the picker to image files only
              (JPEGs, PNGs, etc.) — this is just a UI hint, not real security,
              but it's good practice.
            */}
            <input
              type="file"
              accept="image/*"
              className="file-input w-full"
              {...register("image", { required: "Photo is required" })}
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
        <button className="btn btn-ghost group text-xl bg-white">
          <FcGoogle />
          <span>Register With Google</span>
        </button>
      </div>
    </div>
  );
};

export default Register;