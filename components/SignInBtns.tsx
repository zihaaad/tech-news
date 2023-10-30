"use client";

import Image from "next/image";
import React from "react";
import {signIn} from "next-auth/react";

const SignInBtns = () => {
  return (
    <>
      <h1 className="text-center mt-8">Sign In</h1>
      <div className="mt-4 p-4 flex flex-col items-center justify-center gap-4">
        <button
          onClick={() => signIn("github")}
          className="flex items-center border px-6 py-3 rounded-full gap-3 hover:bg-slate-100/25 transition">
          <span>
            <Image
              src={"/github-logo.svg"}
              height={30}
              width={30}
              alt="github-logo"
            />
          </span>
          Sign In with Github
        </button>
        <button
          onClick={() => signIn("google")}
          className="flex items-center border px-6 py-3 rounded-full gap-3 hover:bg-slate-100/25 transition">
          <span>
            <Image
              src={"/google-logo.svg"}
              height={30}
              width={30}
              alt="google-logo"
            />
          </span>
          Sign In with Google
        </button>
      </div>
    </>
  );
};

export default SignInBtns;
