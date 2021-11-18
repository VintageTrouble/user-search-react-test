import React from 'react'

function UserCard({user, className}) {
    return (
        <div className={className}>
            <p>{user.name}</p>
        </div>
    )
}

export default UserCard
