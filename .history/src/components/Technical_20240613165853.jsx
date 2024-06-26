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


    const techs=[
        {
            id:1,
            src:html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src:reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id:5,
            src:tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id:6,
            src:nextjs,
            title: 'Nextjs',
            style: 'shadow-white'
        },
        {
            id:7,
            src:graphql,
            title: 'GraphQL',
            style: 'shadow-pink-500'
        },
        {
            id:8,
            src:Git,
            title: 'HTML',
            style: 'shadow-gray-500'
        },
    ]
  return (
    <div name="technical" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col  justify-center w-full h-full text-white">
        
        <div className=''>
            <p className="text-xl font-bold border-b-4 border-gray-500 p-2 inline">Technical skills</p>
            <p className="py-6"> These are the technology i have worked with.</p>
        </div>
      
       <div className="w-full grid grid-col-2 sm:grid-col-3 gap-8 text-center py-8 px-12 sm:px-0">
        <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
           <img src={html}alt="" className="w-20 mx-auto"></img> 
           <p className="mt-4">HTML</p>
    
        </div>
       </div>
      </div>
    </div>
  )
}

export default Technical