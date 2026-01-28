/*import React, { useState } from 'react'

const App = () => {


  const [num, setnum] = useState('kajal')

  //let a = 20;
 /*function changea(){
  //console.log(a);
      //a--
 //console.log(a);
 }

   function changeNum(){
    setnum(40)
   }





  return (
    <div>
      <h1>Value of num is {num} </h1>
      <button onClick={changeNum}>Click</button>
    </div>
  )
}

export default <App></App>*/






import React, { useState } from 'react'

const App = () => {

   const [num, setnum] = useState(10)
    
   function increaseNum() {
      //console.log('increaseing');
      setnum(num+1)
      
   }
    
   function decreaseNum() {
      //console.log('decreaseing');
      setnum(num-1)
      
   }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>

    </div>
  )
}

export default App