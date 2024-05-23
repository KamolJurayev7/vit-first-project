// style
import './UserList.css'
import React from 'react';

const UserList = ({ users, deleteUser }) => {

    return (
        <div className='userList'>
            <div className='userList-container container'>
                {users.map((user) => {
                    return (
                        <div className='card' key={user.id}>
                            <div className='card-inner'>
                                <img
                                    src={user.image}
                                    alt={user.firstname}
                                    height={150}
                                    width={150}
                                />
                                <h3>{user.firstname} {user.lastname} , {user.age} age</h3>
                                <p>From:{user.from}</p>
                                <p>Job:{user.job}</p>
                                <p>Gender:{user.gender}</p>
                                <button onClick={()=>{deleteUser(user.id)}}>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default UserList;
