import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/Components/link.css'

function UserCard({user, className}) {
    return (
        <Link to={"/user/" + user.id} className='link hidden'>
            <div
                className={className}>
                <p>{user.name}</p>
            </div>
        </Link>
    )
}

export default UserCard
