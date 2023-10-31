"use client";

import Link from "next/link";
import {useSession, signOut} from "next-auth/react";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";

const Navbar = () => {
  const {status, data: session} = useSession();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node))
        setIsPopupVisible(false);
    };
    document.addEventListener("click", handleClickOutside);

    if (!isPopupVisible) {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isPopupVisible]);

  return (
    <div
      ref={popupRef}
      className="flex justify-between pb-4 border-b mb-4 relative">
      <div>
        <Link href={"/"}>
          <h1 className="text-4xl font-bold text-dark">Tech News</h1>
        </Link>
        <p className="text-sm">
          Exploring Tomorrow's Innovations, <br /> One Byte at a Time
        </p>
      </div>

      {status === "authenticated" ? (
        <>
          <div
            className={`absolute z-30 right-0 top-20 bg-white p-6 shadow-lg rounded-md flex-col gap-2 text-center min-w-[160px] ${
              isPopupVisible ? "flex " : "hidden"
            }`}>
            <div className="font-bold">{session?.user?.name}</div>
            <div className="font-bold">{session?.user?.email}</div>
            <Link
              onClick={() => setIsPopupVisible(false)}
              className="hover:underline"
              href={"/dashboard"}>
              Dashboard
            </Link>
            <Link
              onClick={() => setIsPopupVisible(false)}
              className="hover:underline"
              href={"/create-post"}>
              Create Post
            </Link>
            <button onClick={() => signOut()} className="btn">
              Sign Out
            </button>
          </div>
          <div className="flex items-center gap-5">
            <Link className="hidden sm:flex" href={"/create-post"}>
              <span className="flex items-center gap-1 border border-gray-300 px-2 py-1 rounded-2xl hover:scale-105 duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span>Create Post</span>
              </span>
            </Link>
            <Image
              onClick={() => setIsPopupVisible(!isPopupVisible)}
              width={46}
              height={46}
              alt="profile-image"
              src={session?.user?.image || ""}
              className="rounded-full"
            />
          </div>
        </>
      ) : (
        <div className="flex items-center">
          <Link className="btn" href={"/sign-in"}>
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
