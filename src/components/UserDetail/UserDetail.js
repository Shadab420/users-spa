import React from 'react';
import './UserDetail.css';
//font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBuilding } from '@fortawesome/free-solid-svg-icons'

const UserDetail = (props) => {
    const user = props.user;

    const userDetailMarkup = Object.keys(user).length > 0 ?(
        <div>
            <img src="" alt="user profile picture"></img>
            <h3>{ user.name }</h3>
            <h5><FontAwesomeIcon icon={faMapMarkerAlt} />{user.address.city}</h5>
            <h5><FontAwesomeIcon icon={faBuilding} />{user.company.name}</h5>
        </div>
    ):(
        <h2>No user selected!</h2>
    )

    return (
        <div className="user-detail">
            {userDetailMarkup}
        </div>
    );
};

export default UserDetail;