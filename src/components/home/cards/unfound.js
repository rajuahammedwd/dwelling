"use client";
import { useRouter } from "next/navigation";
import React from "react";

const UnfoundComp = () => {
  const router = useRouter();
  const handleRoute = () => {
    router.push("/");
  };
  return (
    <div id="notfound" style={{ height: "calc(100vh - 400px)" }}>
      <div className="notfound">
        <div className="notfound-404">
          <h1>Oops!</h1>
        </div>
        <h2>Your query was not found!</h2>
        <div className="flex gap-5 items-center justify-center">
          <button
            onClick={handleRoute}
            type="button"
            className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
            <span>Back to home</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnfoundComp;
