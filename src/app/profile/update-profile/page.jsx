"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const UpdateProfile = () => {
    const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = async (data) => {
    const updates = {};
    if (data.name?.trim()) {
      updates.name = data.name;
    }
    if (data.image?.trim()) {
      updates.image = data.image;
    }
    if (Object.keys(updates).length === 0) {
      alert("No changes to update");
      return;
    }
    try {
      await authClient.updateUser(updates);
      alert("Updated!");
      router.push("/profile")
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4 min-h-[60vh]">
      <div className="flex flex-col gap-4 sm:w-5/12 p-4 bg-secondary-text/10 py-10 mx-auto shadow-sm">
        <div className="text-center">
          <h2 className="text-4xl font-bold ">Update</h2>
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
              {...register("name")}
              placeholder="Enter new name"
            />
            <p className="label text-error">{errors.name?.message}</p>
          </fieldset>
          {/* Image */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-md">Name</legend>
            <input
              type="text"
              className="input w-full"
              {...register("image")}
              placeholder="Enter new profile image url"
            />
            <p className="label text-error">{errors.name?.message}</p>
          </fieldset>
          <button
            type="submit"
            className="btn btn-primary border-0 cursor-pointer hover:gap-3 w-full mt-4"
          >
            <span>Update Profile</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
