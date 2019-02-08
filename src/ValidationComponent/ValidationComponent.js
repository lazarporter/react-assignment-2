import React from 'react'

const validation = (props) => {
    let message = "Text too short"
    if (props.textLength > 4)
        message = "Text long enough"
    
    return( 
        <p>{message}</p>
    )
}
export default validation