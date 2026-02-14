import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="text-6xl font-bold font-mono text-white drop-shadow-md bg-white/20 backdrop-blur-md px-8 py-4 rounded-xl border border-white/30">
            {time.toLocaleTimeString()}
        </div>
    );
};

export default Clock;
