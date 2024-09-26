"use client"
import React from 'react'
import { RiseLoader } from "react-spinners";

const RiseLoaderSpinner = () => {
  return (
    <div className=" h-screen w-full flex items-center justify-center bg-black-100">
      <RiseLoader color="#cbacf9" speedMultiplier={1} />
    </div>
  );
};

export default RiseLoaderSpinner;