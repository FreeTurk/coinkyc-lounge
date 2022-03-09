import Image from 'next/image'
import { useState } from 'react'
import { isMobile } from 'react-device-detect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Entry({ title, image, article, kyc, white, menu }) {
    const [isExp, setExp] = useState(true)
    return (
        <div className={(isExp ? "w-[320px] h-[320px] cursor-pointer" : menu ? "h-infoh w-5/6 xl:w-3/4 mt-16 absolute z-30" : "h-infoh w-5/6 xl:w-[90%] mx-16 mt-16 absolute z-30") + ' flex m-16 bg-slate-200 rounded-2xl border-blue-300 border-2 drop-shadow-2xl transition-all ease-in-out duration-700'} onClick={() => {setExp(!isExp);}
    }>
            <div className='p-8 w-full overflow-hidden mb-8'>
                
                <div className={(isExp ? "text-xl sm:flex-row sm:gap-0 gap-4 flex-col" : "flex-col md:flex-row justify-center gap-8") + ' transition-all flex flex-row justify-between h-fit w-full items-center'}>
                    <Image src={image} alt="Logo" width={isExp ? 80 : 120} height={isExp ? 80 : 120} className="transition-all"/>
                    <div className={(isExp ? "text-xl flex-col" : "sm:flex-row flex-col justify-center sm:gap-8 gap-4") + ' flex  grow items-center'}>
                    <div className={(isExp ? "text-xl" : "text-5xl h-5/6 text-scroll") + " transition-allw-fit font-bold"}>{title}</div>
                    <div className={(isExp ? "text-md" : "text-2xl") + ' flex flex-row gap-4 justify-center'}><p className='bg-green-300 p-2 rounded-xl font-bold'>KYC</p>
                    <p className='bg-pink-300 p-2 rounded-xl font-bold'>SAFE</p></div>
                    </div>
                </div>
                <div className={(isExp ? "sm:h-44 h-24 pt-8" : " grow-1 text-scroll overflow-y-scroll pt-8 h-full") + " transition-all flex flex-col lg:flex-row gap-8"}>
                    <p className={(isExp ? "text-xl hidden" : "text-3xl flex order-2") + ' h-fit text-ellipsis overflow-hidden transition-all'}>
                    {article}
                    </p>
                    <div className={(isExp ? '' : 'order-1 flex-col')+' flex justify-center items-center gap-4 h-fit'}>
                    <div className={(isExp ? 'w-40' : 'w-90')+' transition-all duration-700'}>
                    <Image src={kyc} alt="Logo" width={300} height={225} className="transition-all"/>
                    </div>
                    <Link href={white} className={(isExp ? "block" : "hidden") + ' bg-slate-400 p-4 rounded-xl w-20 h-20 z-50'}>
                        <div className={(isExp ? '' : 'order-1 flex-col w-64')+" bg-slate-400 mr-4 p-4 rounded-xl w-20 h-20 text-white"}>
                        <FontAwesomeIcon icon={faArrowCircleRight}/>
                        <p className='font-black'>Docs</p>
                        </div>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
