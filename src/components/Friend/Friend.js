import React from 'react';
import './Friend.css';

const Friend = (props) => {

    const friends = props.friends;

    return (
        <div className="friends">
            <h3>Total Friends: {friends.length}</h3>
        </div>
    );
};

export default Friend;