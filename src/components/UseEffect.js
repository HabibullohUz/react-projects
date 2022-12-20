import React, { useEffect, useState } from 'react'

function UseEffect() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const [count, setCount] = useState(3)

  // useEffect(() => {

  // })



  // useEffect(() => {
  //   setInterval(() => {
  //     setTime(Date)
  //   }, 1000)
  // }, [])

  return (
    <div>{time}</div>
  )
}

export default UseEffect