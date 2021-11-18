import React from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
 
import defaultUserImage from '../resources/img/default_user.png'

import '../styles/user.css'

function User() {
    const { id } = useParams();
    const user = useSelector(({ users }) => users.items.find(item => item.id === parseInt(id, 10)));
    const onImageEror = (e) => {
        e.target.onerror = null; 
        e.target.src="../resources/img/default_user.png";
        //e.target.src={defaultUserImage}
    }

    return (
        <>
        {user &&
            <div className="user-profile">
                <div className="user-info">
                    <img 
                        className="user-photo"
                        src={user.image || defaultUserImage} 
                        alt="User"
                        onError={(e) => onImageEror(e)} />
                    <div className="user-main-info">
                        <h1>{user.username}</h1>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </div>
                </div>
                <div className="user-company">
                    <h2>Company: {user.company.name}</h2>
                    <p>{user.company.catchPhrase}</p>
                </div>
            </div>
        }
        </>
    )
}

export default User
