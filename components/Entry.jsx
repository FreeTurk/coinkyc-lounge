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

export default function Entry({ title, image, article, kyc, white }) {
  return (
    <div className="group flex shadow-md shadow-slate-600 w-full hover:h-80 transition-all duration-500 h-14 bg-slate-400 rounded-xl">
      <div className="h-full grow flex flex-col justify-center items-center transition-all duration-500 align-center">
        <div className="flex sm:flex-row sm:group-hover:gap-0 group-hover:gap-6 sm:group-hover:flex-row group-hover:flex-col lg:gap-0 h-2/4 lg:content-hover:justify-start justify-center items-center sm:px-4 w-full">
          <div className="flex items-center">
          <div className="lg:group-hover:w-32 lg:group-hover:h-32 group-hover:h-24 group-hover:w-24 w-10 h-10 transition-all duration-700 ease-in-out hidden group-hover:block sm:block">
            <Image src={image} width={1000} height={1000} />
          </div>
          <div className="text-ellipsis overflow-ellipsis w-20 font-black group-hover:ml-8 mx-4 transition-all duration-700 ease-in-out text-2xl leading-5 group-hover:leading-7">
            {title}
          </div>
          </div>
          <div className="mx-4 flex-row flex gap-4 transition-all duration-700 ease-in-out">
            <div className="rounded-md text-xl font-bold bg-green-300 p-1 lg:group-hover:p-3 group-hover:p-1 text-green-900 shadow-lg hover:shadow-green-300/50 transition-all duration-700 ease-in-out">
              KYC
            </div>
            <div className="rounded-md text-xl font-bold bg-red-300 p-1 lg:group-hover:p-3 group-hover:p-1 text-red-900 shadow-lg hover:shadow-red-300/50 transition-all duration-700 ease-in-out">
              AUDIT
            </div>
          </div>
        </div>
        <div className="group-hover:block hidden flex h-1/4 justify-center align-center w-60 transition-all duration-500">
          <Link
            href={{ pathname: "/page", query: { title: title } }}
            className="p-4"
          >
            <div
              className="rounded-lg font-bold text-2xl h-16 lg:m-0 mt-8 flex flex-col text-center cursor-pointer bg-slate-500 transition-all duration-500 align-center hover:scale-110
            hover:shadow-slate-400 shadow-md justify-center"
            >
              Learn More
            </div>
          </Link>
        </div>
      </div>
      <div className="grow m-4 group-hover:m-8 text-ellipsis overflow-hidden sm:block hidden">
        {article}
      </div>
    </div>
  );
}
