import React from 'react'

function Person({ personKey }) {
    return (
        <div>
            <h2>
                I am {personKey.name}, my age is {personKey.age} i know {personKey.skill}
            </h2>
        </div>
    )
}

export default Person