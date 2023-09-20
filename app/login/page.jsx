'use client'
import { SignIn, SignUp, useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";

const Page = () => {
  const {isSignedIn,isLoaded,user} = useUser()

   
  return (
    <div>
      <div className="flex items-center justify-center bg-[#f5ba13] h-screen">
        <SignIn appearance={{
          elements:{
            headerTitle:'text-red font-bold text-2xl',

            card:'scale-90 sm:scale-100 bg-lightRed',

            socialButtonsBlockButton:'border-[#f5ba13] border-2  font-bold text-2xl   group ',
            socialButtonsBlockButtonArrow:'text-white/100',

            formFieldLabel:'text-red text-lg',

            formFieldInput:'text-black text-lg bg-lightRed font-semibold',

            formButtonPrimary:'bg-[#f5ba13]/50 text-[16px] hover:bg-[#f5ba13]',

            footerAction:'hidden'
          }
        }} />
      </div>
    </div>
  );
};

export default Page;
