import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const data = require("../public/data.json");

export default function Home() {

  const router = useRouter();
  var filtered = data.filter((item) => item.title == router.query.title);
  
  return (
    <div className="w-full h-full p-0">
      <div className="bg-[url(/bg.png)] justify-center flex items-center bg-right-bottom w-full h-full bg-no-repeat">
        <div className="overflow-scroll scrollbar-none w-5/6 h-5/6 bg-slate-400 rounded-2xl shadow-xl flex flex-col">
          <Link href={"/"}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="absolute text-3xl m-6 cursor-pointer hover:scale-110 transition-all"
            />
          </Link>
          <div className="flex px-16 pt-16 lg:pt-0 lg:flex-row lg:gap-4 gap-12 justify-between items-center lg:max-h-56 grow flex-col transition-all">
            <div className="lg:w-32 lg:h-32 h-48 w-48">
              <Image src={filtered[0] ? filtered["0"].image : ""} width={1000} height={1000} />
            </div>
            <div className="font-bold flex justify-center items-center gap-4">
              <div className="p-1 text-3xl">{filtered[0] ? filtered["0"].title : ""}</div>

              <div className="rounded-md text-xl font-bold bg-green-300 p-2 text-green-900 shadow-lg hover:shadow-green-300/50 transition-all duration-700 ease-in-out">
                KYC
              </div>
              <div className="rounded-md text-xl font-bold bg-red-300 p-2 text-red-900 shadow-lg hover:shadow-red-300/50 transition-all duration-700 ease-in-out">
                AUDIT
              </div>
            </div>
            <div className="font-bold text-2xl">
              <div className="w-48 h-auto">
                <Image src={filtered[0] ? filtered["0"].kyc : ""} width={900} height={675} />
              </div>
            </div>
          </div>
          <div className="p-16 lg:pt-0 pt-16 text-xl">
            {filtered[0] ? filtered["0"].article : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
