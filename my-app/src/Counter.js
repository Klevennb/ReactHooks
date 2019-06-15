import React from 'react';
import { useState } from 'react';
import {Button} from 'antd';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="Counter">
            <h2>You clicked {count} times!</h2>

            <Button onClick={() => setCount(count - 1)}>Decrement</Button>
            <Button onClick={() => setCount(count + 1)}>Increment</Button>
        </div>
    );
}

export default Counter;