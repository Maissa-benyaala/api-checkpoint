import React from 'react'

const Person = ({user}) => {
    return (
        <div className='card'>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <ul>
                <li>{user.address.street}</li>
                <li>{user.address.suite}</li>
                <li>{user.address.zipcode}</li>
            </ul>
        </div>
    )
}

export default Person