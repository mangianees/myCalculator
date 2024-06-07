import { useState } from 'react'
import Panel from './assets/Components/Panel'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const handleClick =(value)=>{
    return setInput(()=>{
      return  input + value.target.value.toString();
    })

  }

  const handleClear =(value)=>{
    setInput('');
    setResult('');

  }

  const handleResult =(value)=>{
    
    const evalResult = eval(input);
    setInput('')
    setResult(evalResult)
  
  }


  return (
    
    <div className='display'>{input || result || '0'}
      <Panel handleClick={handleClick} handleClear = {handleClear} handleResult={handleResult}/>
    </div>
    
  )
}

export default App
