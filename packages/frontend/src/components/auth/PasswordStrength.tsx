import React from 'react'
import PasswordLock from '../assets/PassowordLock'

const PasswordStrength = () => {
  return (
    <div className='p-4 flex gap-4 bg-[rgba(52,152,219,0.10)]'>
        <PasswordLock />
    <div className='flex flex-col'>
        <h3 className='text-primary-gray font-semi-bold leading-[23px]'>Your password needs to include:</h3>
    </div>
    </div>
  )
}

export default PasswordStrength