// import React, { useState } from 'react'

// function Counter() {

//   const [mashina, setMashina] = useState('spark')
//   const [counter, setCounter] = useState(0)

//   const increment = () => {
//     setCounter(counter + 1)
//   }

//   const decrement = () => {
//     setCounter(counter - 1)
//   }

//   const degree = () => {
//     setCounter(counter ** 2)
//   }
//   const upgrade = () => {
//     setMashina('Audi')
//   }

//   return (
//     <div>
//       <span>{mashina}</span>
//       <button onClick={upgrade}>Change</button>
//       <br />
//       <button onClick={increment}>+</button>
//       <span>{counter}</span>
//       <button onClick={decrement}>-</button>
//       <button onClick={degree}>**</button>
//     </div>
//   )
// }

// export default Counter

import React, { useState } from 'react'

export default function Championat() {

  const arr = [
    { jamoa: "Barcelona", },
    { jamoa: "Real Madrid", },
    { jamoa: "Chelsa", },
    { jamoa: "Manchester", },
    { jamoa: "Pahtakor", },
  ]

  const [jamoa, setJamoa] = useState("")

  function showWiner() {
    setJamoa("Real Madrid")
  }

  return (
    <div>
      <div>{jamoa}</div>
      <button className="showJamoa" onClick={showWiner}>Win</button>
    </div>
  )
}
