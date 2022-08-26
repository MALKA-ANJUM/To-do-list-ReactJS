import React from 'react'
import './App.css'

const App = () => {
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br/>
          <h1>ToDo List</h1>
          <br/>
          <input type='text' placeholder='Add an Item' />
          <button>+</button>

          <ol>
            <li>buy apple</li>
          </ol>
        </div>
      </div>
    </>
  )
}

export default App
