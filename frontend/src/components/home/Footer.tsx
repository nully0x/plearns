import React from 'react'
import PlearnSm from '../common/PlearnSm'

const Footer = () => {
  return (
    <div className=' py-10 bg-white'>
        <div className='bg-container flex items-center justify-between'>
            <PlearnSm />
            <p className='text-lg f text-primary-gray ont-medium'>© 2023 PLEarn. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer