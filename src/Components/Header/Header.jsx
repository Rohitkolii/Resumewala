import React from 'react'
import Navbar from '../Navbar/Navbar'
import Link from 'next/link'
import Styles from './Header.module.css'

const Header = () => {
  return (
    <section>
        <Navbar />
        
        <header className={Styles.header}>
          <div>
            <span style={{textTransform: 'uppercase', color: '#9f5bff', fontWeight: 500}}>Welcome to Resumewala</span>
            <h1>Make Resume <span style={{color: '#9f5bff'}}>profesional</span></h1>
            <p>Build your resume with industries standard formates.</p>
            <Link href='/editor'>Create Resume </Link>
          </div>
        </header>
    </section>
  )
}

export default Header