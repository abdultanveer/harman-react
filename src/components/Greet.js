import React from 'react'

const Greet = props => {
    const {name,alias} = props
    
    return (
        <div>
            <h1> hello {name} your alias is {alias}</h1>
           
        </div>
    )
}
export default Greet