
import { useState } from 'react'


function App() {

  const [color,setColor] = useState('black')

  function handleRed(){
    setColor('red')
  }
  function handleGreen(){
    setColor('green')
  }
  function handleBlue(){
    setColor('blue')
  }
  function handleYellow(){
    setColor('yellow')
  }
  function handleWhite(){
    setColor('white')
  }
  function handleBlack(){
    setColor('black')
  }
 

  return (
    
      <div className='w-full h-screen flex justify-center items-center' style={{backgroundColor:color}}  >
        <div className="bg-slate-100 w-fit p-3">
        <button className='px-4 bg-red-600' onClick={handleRed} >red</button>
        <button className='px-4 bg-green-600' onClick={handleGreen}>green</button>
        <button className='px-4 bg-blue-600' onClick={handleBlue}>blue</button>
        <button className='px-4 bg-yellow-600' onClick={handleYellow}>yellow</button>
        <button className='px-4 bg-slate-300 text-black' onClick={handleWhite}>white</button>
        <button className='px-4 bg-black ' onClick={handleBlack}>black</button>
        </div>
      </div>
    
  )
}

export default App
