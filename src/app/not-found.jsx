"use client"
import notFoundPic from "@/assets/404.png"
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
const NotFoundPage = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col items-center p-20 gap-4">
                <Image src={notFoundPic} alt="404" width={1280} height={720}/> 
                <h2 className="text-3xl font-semibold text-primary">Page not found</h2>
                <button className="btn btn-primary btn-xl font-medium flex gap-2">Back to home <span>|</span> <IoIosArrowRoundForward/></button>
            </div>
        </div>
    );
};

export default NotFoundPage;