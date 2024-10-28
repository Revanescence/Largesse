import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='bg-black text-white flex justify-between items-center px-4 h-16'>
        <div className='logo font-bold text-lg flex justify-center items-center'>
          <span>
            <img src="/cookie.webp" width={40} alt="" />
          </span>
            Largesse</div> 
    {/* <ul className='flex justify-between gap-4' >
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul> */}

      <div>
        <Link href={"/login"}>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Login 
        </button>
        </Link>
      </div>
    </nav> 
  )
}

export default NavBar
