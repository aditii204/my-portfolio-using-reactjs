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
    <div name="technical" className="bg-gradient-tob from-gary-800 to black w-full h-screen">
      <div>
        <div>
            <p>Technical skills</p>
            <p> These are the technology i have worked with.</p>
        </div>
      </div>


      <div>
        <div>
           <img src={html}alt=""></img> 
           <p>HTML</p>
    
        </div>
      </div>





    </div>
  )
}

export default Technical