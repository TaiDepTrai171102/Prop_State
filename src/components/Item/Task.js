import React from 'react'
import { useState } from 'react'  
export default function Task(props) {
    const [status, setStatus] = useState('Start')
  return (
    <div className='Okia'>
        <h3>Title:{props.title}</h3>
        <h3>Creator:{props.creator}</h3>
        <h3>Status:{status}</h3>
        <button onClick={() => setStatus('Done')}>Done</button>
        <button onClick={() => setStatus('Doing')}>Doing</button>        
    </div>
  )
}
