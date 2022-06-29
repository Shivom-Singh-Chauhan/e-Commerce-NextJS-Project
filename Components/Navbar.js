import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className = 'flex flex-col md:flex-row md:justify-start justify-between items-center py-2'>
    <div className = "logo">
      <Image width = {200} height = {40} src = "/navLogo.png" alt = ""></Image>
    </div>
    <div className = "nav">
      <ul className = 'flex items-center space-x-2 font-bold md:text-xl'>
       <Link href={'/'}><a> <li>Hoodies</li></a></Link>
       <Link href={'/'}><a> <li>Stickers</li></a></Link>
       <Link href={'/'}><a> <li>Mugs</li></a></Link>
       <Link href={'/'}><a> <li>T shirt</li></a></Link>
      </ul>

    </div>
    
    </div>
  )
}

export default Navbar