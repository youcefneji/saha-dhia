import React from 'react'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='card'>
        <h2>Name : {props.user.name}</h2>
        <h3>Email : {props.user.email} </h3>
        <h4>Phone : {props.user.phone}</h4>
    </div>
  )
}

export default UserCard