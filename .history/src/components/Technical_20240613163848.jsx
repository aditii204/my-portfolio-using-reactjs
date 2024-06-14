import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Technical = () => {
  return (
    <div name="technical" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        
        <div>
            <p classNAme="text-xl font-bold border-b-4 border-gray-500 p-2 inline">Technical skills</p>
            <p classNAme="py-6"> These are the technology i have worked with.</p>
        </div>
      </div>


      <div className="w-full grid grid-col-2 sm:">
        <div>
           <img src={html}alt=""></img> 
           <p>HTML</p>
    
        </div>
      </div>





    </div>
  )
}

export default Technical