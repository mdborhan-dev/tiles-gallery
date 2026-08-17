"use client";
import notFoundPic from "@/assets/404.png";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
const NotFoundPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center p-20 gap-4">
        <Image src={notFoundPic} alt="404" width={820} height={620} />
        <h2 className="text-3xl font-semibold text-primary">Page not found</h2>
        <Link href={"/"}>
          <button className="btn btn-primary btn-xl font-medium flex gap-2 transition-transform hover:scale-110 max-sm:btn-lg">
            Back to home <span>|</span> <IoIosArrowRoundForward />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
