import React from 'react'
import {FaBars , FaTimes } from 'react-icons/fa'

const NavBar = () => {

    const links =[
    {
      id: 1,
      link: 'home'
    },
    {
        id: 2,
        link: 'about'
    },
    {
        id: 3,
        link: 'portfolio'
    },
    {
        id: 4,
        link: 'project'
    },
    {
        id: 5,
        link: 'contact'
    },
    
    
    


]
  return (
    <div className="flex justify-between px-4 items-center w-full h-20 text-white bg-black fixed">
       <div>
        <h1 className="text-5xl font-bold ml-2">Aditi</h1>
       </div>
       <ul className="hidden md:flex">
        {links.map(({id , link}) => {
        <li 
            key={id} 
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200 " 
        >
            {link}
        </li>
        })}
       
        
       </ul>
       <div>
        <FaTimes
       </div>
    </div>
  )
}

export default NavBar;