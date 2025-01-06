import React from 'react'

const InputRange = (props) => {
  return (
    <div className='flex flex-col items-start w-full gap-2'>
        <label htmlFor={props.name}>{props.label} <span className='flex items-center justify-center w-full h-full text-white bg-[#242940] rounded-md px-1.5'>{props.rangeValue}</span></label>
        <input onChange={props.handleRange} value={props.rangeValue} min={512} max={2048} name={props.name} type="range" id={props.name} className='w-full'/>
    </div>
  )
}

export default InputRange;