import React from 'react'

const Avatar = ({src, name}:{src:string, name:string}) => {
  return (
    <div>
    <div className='min-h-[40px] min-w-[40px] max-w-[40px] max-h-[40px]'>
        <img className='w-full h-full' src={src} />
    </div>
    <p>{name}</p>
    </div>
  )
}

export default Avatar