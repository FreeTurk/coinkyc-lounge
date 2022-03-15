import Head from 'next/head'
import Image from 'next/image'
import Entry from '../components/Entry'
import Sidebar from '../components/Sidebar'
import { isMobile } from 'react-device-detect'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const data = require('../public/data.json');

export default function Home() {
  const [query, setQuery] = useState("")
  const [isMenu, setMenu] = useState()
  const [isInit, setInit] = useState(false)
  useEffect(() => {
    if (!isInit) {
    setMenu(!isMobile)
    setInit(true)
    } else if (isInit) {
    }
  }
  )
  console.log(isMenu)
  console.log(isMobile)
  
  console.log(data)
  return (
    <div className="p-0 h-full w-full flex flex-row">
    <FontAwesomeIcon icon={faBars} className='absolute text-black m-4 text-3xl z-50 transition-all hover:scale-110 cursor-pointer ' onClick={() => {
    setMenu(!isMenu)
    console.log(isMenu)
  }}/>
      <div className={(isMenu ? "w-full lg:w-80 z-40 h-full bg-slate-200 absolute" : "w-0") + ' drop-shadow-xl transition-all duration-700'}>
        <div className={(isMenu ? "block" : "hidden") + ' flex flex-col justify-center'}>
          <div className='w-full px-12 h-fit'>
            <Image src="/logo.png" alt="Logo" width="60%" height="40%" layout='responsive' objectFit='contain'></Image>
          </div>
          <div className='flex flex-col justify-items px-4 pt-8 gap-8'>
          <form onSubmit={async (event) => {
            event.preventDefault();
            setQuery(event.target.name.value);
        }
} className='flex h-8'>
          <input className='grow p-2' id="name" type="text" placeholder='Search by Name' />
          <button className='w-8' type="submit"><FontAwesomeIcon icon={faSearch} className="text-center" /></button>
          </form>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Lorem ipsum dolor
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Lorem ipsum dolor
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Lorem ipsum dolor
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Lorem ipsum dolor
        </button>
        </div>
      </div>
      </div>
      <div id='right' className={(isMenu ? 'w-info grow xl:pl-80' : 'w-full pl-0') + ' bg-[url(/bg.png)] bg-right bg-no-repeat overflow-y-scroll flex flex-col flex-wrap justify-center lg:content-center content-between'}>
        <div className='w-3/4 h-fit flex flex-col gap-3'>
        {
          data.filter(x => x.title.toLowerCase().includes(query.toLowerCase())).map((elementInArray, index) => (
              <Entry title={elementInArray.title} image={elementInArray.image} article={elementInArray.article} kyc={elementInArray.kyc} white={elementInArray.whitepaper}/>
            ) 
          )
        }
      </div>
      </div>
    </div>
  )
}
