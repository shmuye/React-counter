import React from "react";
import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);
    function incrementCount() {
        setCount(count => count + 1)
    }
    function decrementCount() {
        setCount(count => count - 1)
    }
    function resetCount() {
        setCount(0)
    }
    return (
        <div className="container">
            <h1 className="counter">{count}</h1>
            <div className="btns">
                <button className="increment btn" onClick={incrementCount}>+</button>
                <button className="reset btn" onClick={resetCount}>reset</button>
                <button className="decrement btn" onClick={decrementCount}>-</button>
            </div>
        </div>
    )
}
export default Counter;