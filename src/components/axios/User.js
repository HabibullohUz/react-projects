import axios from 'axios';
import React, { useEffect, useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import UserCard from './UserCard';

function User() {

  const [users, setUsers] = useState([]);




  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/`)
      .then((res) => {
        console.log(res.data)
        setUsers(res.data)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div className='user_wrapper'>
      {users.map((user, index) => {
        return <UserCard user={user} id={++index} />
      })}
    </div>
  )

}
export default User