import { useState } from 'react'
import Numbers from './assets/Components/Numbers'
import Screen from './assets/Components/screen'
import './App.css'
import Clear from './assets/Components/Clear'

function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const handleClick =(value)=>{
    console.log(value.target.value);
    setInput(input + value)
  }

  const handleClear =(value)=>{
    console.log(value.target.value);
    setInput('');
    setResult('')
    
  }

  const handleResult =(value)=>{
    
  }

  return (
    <>

    <Screen />
    <Numbers handleClick={handleClick} handleClear = {handleClear}/>
    {/* <Clear clear={handleClear} /> */}


    </>
  )
}

export default App
