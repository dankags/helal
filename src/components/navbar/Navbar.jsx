import { MoreHorizontal } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavbarDropDown from './NavbarDropDown'

const navlinks=[
    {
        name:"Home",
        href:"/"
    },
    {
        name:"Bos Items",
        href:"/"
    },
      {
        name:"Category",
        href:"/"
    },
    {
        name:"Contact",
        href:"/contact"
    },
]

const Navbar = () => {

  return (
    <div className="w-screen h-[80px] flex items-center justify-between px-3 bg-transparent">
      
       <div className="w-2/12 flex items-center justify-center">
       <Link href="/">
      <Image src={"/bar-logo.png"} alt={"logo.png"} width={50} height={50} className="object-cover"/>

        </Link>
       </div>
       <div className="w-6/12 flex items-center justify-evenly gap-3">
         {navlinks.map((item,i)=>
         <Link key={i} href={item.href} className="font-[family-name:var(--font-montserrat)] font-medium  text-white">{item.name}</Link>
        )}
       </div>
       <div className="flex-1 flex items-center justify-center gap-3">
        <input type="text" name="search" placeholder="Search" className="px-3 py-2 rounded-3xl ring-2 ring-neutral-300 "/>
        <NavbarDropDown>
        <button className="p-2 bg-transparent hover:bg-neutral-200 active:bg-neutral-100 rounded-full"><MoreHorizontal size={20}/></button>
        </NavbarDropDown>
       </div>
    </div>
  )
}

export default Navbar