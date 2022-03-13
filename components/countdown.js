import React, { useEffect, useState } from 'react'

const Countdown = () => {
    const initial = 9000
    const [count, setCount] = useState(initial)
    const date = new Date().toLocaleTimeString()

    useEffect(() => {
        if (count > 0) {
            const interval = setInterval(() => {
                setCount(x => x - 1)
            }, 1000);
            return () => { clearInterval(interval) }
        }
    }, [count])

    return (
        <>
            {count ? <p>Countdown: {count}</p> : <></>}
        </>
    )
}


export default Countdown;
