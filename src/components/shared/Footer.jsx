"use client"
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { FaFacebookF, FaPhoneVolume, FaYoutube } from "react-icons/fa";
import { IoIosSend, IoLogoTwitter } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="p-20 bg-[#2B1E16] pb-5">
      <div className="container mx-auto">
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
              <Link
                href={"/"}
                className="p-2 border border-[#DAD8D550] hover:border-transparent hover:bg-primary hover:text-white transition-all duration-200"
              >
                <FaFacebookF className="text-2xl" />
              </Link>
              <Link
                href={"/"}
                className="p-2 border border-[#DAD8D550] hover:border-transparent hover:bg-primary hover:text-white transition-all duration-200"
              >
                <IoLogoTwitter className="text-2xl" />
              </Link>
              <Link
                href={"/"}
                className="p-2 border border-[#DAD8D550] hover:border-transparent hover:bg-primary hover:text-white transition-all duration-200"
              >
                <RiInstagramFill className="text-2xl" />
              </Link>
              <Link
                href={"/"}
                className="p-2 border border-[#DAD8D550] hover:border-transparent hover:bg-primary hover:text-white transition-all duration-200"
              >
                <FaYoutube className="text-2xl" />
              </Link>
            </div>
          </div>

          <div className="flex justify-evenly items-start gap-4">
            <div className="flex flex-col justify-start gap-2.5">
              <h2 className="text-2xl font-semibold text-white">About</h2>
              <ul className="flex flex-col gap-1 text-lg">
                <li>
                  <Link href={"/about-us"} className="hover:text-primary transition-colors">About us</Link>
                </li>
                <li>
                  <Link href={"/services"} className="hover:text-primary transition-colors">Our services</Link>
                </li>
                <li>
                  <Link href={"/our-team"} className="hover:text-primary transition-colors">Meet the team</Link>
                </li>
                <li>
                  <Link href={"/blog"} className="hover:text-primary transition-colors">Recent News</Link>
                </li>
                <li>
                  <Link href={"/contact"} className="hover:text-primary transition-colors">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <div className="flex flex-col gap-3 text-sm">
                <p className="flex items-start gap-2">
                  <IoLocationSharp className="text-primary shrink-0 mt-1" /> 
                  <span>Shimultola road, mirpur dhaka, pirerbag, dhaka 1216</span>
                </p>
                <p className="flex items-center gap-2">
                  <IoIosSend className="text-primary shrink-0" /> 
                  <Link href="mailto:info@tilora.com" className="hover:text-primary transition-colors">info@tilora.com</Link>
                </p>
                <p className="flex items-center gap-2">
                  <FaPhoneVolume className="text-primary shrink-0" /> 
                  <Link href="tel:+8801723417228" className="hover:text-primary transition-colors">+8801723417228</Link>
                </p>
              </div>
            </div>

            <form className="flex flex-col gap-3 w-full mt-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                required
                className="input w-full bg-base-100 border-2 border-[#DAD8D5] text-secondary-text placeholder:text-secondary-text focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                placeholder="Your message"
                rows={3}
                required
                className="textarea w-full bg-base-100 border-2 border-[#DAD8D5] text-secondary-text placeholder:text-secondary-text focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button 
              onClick={(e)=>e.preventDefault}
                type="submit" 
                className="btn btn-primary border-primary w-full font-semibold tracking-wide hover:shadow-lg transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="divider before:bg-secondary-text after:bg-secondary-text"></div>
        
        <div className="flex justify-between items-center text-secondary-text text-sm">
          <small>&copy; copyright 2026, tilora</small>
          <small>
            <Link href={"/"} className="hover:text-primary transition-colors">Privacy Policy</Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
