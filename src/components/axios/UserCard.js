import axios from 'axios'
import React, { useEffect } from 'react'
import * as FaIcons from 'react-icons/fa'
import cardImg from './assets/cardImg.jpeg'

function UserCard(props) {
  const [active, setActive] = React.useState(false)
  const [posts, setPosts] = React.useState([])

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${props.user.id}`)
      .then((res) => {
        setPosts(res.data)
      })
  }, [])

  return (
    <div className='main center'>
      <div className="box center">
        <img className='user_img' src={cardImg} alt="" />
        <div>
          <p className="user_name">{props.user.username}</p>
          <p className="skill">{props.user.address.city}</p>
        </div>
        <div className="arr_container center" onClick={() => setActive(true)}>
          <FaIcons.FaArrowRight className='fas' />
        </div>
        <div className={active ? "left_container active" : "left_container off"}>
          <p>Skills</p>
          <div className="skills">
            <div>{props.user.email}</div>
            <div>{props.user.phone}</div>
            <div>{props.user.website}</div>
            <div>{props.user.name}</div>
          </div>
          <div className="icons">
            <FaIcons.FaGithub className='fab' />
            <FaIcons.FaLinkedin className='fab' />
            <FaIcons.FaYoutube className='fab' />
            <FaIcons.FaInstagram className='fab' />
          </div>
          <div className="cancel center" onClick={() => setActive(false)}>
            <FaIcons.FaTimes className='fas' />
          </div>
        </div>
      </div>
    </div >
  )
}

export default UserCard
