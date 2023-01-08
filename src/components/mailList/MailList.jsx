import React from 'react'
import './MailList.css'
const MailList = () => {
  return (
   <div className="mail">
    <h1 className="mailTitle">
        Save Money Save Time !!!
    </h1>
    <span className='mailDesc'>
        Sign Up to get best deals
    </span>
    <div className="mailInputContainer">
        <input type="text" placeholder='Email' />
        <button>Subscribe</button>
    </div>
   </div>
  )
}

export default MailList