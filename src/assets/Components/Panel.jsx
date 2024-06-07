
function Panel({handleClick,handleClear,handleResult}) {

    return(
        
        <>
        <div className="container">
        <div className="calculator">
        <div className="NumberButtons">
                <button className='span-two' value="C"  onClick={handleClear}>AC</button>
                <button value="."  onClick={handleClick}>.</button>
                <button value="/"  onClick={handleClick}>/</button>
                <button value="8"  onClick={handleClick}>8</button>
                <button value="9"  onClick={handleClick}>9</button>
                <button value="7"  onClick={handleClick}>7</button>
                <button value="*"  onClick={handleClick}>x</button>
                <button value="4"  onClick={handleClick}>4</button>
                <button value="5"  onClick={handleClick}>5</button>
                <button value="6"  onClick={handleClick}>6</button>
                <button value="-"  onClick={handleClick}>-</button>
                <button value="1"  onClick={handleClick}>1</button>
                <button value="2"  onClick={handleClick}>2</button>
                <button value="3"  onClick={handleClick}>3</button>
                <button value="+"  onClick={handleClick}>+</button>
                <button className='span-two' value="0"  onClick={handleClick}>0</button>
                <button className='span-two' value="="  onClick={handleResult}>=</button>
            </div>
            </div>
            </div>
        </>
    )
}

export default Panel