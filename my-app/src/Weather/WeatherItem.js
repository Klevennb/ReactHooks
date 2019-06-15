import React from 'react';
import { useState } from 'react';
import { Card } from 'antd';
function WeatherItem() {
    // const [count, setCount] = useState(0);

    return (
        <div className="Weather">
            <Card size="small" title="Specific Day" style={{ width: 300 }}>
                <p>Temperature High:</p>
                <p>Temperature Low:</p>
                <p>Precipitation Chance:</p>
            </Card>
        </div>
    );
}

export default WeatherItem;