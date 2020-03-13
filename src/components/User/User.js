import React from 'react';
import './User.css';

//Bootstrap
import { Row, Col, Button } from 'react-bootstrap';

//font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faUserMinus, faMapMarkerAlt, faBriefcase, faUsers } from '@fortawesome/free-solid-svg-icons'

const User = (props) => {

    const {id, name, age, picture, address:{ street, city, zipcode }, company} = props.user;
    const friends = props.friends;

    const addUserBtn = friends.find(friend => friend.id == id) > -1 ?(
                            <Button variant="outline-success" onClick = {()=>props.handleAddFriend(props.user)}><FontAwesomeIcon icon={faUsers} /> { ` Friend!` } </Button>
                        ):(
                            <Button variant="outline-success" onClick = {()=>props.handleAddFriend(props.user)}><FontAwesomeIcon icon={faUserPlus} /> { ` Add Friend` } </Button>
                        )

    return (
        <div className="user">
            <Row onMouseOver={() => {props.handleMouseOver(props.user)}}>
                <Col md={4}>
                    <img src={picture} alt="User image Thumbnail"/>
                </Col>
                <Col md={8}>
                    <Row>
                        <Col md={6}>
                            <h3>{name}</h3>
                            <h5>{ `${age} years old.` }</h5>
                            <h6><FontAwesomeIcon icon={faMapMarkerAlt} />{ ` ${street}, ${city}, zipcode - ${zipcode}`}</h6>
                            <h6><FontAwesomeIcon icon={faBriefcase} />{ ` ${company.name}`}</h6>
                        </Col>
                        <Col md={6}>
                            { addUserBtn}
                            
                        </Col>
                        
                    </Row>
                    
                </Col>
            </Row>

            
            
        </div>
    );
};

export default User;