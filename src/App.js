import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './data/users.json';
import './App.css';

//Bootstrap
import { Container, Row, Col } from 'react-bootstrap';


//Components
import Header from './components/Header/Header';
import User from './components/User/User';
import UserDetail from './components/UserDetail/UserDetail';
import Friend from './components/Friend/Friend';


function App() {
  
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [count, setCount] = useState(0);
  const [friends, setFriends] = useState([]);

  
  

  useEffect(() => {
    const usersData = require('./data/users.json');
    setUsers(usersData.users);
  }, [])
  
  const handleMouseOver = (selectedUser) => {
    setCurrentUser(selectedUser);
  }

  const handleAddFriend = (newFriend) => {
    setCount(count+1);
    setFriends([...friends, newFriend]);

  }
  
  return (
    <div className="App">
      <Container fluid>
        <Header></Header>
        <Row>
          <Col md={3}>
            <Friend friends={friends}></Friend>
          </Col>
          <Col md={6}>
            <div className="users">
              <h2>Users List</h2>
              {
                users.map((user,index) => {

                  let isFriend = false;


                  return <User user={user} key={index} handleMouseOver={handleMouseOver} handleAddFriend={handleAddFriend} friends={friends}></User>  
                })
              }
            </div>
          </Col>
          <Col md={3}>
            <UserDetail user={currentUser}></UserDetail>
          </Col>
        </Row>
        
      </Container>
      
    </div>
  );
}

export default App;
