import Image from "next/image";
import { useState } from "react";
import { isMobile } from "react-device-detect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faShield,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Announcement({ title, article, date }) {
  return (
    <div className="group flex sm:flex-row flex-col shadow-md shadow-slate-600 w-full hover:h-160 sm:hover:h-80 transition-all duration-500 h-16 bg-slate-400 rounded-xl">
      <div className="h-full grow flex flex-col justify-center items-center transition-all duration-500 align-center">
        <div className="flex sm:flex-row sm:group-hover:gap-0 group-hover:gap-6 sm:group-hover:flex-row group-hover:flex-col lg:gap-0 h-2/4 lg:content-hover:justify-start justify-center items-center px-4 w-full">
          <div className="flex group-hover:flex-col items-center transition-all duration-700 ease-in-out group-hover:gap-6 group-hover:pt-8 md:group-hover:ml-8">
            <div className="text-ellipsis overflow-hidden h-10 group-hover:h-full w-20 font-black mx-4 transition-all duration-700 ease-in-out text-2xl leading-5 group-hover:leading-7">
              {title}
            </div>
            <p className="bg-blue-600 text-xl p-1 group-hover:p-3 rounded-xl shadow-md hover:shadow-blue-400 transition-all duration-700 ease-in-out">{date}</p>
          </div>
        </div>
      </div>
      <div className="grow m-4 group-hover:m-8 text-ellipsis overflow-hidden group-hover:overflow-scroll scrollbar-none sm:block hidden group-hover:block">
        {article}
      </div>
    </div>
  );
}
