"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { PropagateLoader } from "react-spinners";

const MyprofilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const router = useRouter();

  const [imgError, setImgError] = useState(false);

  return (
    <div className="container mx-auto">
      {isPending ? (
        <div className="contaienr flex justify-center items-center my-auto h-[80vh]">
          <PropagateLoader color="#c88651" />
        </div>
      ) : (
        <div className="flex flex-col h-[70vh] justify-center items-center">
          <div className="rounded-xl sm:w-5/12 mx-auto max-sm:w-full shadow-md p-6 items-center justify-center flex-col flex">
            {/* <h1 className="text-center font-bold text-3xl sm:text-4xl mb-3">My profile</h1> */}
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 mx-auto">
              {user.image && !imgError ? (
                <Image
                  src={user.image}
                  alt={user.name || "User avatar"}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">
                    {(user.name || "?").charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
            </div>
            <h2 className="text-xl font-semibold text-center">{user.name}</h2>
            <p className="text-gray-500 text-center">{user.email}</p>
            <div className="flex gap-2 mx-auto justify-center w-fit mt-3">
              <button
                onClick={async () => {
                  await authClient.signOut();
                  router.push("/");
                }}
                className="btn btn-error text-white rounded-md flex items-center gap-2"
              >
                <FiLogOut /> Logout
              </button>
              <Link
                href={"/profile/update-profile"}
                className="btn  btn-primary text-white rounded-md flex items-center gap-2"
              >
                <MdEdit /> Edit Profile
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyprofilePage;
