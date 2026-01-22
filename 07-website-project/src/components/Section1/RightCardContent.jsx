import React from 'react'

export const RightCardContent = (props) => {
  console.log(props)
  return (
    <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-bold' >{props.id+1}</h2>
        <div>
            <p className='text-xl leading-normal text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Aperiam delectus architecto omnis, dicta 
                </p>
                <div>
                    <button className='bg-blue-500  text-white font-semibold px-1 py-3 rounded-2xl'>{props.tag}</button>
                    <button><i className="ri-arrow-right-line"></i></button>
                </div>
        </div>
      </div>
  )
}

