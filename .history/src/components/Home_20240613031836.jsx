import React from 'react'
import HeroImage from '../assets/heroImage.png'
import {MdKeyboardArrowRight} from "react-icon/md"
const Home = () => {
  return (
    <div name="home" 
    className=" h-screen w-full bg-gradient-to-b from-black to bg-gray-800">
       
       <div  className="max">
        <div>
            <h2>I am a front end Developer</h2>
            <p> I am a fresher exploring for a job role
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
      </div>
    </div>
  )
}

export default Home