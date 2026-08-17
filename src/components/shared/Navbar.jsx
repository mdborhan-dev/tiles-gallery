"use client";
import Image from "next/image";
import NavLink from "./NavLink";
import userAvatar from "@/assets/user.png";
import logo from "@/assets/logo.png";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Navbar = () => {

  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();
  return (
    <div className="container mx-auto flex items-center justify-between py-5">
      <Link
        className="flex flex-nowrap gap-1.5 items-center justify-start btn bg-transparent border-0 hover:bg-transparent hover:border-0"
        href="/"
      >
        <Image
          src={logo}
          alt="Tilora logo"
          width={40}
          height={40}
          className="max-sm:hidden"
        />
        <Image
          src={logo}
          alt="Tilora logo"
          width={30}
          height={30}
          className="sm:hidden"
        />
        <h2 className="font-bold text-3xl sm:text-4xl">tilora</h2>
      </Link>
      <ul className="hidden sm:flex justify-center items-center gap-4">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/all-tiles">All Tiles</NavLink>
        </li>
        {session?.user && (
          <li>
            <NavLink href="/profile">My Profile</NavLink>
          </li>
        )}
      </ul>
      {isPending ? (
        <span className="loading loading-dots loading-xs"></span>
      ) : session?.user ? (
        <Link href={"/profile"} className="hidden sm:flex justify-end items-center gap-1.5">
          <Image
            src={session.user.image}
            alt="User Avatar"
            width={34}
            height={34}
            className="rounded-full"
          />
          <button
            onClick={async () => {
              await authClient.signOut();
              router.push("/")
            }}
            className="btn btn-primary"
          >
            Logout
          </button>
        </Link >
      ) : (
        <Link href={"/login"} className="btn btn-primary max-sm:hidden">
          Login
        </Link>
      )}
      <button
        onClick={() => setIsOpen(true)}
        className="block sm:hidden text-2xl font-medium p-4"
      >
        <RiMenu3Fill />
      </button>
      {/* backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 sm:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-base-100 z-50 shadow-xl transition-transform duration-300 ease-in-out sm:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end p-5 border-b border-base-300">
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            <RiCloseFill />
          </button>
        </div>
        <ul className="flex items-center justify-start gap-4 p-5">
          <li>
            <NavLink href="/" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink href="/all-tiles" onClick={() => setIsOpen(false)}>
              All Tiles
            </NavLink>
          </li>
          {/* <li>
            <NavLink href="/profile" onClick={() => setIsOpen(false)}>
              My Profile
            </NavLink>
          </li> */}
        </ul>
        {isPending ? (
          <span className="loading loading-dots loading-xs"></span>
        ) : session?.user ? (
          <div>
            <div className="flex flex-col items-center justify-start gap-3 p-5 border-t border-base-300">
              <Image
                src={session?.user.image || userAvatar}
                alt="User Avatar"
                width={80}
                height={80}
                className="rounded-full"
              />
              <h2 className="text-2xl font-semibold">
                {/* {isPending ? "user Name" : `${session.user?.name}`} */}
                {session?.user.name}
              </h2>
            </div>

            <div className="flex flex-col justify-evenly items-center w-full">
              <Link
                href={"/profile"}
                onClick={() => setIsOpen(false)}
                className="btn btn-primary btn-md w-full"
              >
                My profile
              </Link>
              <button
                onClick={async () => {
                  await authClient.signOut();
                  router.push("/")
                }}
                className="btn btn-primary btn-md w-full"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Link href={"/login"} className="btn btn-primary w-full">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
