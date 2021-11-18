import React from 'react'
import { Link } from 'react-router-dom';

import '../../styles/Components/link.css'

function Logo() {
    return (
        <Link to="/" className='link hidden'>
            <div className="logo">
                <span className="first-letter">
                    S
                </span>
                earch User App
            </div>
        </Link>
    )
}

export default Logo
