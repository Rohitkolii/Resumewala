import Link from 'next/link'
import React from 'react'
import Style from './Navbar.module.css'
import { IoLogIn } from "react-icons/io5";


const Navbar = () => {
  return (
    <nav className={Style.navbar}>
        <div>
            <h1><span style={{color: '#9f5bff'}}>Resume</span>wala<span style={{color: '#9f5bff'}}>.</span></h1>
            {/* <img src="images/logo.jpg" width={200} alt="" /> */}
        </div>
        <div>
            <ul>
                <Link href='/'>Home</Link>
                <Link style={{color: 'white'}} className={Style.active} href='/login'>Login <IoLogIn /></Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar