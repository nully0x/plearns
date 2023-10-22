import React from 'react'
import PasswordValid from '../assets/auth/PasswordValid'
import PasswordInvalid from '../assets/auth/PasswordInvalid'

const IndividualMatch = ({isValid, matchText}:{isValid: boolean, matchText: string}) => {
  return (
    <div className='flex gap-1 whitespace-nowrap items-center'>
        {isValid? <PasswordValid/>:<PasswordInvalid/>}
        <p className={`text-xs ${isValid?"text-primary-green":"text-light-neutral-6"}`}>
            {matchText}
        </p>

    </div>
  )
}

export default IndividualMatch