/*import React, { useState } from 'react'

const App = () => {
    
   const [num, setnum] = useState({user: 'kittuu', age:21})

   const btnClicked = () => {


    const newNum = {...num};
    newNum.user = 'kajal'
     

    setnum(newNum)
    //console.log('btnClicked');
    //etnum(num+5)
    //console.log(num);
    
    
   }


  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export*/


import React, { useState } from 'react'

const App = () => {
    

  
  const [num, setnum] = useState([10,20,30])

  const btnClicked = () => {
    const newNum = [...num]
    newNum.push(99)
  }
  return (
    <div>


     <h1>{num}</h1>
     <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App

