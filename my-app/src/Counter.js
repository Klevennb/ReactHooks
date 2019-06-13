// import "./styles.css";
import React from 'react';
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="Counter">
            <h2>You clicked {count} times!</h2>

            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Counter />, rootElement);
export default Counter;