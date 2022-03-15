import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router'

const data = require('../public/data.json');

export default function Home() {
  const router = useRouter()
  var filtered = data.filter(item => item.title == router.query.title)
  console.log(filtered["0"].image)
    return (
        <div className="w-full h-full p-0">
            <div className="bg-[url(/bg.png)] justify-center flex items-center bg-right-bottom w-full h-full bg-no-repeat">
                <div className="w-5/6 h-5/6 bg-slate-400 rounded-2xl opacity-80 shadow-xl flex">
                    <div className="flex min-h-40">
                    <div className="w-32 h-32">
                        <Image
                        src={filtered["0"].image}
                        width={1000}
                        height={1000}
                        />
                    </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}