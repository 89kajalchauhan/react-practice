import React from 'react'
import { RightCardContent } from './RightCardContent'

const RightCard = () => {
  return (
    <div className='h-full w-60 rounded-3xl bg-pink-500  overflow-hidden relative' >
    <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1708333670828-d2e57b0ea1db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8" alt=""/>
      <RightCardContent />
    </div>
  )
}

export default RightCard

