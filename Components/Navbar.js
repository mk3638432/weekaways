import React , {useState , useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {BsChatSquareDots} from 'react-icons/bs'
import Link from 'next/link'
import {
    FaFacebook,
    FaTwitter,
    FaGooglePlusG,
    FaInstagram
} from 'react-icons/fa'

const Navbar = () => {
    const [nav , setNav] = useState(false)

    const hamdleNav =() => {
        setNav(!nav)
    }
    console.log(nav)
  return (
    <div className='w-full  min-h[50px] flex justify-between
     items-center sticky top-0 z-10 text-white bg-gray-700/80 '>
        <ul className='font-bold hidden sm:flex px-4'>
       <li>
       <Link href="/">Home</Link>
       </li>
       <li>
       <Link href="/gallery">Gallery</Link>
       </li> <li>
       <Link href="/deals">Deals</Link>
       </li> <li>
       <Link href="/contact">Contact</Link>
       </li>
        </ul>
        <div className='flex  justify-center'>
            <FaFacebook className='mx-4' />
            <FaInstagram className='mx-4'/>
            <FaGooglePlusG className='mx-4'/>
            <FaTwitter className='mx-4'/>
        </div>
        <div className='sm:hidden z-10 '>
            <FaBars onClick={hamdleNav} size={20} className='mr-4 cursor-pointer'/>
        </div>
        <div className={nav ? 'md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 h-screen bg-black/90 px-4 py-7 flex flex-col w-full' : 
        'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
        <ul className='font-bold w-full h-full text-center py-10  '>
       <li className='text-2xl py-8'>
       <Link href="/">Home</Link>
       </li>
       <li className='text-2xl py-8'>
       <Link href="/gallery">Gallery</Link>
       </li> <li className='text-2xl py-8'>
       <Link href="/deals">Deals</Link>
       </li> <li className='text-2xl py-8'>
       <Link href="/contact">Contact</Link>
       </li>
        </ul> 
        </div>
    </div>
  )
}

export default Navbar