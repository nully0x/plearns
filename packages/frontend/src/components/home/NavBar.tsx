import React, { useState } from 'react'
import BitcoinLogo from '../assets/BitcoinLogo'
import { navBarLinks } from '@/data/dummy'
import LinkBar from './LinkBar';
import { FilledButton } from '../common/Button';

const NavBar = () => {
    const [navBar] = useState(navBarLinks);
  return (
    <div className='flex w-full h-[100px] pt-10 px-4 xl:px-24 justify-between'>
       <BitcoinLogo /> 
       <div className='flex gap-6 '>
            {navBar.map(({link,text})=> <LinkBar text={text} link={link} />)}
       </div>

    <div>

    </div>

    <FilledButton>
        Signup
    </FilledButton>
    </div>
  )
}

export default NavBar