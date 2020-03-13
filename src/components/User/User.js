import React from 'react';
import './User.css';

//Bootstrap
import { Row, Col, Button } from 'react-bootstrap';

//font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const User = (props) => {

    const { name, address:{ city }, company} = props.user;

    

    return (
        <div className="user">
            <Row onMouseOver={() => {props.handleMouseOver(props.user)}}>
                <Col md={4}>
                    <img src="" alt="User image Thumbnail"/>
                </Col>
                <Col md={8}>
                    <Row>
                        <Col md={6}>
                            <h3>{name}</h3>
                            <p>Lives at: {city}</p> 
                            <p>Works at: {company.name}</p>
                        </Col>
                        <Col md={6}>
                            <Button variant="outline-success" onClick = {()=>props.handleAddFriend(props.user)}><FontAwesomeIcon icon={faPlusCircle} />Add Friend</Button>
                        </Col>
                        
                    </Row>
                    
                </Col>
            </Row>

            
            
        </div>
    );
};

export default User;