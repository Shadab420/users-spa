import React from 'react';
import './Friend.css';
import Table from 'react-bootstrap/Table';

const Friend = (props) => {

    const friends = props.friends;

    return (
        <div className="friends">
            <h2>My Friends</h2>
            <div className="friends-table">
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Total Friends</th>
                            <th>Total Yearly Income (All friends)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{friends.length}</td>
                            <td>${ friends.reduce((total,friend) => total+ Number(friend.yearlyIncome), 0) }</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <div className="friends-div">
                <h3>Current Friends</h3>

                {
                    friends.map((friend, index) => <h5>{friend.name}</h5>)
                }
                
            </div>
        </div>
    );
};

export default Friend;