'use client'
import { SignIn, SignUp,useUser } from "@clerk/nextjs";
import React from "react";
import { useEffect } from "react";


const Page = () => {

 
  
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-[#f5ba13] h-screen">
        <SignUp appearance={{
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
