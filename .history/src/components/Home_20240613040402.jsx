import React from 'react'
import HeroImage from '../assets/HeroImage.png.png'
import {MdKeyboardArrowRight} from "react-icons/md"
const Home = () => {
  return (
    <div 
    name="home" 
    className=" h-screen w-full bg-gradient-to-b from-black to bg-gray-800 text-white">
       
       <div  className="max-w-screen-lg mx-auto flex flex-col item-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify">
            <h2>
                I am a front end Developer
            </h2>
            <p> 
                I am a fresher exploring for a job role
                as a front end developer..
            </p>
            <div>
                <button>
                    Portfolio
                    <span>
                      <MdKeyboardArrowRight/>
                    </span>
                    
                </button>
            </div>
        </div>
        <div>
            <img src={HeroImage} alt="my profile" className=" rounded-3xl mx-auto w-2/3 md:w-full"/>
        </div>
      </div>
    </div>
  )
}

export default Home