import React, { useEffect } from 'react'

function Dummy({ metadata }) {
    useEffect(() => {
        console.log("Hello")
    }, []);
    return (
        <div>{JSON.stringify(metadata)}</div>
    )
}

export default Dummy