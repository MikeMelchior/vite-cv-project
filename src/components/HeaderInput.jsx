import React, { useState } from 'react'
import InputContainer from './InputContainer'
import person from '../assets/person.png'
import chevron from '../assets/chevron.png'

export default function HeaderInput() {

  const [open, setOpen] = useState(false)

  return (
    <InputContainer>
      <div 
        className='flex w-full p-[24px]'
        onClick={() => {setOpen(!open)}}
      >
        <img src={person} alt="" className='w-[30px] h-auto mr-4'/>
        <h2 className='text-2xl'>General Information</h2>
        <img src={chevron} alt="" className={`w-[30px] ml-auto ${open ? 'rotate-180' : 'rotate-0'}`}/>
      </div>
    </InputContainer>
  )
}
