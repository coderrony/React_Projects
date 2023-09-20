import React from "react";

export default function Card({ obj }) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src={obj.img}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{obj.name}</h1>
        <p className="mt-2 text-sm text-gray-300">{obj.des}</p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
          View Profile →
        </button>
      </div>
    </div>
  );
}
