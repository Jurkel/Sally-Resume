// useEffect can be used for certain life-cycle methods
// componentDidMount
// componentDidUpdate
// componentWillUnmount

// Can also be thought as when side effects happen. Which side effects?
// Network request
// Manual DOM manipulation
// Even listeners or timeouts and intervals

import React, {useState, useEffect} from "react"
import randomcolor from 'randomcolor'

function App() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('')
    
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    useEffect(() => {
        setColor(randomcolor())
    }, [count])
    
    return (
        <div>
            <h1 style={{color: color}}>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default App