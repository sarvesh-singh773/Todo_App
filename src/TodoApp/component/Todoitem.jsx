import React from 'react'

function Todoitem(props) {
  return (
    <div className='w-[100%] flex gap-7 border-b-[1px] border-[gray]'>
        <div className='w-[40%] my-3'>
            <h1 className='text-[25px]'>{props.item.item}</h1>
        </div>
        <div className='w-[37%] my-3'>
            <h1 className='text-[25px]'>{props.item.date}</h1>
        </div>
        <div className='w-[15%] bg-[green] rounded-xl my-3 text-center'>
            <button className='text-[white] text-[18px] pt-1 '
              onClick={()=>props.HandalRemove(props.index)}
            >Remove</button>
        </div>
    </div>
  )
}

export default Todoitem