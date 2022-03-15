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
    <div className="group flex shadow-xl w-full hover:h-80 transition-all duration-500 h-14 bg-slate-400 shadow-2xl border-4 rounded-xl border-slate-500">
      <div className="h-full grow flex flex-col justify-center items-center transition-all duration-500 align-center">
        <div className="flex flex-row h-2/4 items-center px-4 w-full">
          <div className="group-hover:w-32 group-hover:h-32 w-10 h-10 transition-all duration-700 ease-in-out">
            <Image src={image} width={1000} height={1000} />
          </div>
          <div className="text-ellipsis overflow-ellipsis w-20 font-black group-hover:ml-8 mx-4 transition-all duration-700 ease-in-out text-xl leading-5 group-hover:leading-7">
            {title}
          </div>
          <div className="mx-4 flex-row flex gap-4 transition-all duration-700 ease-in-out">
            <div className="rounded-md text-xl font-bold bg-green-300 p-1 group-hover:p-3 text-green-900 shadow-lg hover:shadow-green-300/50 transition-all duration-700 ease-in-out">
              KYC
            </div>
            <div className="rounded-md text-xl font-bold bg-red-300 p-1 group-hover:p-3 text-red-900 shadow-lg hover:shadow-red-300/50 transition-all duration-700 ease-in-out">
              AUDIT
            </div>
          </div>
        </div>
        <div className="group-hover:block hidden flex h-1/4 justify-center align-center w-60 transition-all duration-500">
          <Link href={{ pathname: '/page', query: { title: title } }} className="p-4">
            <div className="rounded-lg font-bold text-2xl h-16 flex flex-col text-center cursor-pointer bg-slate-500 transition-all duration-500 align-center hover:scale-110
            hover:shadow-slate-400 shadow-md justify-center">
              Learn More
            </div>
          </Link>
        </div>
      </div>
      <div className="grow m-3 group-hover:m-8 text-ellipsis overflow-hidden">
        {article}
      </div>
    </div>
  );
}
