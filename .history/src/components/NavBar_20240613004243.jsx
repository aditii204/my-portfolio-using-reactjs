import React from 'react'
import {FaBars , FaTimes } from 'react-icons/fa'

const NavBar = () => {

    const links =[
    {
      id: 1,
      link: 'home'
    },
    {
        id: 1,
        link: 'home'
      },


    ]
  return (
    <div className="flex justify-between px-4 items-center w-full h-20 text-white bg-black fixed">
       <div>
        <h1 classNAme="text-5xl font-extralight ml-2">ADiti</h1>
       </div>
       <ul className="flex">
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 " >Home</li>
        <li className="">Home</li>
        <li className="">Home</li>
       </ul>
    </div>
  )
}

export default NavBar;