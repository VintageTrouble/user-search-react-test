import React from 'react'

import '../styles/Components/button.css'

function Button({onClick, children}) {
    return (
        <>
            <button 
                className="btn"
                onClick={onClick}
            >
                {children}
            </button>
        </>
    )
}

export default Button
