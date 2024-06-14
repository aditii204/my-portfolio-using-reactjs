import React from 'react'

const Contact = () => {
  return (
    <div>
        <div>
            <div>
                
            <p>Contact</p>
            <p>You can contact me through this form.</p>
            </div>
            <div>
                <form action="">
                <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact