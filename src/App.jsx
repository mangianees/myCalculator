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
    console.log(value.target.value);
    setInput('');
    setResult('');

  }

  const handleResult =(value)=>{
    
    const evalResult = eval(input);
    setResult(evalResult)
  
  }


  return (
    <>
    <div><h2>{input}</h2></div>

    <div><h2>{result}</h2></div>
    
    <Panel handleClick={handleClick} handleClear = {handleClear} handleResult={handleResult}/>
    </>
  )
}

export default App
