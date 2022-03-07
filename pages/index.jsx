import Head from 'next/head'
import Image from 'next/image'
import Entry from '../components/Entry'
import { useState } from 'react'
import { isMobile } from 'react-device-detect'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import jsonQuery from 'json-query'

const data = require('../public/data.json');

export default function Home() {
  const [query, setQuery] = useState("")
  const [isMenu, setMenu] = useState(isMobile ? "hidden" : "block")
  jsonQuery('people[country.includes("Binance")].name', {
    data: data
  })
  return (
    <div className="p-0 h-full w-full flex flex-row">
    <FontAwesomeIcon icon={faBars} className='absolute text-black m-4 text-3xl z-50 transition-all hover:scale-110 cursor-pointer ' onClick={() => {
    isMenu == "hidden" ? setMenu("block") : setMenu("hidden")
    console.log(isMenu)
  }}/>
      <div className={'z-40 h-full w-full lg:w-[400px] bg-slate-200 absolute xl:relative drop-shadow-xl transition-all ease-in-out duration-300 ' + isMenu}>
        <div className='flex flex-col justify-center'>
          <div className='w-full px-12 h-fit'>
            <Image src="/logo.png" alt="Logo" width="60%" height="40%" layout='responsive' objectFit='contain'></Image>
          </div>
          <div className='flex flex-col justify-items px-4 pt-8 gap-8'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Investor Lounge
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Paid Endorsment
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Something
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Another something
        </button>
        </div>
      </div>
      </div>
      <div id='left' className='overflow-y-scroll w-fit grow flex flex-wrap justify-center'>
        {
          Object.keys(data).map((elementInArray, index) => (
              <Entry />
            ) 
          )
        }

      </div>
    </div>
  )
}
