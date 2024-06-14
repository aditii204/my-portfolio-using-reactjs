import React from 'react'
import HeroImage from '../assets/HeroImage.png.png'
import {MdKeyboardArrowRight} from "react-icons/md"
import {}
const Home = () => {
  return (
    <div 
    name="home" 
    className=" h-screen w-full bg-gradient-to-b from-black via-black bg-gray-800 text-white">
       
       <div  className="max-w-screen-lg mx-auto flex flex-col item-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
            <h2 className="*text-4xl sm:text-7xl font-bold text-white">
                I am a front end Developer
            </h2>
            <p className="text-gray-500 py-4 max-w-md"> 
                I am a fresher exploring for a job role
                as a front end developer..
            </p>
            <div>
                <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                    Portfolio
                    <span 
                    className="group-hover:rotate-90 duration-300">
                      <MdKeyboardArrowRight size={25} className="ml-1" />
                    </span>
                    
                </button>
            </div>
        </div>
        <div className="px-1 py-40 m-1"> 
            <img 
            src={HeroImage} 
            alt="my profile" 
            className=" rounded-full mx-auto  w-3/4 max-w-2xl py-5 md:w-full pe-8 shadow-xl  "/>
        </div>
      </div>
    </div>
  )
}

export default Home