import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="p-20 bg-[#2B1E16] pb-5">
      <div className="container mx-auto ">
        <div className="grid grid-cols-3 justify-between items-start gap-10 text-secondary-text">
          {/* logo and description */}
          <div className="flex flex-col items-start gap-3 w-fit">
            <Link
              className="flex flex-nowrap gap-1.5 items-center justify-start btn bg-transparent border-0 hover:bg-transparent hover:border-0 pl-0"
              href="/"
            >
              <Image src={logo} alt="Tilora logo" width={40} height={40} />
              <h2 className="font-bold text-4xl text-base-100">tilora</h2>
            </Link>
            <p className="text-xl w-78 leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              neque tenetur totam.
            </p>
            {/* social */}
            <div className="flex items-center justify-start gap-2">
                <Link href={"/"} className="p-2 border border-[#DAD8D550] hover:border-transparent hover:bg-primary hover:text-white"><FaFacebookF className="text-2xl"/></Link>
                <Link href={"/"} className="p-2 border border-[#DAD8D550] hover:border-transparent hover:bg-primary hover:text-white"><IoLogoTwitter className="text-2xl"/></Link>
                <Link href={"/"} className="p-2 border border-[#DAD8D550] hover:border-transparent hover:bg-primary hover:text-white"><RiInstagramFill className="text-2xl"/></Link>
                <Link href={"/"} className="p-2 border border-[#DAD8D550] hover:border-transparent hover:bg-primary hover:text-white"><FaYoutube className="text-2xl"/></Link>
            </div>
          </div>
          <div className="flex justify-evenly items-center gap-4">
            <div className="flex flex-col justify-start gap-2.5">
                <h2 className="text-2xl font-semibold text-white">About</h2>
                <ul className="flex flex-col gap-1 text-lg">
                    <li>
                        <Link href={"/about-us"}>About us</Link>
                    </li>
                    <li>
                        <Link href={"/services"}>Our services</Link>
                    </li>
                    <li>
                        <Link href={"/our-team"}>Meet the team</Link>
                    </li>
                    <li>
                        <Link href={"/blog"}>Recent News</Link>
                    </li>
                    <li>
                        <Link href={"/contact"}>Contact</Link>
                    </li>
                </ul>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <h2>ahsfd</h2>
            <h2>ahsfd</h2>
            <h2>ahsfd</h2>
          </div>
        </div>
        <div className="divider before:bg-secondary-text after:bg-secondary-text"></div>
        <div className="flex justify-between items-center text-secondary-text">
          <small>&copy; copyright 2026, tilora</small>
          <small><Link href={'/'}>Privacy Policy</Link></small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
