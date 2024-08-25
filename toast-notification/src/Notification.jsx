import React from 'react'
import "./Notification.css"
const Notification = ({type="info", message, onClose = () => {}}) => {
  return (
    <div className={`notification ${type}`}>
       <span>{message}</span>
       <span><button>close</button></span>
    </div>
  )
}

export default Notification