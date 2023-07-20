import React, { useState } from 'react'
import InputContainer from './InputContainer'
import chevron from '../assets/chevron.png'
import gradCap from '../assets/grad-cap.png'


export default function EducationInput() {
  const [open, setOpen] = useState(false)
  return (
    <InputContainer>
    <div 
      className='flex w-full p-[24px]'
      onClick={() => {setOpen(!open)}}
    >
      <img src={gradCap} alt="" className='w-[30px] h-auto auto mr-4'/>
      <h2 className='text-2xl'>General Information</h2>
      <img src={chevron} alt="" className={`w-[30px] ml-auto ${open ? 'rotate-180' : 'rotate-0'}`}/>
    </div>
  </InputContainer> 
  )
}
