import Wrapper from '../Wrapper'
import React from 'react'
import Search from './Search'
import Image from 'next/image'
import Dropdown from './Dropdown'

export default function Navbar() {
  return (
    <div className='nav'>
        <div className='border-b-[1px] py-4'>
            <Wrapper>
                <div className='inner-nav'>
                <Image alt="logo" className="logo_image" src='/images/logo.png' height={100} width={100}/>
                  <Search />
                  <Dropdown />
                </div>
            </Wrapper>
        </div>
    
    </div>
  )
}
