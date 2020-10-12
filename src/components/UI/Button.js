import React from 'react'
import './Button.css'

const Button = ({clicked, btnType, children}) => {
    return (
        <button 
        className={btnType} 
        onClick={clicked}>
            {children}
        </button>
    )
}

export default Button
