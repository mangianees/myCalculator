
function Panel({handleClick,handleClear,handleResult}) {

    return(
        
        <>
        <button value="0" className="NumberButtons" onClick={handleClick}>0</button>
        <button value="1" className="NumberButtons" onClick={handleClick}>1</button>
        <button value="2" className="NumberButtons" onClick={handleClick}>2</button>
        <button value="3" className="NumberButtons" onClick={handleClick}>3</button>
        <button value="4" className="NumberButtons" onClick={handleClick}>4</button>
        <button value="5" className="NumberButtons" onClick={handleClick}>5</button>
        <button value="6" className="NumberButtons" onClick={handleClick}>6</button>
        <button value="7" className="NumberButtons" onClick={handleClick}>7</button>
        <button value="8" className="NumberButtons" onClick={handleClick}>8</button>
        <button value="9" className="NumberButtons" onClick={handleClick}>9</button>
        <button value="." className="NumberButtons" onClick={handleClick}>.</button>
        <button value="C" className="NumberButtons" onClick={handleClear}>AC</button>
        <button value="+" className="NumberButtons" onClick={handleClick}>+</button>
        <button value="-" className="NumberButtons" onClick={handleClick}>-</button>
        <button value="*" className="NumberButtons" onClick={handleClick}>x</button>
        <button value="/" className="NumberButtons" onClick={handleClick}>/</button>
        <button value="=" className="NumberButtons" onClick={handleResult}>=</button>
        </>
    )
}

export default Panel