"use client";
import React from "react";
import Confetti from "react-confetti";
import { useRouter } from "next/navigation";
const SuccessComp = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className="font-semibold text-4xl">Congratulations!</h2>
        <p>Your payment has been successful!</p>
        <div className="flex gap-5">
          <button
            className="bg-[#222222] py-3 mt-5  px-10 text-white text-base font-medium rounded-md cursor-pointer"
            onClick={() => router.push("/")}
          >
            Visit Home Page
          </button>
          <button
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-300 py-3 mt-5  px-5 text-black text-base font-medium rounded-md cursor-pointer"
            onClick={() => router.push("/guest/dashboard/booking")}
          >
            View your booking
          </button>
        </div>
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      </div>
    </div>
  );
};

export default SuccessComp;
