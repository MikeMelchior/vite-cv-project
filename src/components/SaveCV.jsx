import React from 'react'
import InputContainer from './InputContainer'
import downloadIcon from '../assets/download-icon.png'

function SaveCV() {
  return (
    <InputContainer>
        <div className='flex w-full items-center p-[24px]'>
          <h2 className='text-2xl'>Save your CV:</h2>
          <button className='flex items-center gap-4 ml-auto bg-teal-400 text-slate-900 rounded-full'> 
              <img src={downloadIcon} alt="" className='w-[30px]'/>
              DOWNLOAD
          </button>
        </div>
        
    </InputContainer>
  )
}

export default SaveCV