import React from 'react'
import TableUsers from './tableUsers/tableUsers'
import './userStyle.css'

const User = () => {
  return (
    <div className='container'>
      <h1 className='containerUserTitle'>User List</h1>
      <TableUsers />
    </div>
  )
}

export default User;