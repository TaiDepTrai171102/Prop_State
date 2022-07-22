import React from 'react'
import { useState } from 'react'  
import './style.css'

export default function Task(props) {
    const [actionstatus,setActionstatus] = useState('New')
    const [status, setStatus] = useState('Start')
    const [color,setColor] = useState('orange')
  function handleAction(){
    if(status === 'Start' && actionstatus === 'New'){
        setStatus('Done')
        setActionstatus('Doing')
        setColor('yellow')
    }else if (status === 'Done' && actionstatus === 'Doing'){
        setStatus('Renew')
        setActionstatus('Done')
        setColor('#F88F14')
    }else if (status === 'Renew' && actionstatus ==='Done'){
        setStatus('Start')
        setActionstatus('New')
        setColor('green')
    }
  }
  return (
    <div className='Okia'> 
        <h6 style={{fontWeight: 'bold'}}>Title:{props.title}</h6>
        <h6>Creator:{props.creator}</h6>
        <h6 style={{color: color}}>Status:{actionstatus}</h6>
        <hr style={{border: '1px solid #675BF1'}} ></hr>
        <h6>Desscription:</h6>
        <span>This is a task , this is a task , this is a task </span>
        <button onClick={handleAction} style={{outline: 'none', border: 'none',background:'#675BF1',color:'white',borderRadius:10}}>{status}</button>        
    </div>
  
    
  )

}
