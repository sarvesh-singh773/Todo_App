import React, { useContext } from 'react'
import { TodoObjcontext } from '../store/Todo-obj-store'

function Todoitem(props) {
  const {removeItem}= useContext(TodoObjcontext)
  return (
    <div className='w-[100%] flex sm:gap-7 gap-3 border-b-[1px] border-[gray]'>
        <div className='w-[40%] my-3'>
            <h1 className='sm:text-[25px] text-[20px]'>{props.item.item}</h1>
        </div>
        <div className='w-[37%] my-3'>
            <h1 className='sm:text-[25px] text-[20px]'>{props.item.date}</h1>
        </div>
        <div className='w-[15%] bg-[green] rounded-xl my-3 text-center'>
            <button className='text-[white] text-[18px] pt-1 '
              onClick={()=>removeItem(props.index)}
            >Remove</button>
        </div>
    </div>
  )
}

export default Todoitem