import React from 'react';
import './UserDetail.css';
//bootstrap
import Alert from 'react-bootstrap/Alert';
//font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBriefcase, faEnvelope, faMobileAlt, faGlobe } from '@fortawesome/free-solid-svg-icons'

const UserDetail = (props) => {
    const user = props.user;

    const userDetailMarkup = Object.keys(user).length > 0 ?(
        <div className="user-info">
            
            <img src={user.picture} alt="user profile picture"></img>
            <h3>{ user.name }</h3>
            <h5>Age: {user.age} Years old.</h5>
            <h5><FontAwesomeIcon icon={faEnvelope} /> { ` ${user.email}` }</h5>
            <h5><FontAwesomeIcon icon={faMapMarkerAlt} />{ ` ${user.address.street}, ${user.address.city}, zipcode - ${user.address.zipcode}`}</h5>
            <h5><FontAwesomeIcon icon={faBriefcase} />{ ` ${user.company.name}`}</h5>
            <h5><FontAwesomeIcon icon={faMobileAlt} />{ ` ${user.phone}`}</h5>
            <h5><FontAwesomeIcon icon={faGlobe} />{ ` ${user.website}`}</h5>
            <h5>{ `Yearly Income: $${user.yearlyIncome}`}</h5>
        
        </div>
    ):(
        <Alert variant="danger">
            Select a user first!
        </Alert>
    )

    return (
        <div className="user-detail">
            <h2>User Details</h2>
            <br/>
            {userDetailMarkup}
        </div>
    );
};

export default UserDetail;