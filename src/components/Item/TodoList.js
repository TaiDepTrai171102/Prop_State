import React from 'react'
import Task from './Task'
import './styel.css'
export default function TodoList() {
  return (  
          <div className='task'>
              <div className=' card-task' style={{borderRadius: '10 10 10 10'}} >
                  <Task title="Task1" creator="A" status=""/>
                  <Task title="Task2" creator="b" status=""/>
                  <Task title="Task3" creator="c" status=""/>
                  <Task title="Task4" creator="d" status=""/>   
        </div>
        </div>

  )
}
