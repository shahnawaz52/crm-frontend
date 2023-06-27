import React from 'react'
import './MessageHistory.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const MessageHistory = ({ message }) => {
    if(!message) return;
  return message.map((row, i) => (
    <div key={i} className='message-history mt-3'>
        <div className='send font-weight-bold text-secondary'>
           <div className='sender'>{row.messageBy}</div>
           <div className='date'>{row.date}</div> 
        </div>
        <div className='message'>{row.message}</div>
    </div>
  ))
}

export default MessageHistory