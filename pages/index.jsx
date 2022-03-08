import Head from 'next/head'
import Image from 'next/image'
import Entry from '../components/Entry'
import { useState } from 'react'
import { isMobile } from 'react-device-detect'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const data = require('../public/data.json');

export default function Home() {
  const [query, setQuery] = useState("")
  const [isMenu, setMenu] = useState(isMobile ? true : false)
  console.log(data)
  return (
    <div className="p-0 h-full w-full flex flex-row">
    <FontAwesomeIcon icon={faBars} className='absolute text-black m-4 text-3xl z-50 transition-all hover:scale-110 cursor-pointer ' onClick={() => {
    setMenu(!isMenu)
    console.log(isMenu)
  }}/>
      <div className={(isMenu ? "w-0" : "w-full lg:w-[400px]") + ' z-40 h-full bg-slate-200 absolute drop-shadow-xl transition-all '}>
        <div className={(isMenu ? "hidden" : "block") + ' flex flex-col justify-center'}>
          <div className='w-full px-12 h-fit'>
            <Image src="/logo.png" alt="Logo" width="60%" height="40%" layout='responsive' objectFit='contain'></Image>
          </div>
          <div className='flex flex-col justify-items px-4 pt-8 gap-8'>
          <form onSubmit={async (event) => {
            event.preventDefault();
            setQuery(event.target.name.value);
        }
} className='flex h-8'>
          <input className='grow p-2' id="name" type="text" placeholder='Search by Name' autoComplete="name" />
          <button className='w-8' type="submit"><FontAwesomeIcon icon={faSearch} className="text-center" /></button>
          </form>
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
      <div id='right' className='pl-[400px] xl:pl-[400px] m-16 overflow-y-scroll w-fit grow flex flex-wrap justify-center'>
        {
          data.filter(x => x.title.toLowerCase().includes(query.toLowerCase())).map((elementInArray, index) => (
              <Entry title={elementInArray.title}/>
            ) 
          )
        }

      </div>
    </div>
  )
}
