import React from 'react'

const Contact = () => {
  return (
    <div name="contact " className=""
    >
        <div>
            <div>
                
            <p>Contact</p>
            <p>You can contact me through this form.</p>
            </div>
            <div>
                <form action="" className="">
                <input
                 type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
                 <input
                 type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
                 <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
             <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact