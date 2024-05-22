import React from "react";
import { cove } from "../assets/images";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden relative flex">
        <img
          src={cove}
          alt="beach ito"
          className="w-full h-full object-cover filter brightness-95"
        />
        <div className="flex absolute inset-0 justify-center items-center">
          <div className="flex items-center justify-center w-1/5 h-48 a text-center bg-white/10 backdrop-blur-xs rounded-lg p-8 shadow-lg">
            <div className=" text-3xl font-bold text-blue-700">Hello mark</div>
          </div>
        </div>
      </div>
    </>
  );
}
