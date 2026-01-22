import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
const App = () => {

   const users = [
    {
      img:'https://images.unsplash.com/photo-1708333670828-d2e57b0ea1db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8', 
      intro:'', 
      tag:'Satisfied',
    },
    { img:'https://plus.unsplash.com/premium_photo-1760613229742-7f91bb2180dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHdvbWFuJTIwd2l0aCUyMGxhcHRvcCUyMG9yJTIwYW55JTIwb3RoZXIlMjBkZXZpY2V8ZW58MHx8MHx8fDA%3D', 
      intro:'', 
      tag:'UnderServed',
    },
    { img:'https://plus.unsplash.com/premium_photo-1677260349949-113496dd0f1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHdvbWFuJTIwd2l0aCUyMGxhcHRvcCUyMG9yJTIwYW55JTIwb3RoZXIlMjBkZXZpY2V8ZW58MHx8MHx8fDA%3D', 
      intro:'', 
      tag:'UnderBanked',
    },
   ]

  return (
    <div>
      <Section1 users = {users} />
      <Section2 />
    </div>
  )
}
export default App