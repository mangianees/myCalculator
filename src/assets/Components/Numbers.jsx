import Button from "./Button";
import App from "../../App";
import Clear from "./Clear";

function Numbers({handleClick,handleClear}) {

    return(
        
        <>
        <button value="0" className="NumberButtons" onClick={handleClick}>0</button>
        <button value="1" className="NumberButtons" onClick={handleClick}>1</button>
        <button value="2" className="NumberButtons">2</button>
        <button value="3" className="NumberButtons">3</button>
        <button value="4" className="NumberButtons">4</button>
        <button value="5" className="NumberButtons">5</button>
        <button value="6" className="NumberButtons">6</button>
        <button value="7" className="NumberButtons">7</button>
        <button value="8" className="NumberButtons">8</button>
        <button value="9" className="NumberButtons">9</button>
        <button value="C" className="NumberButtons" onClick={handleClear}>AC</button>

        </>
    )
}

export default Numbers