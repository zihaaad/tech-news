import Image from "next/image";
import React from "react";

const SignInBtns = () => {
  return (
    <>
      <h1 className="text-center mt-8">Sign In</h1>
      <div className="mt-4 p-4 flex flex-col items-center justify-center gap-4">
        <button className="flex items-center border px-6 py-3 rounded-full gap-3 hover:bg-slate-100/25 transition">
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
        <button className="flex items-center border px-6 py-3 rounded-full gap-3 hover:bg-slate-100/25 transition">
          <span>
            <Image
              src={"/google-logo.svg"}
              height={30}
              width={30}
              alt="github-logo"
            />
          </span>
          Sign In with Google
        </button>
      </div>
    </>
  );
};

export default SignInBtns;
