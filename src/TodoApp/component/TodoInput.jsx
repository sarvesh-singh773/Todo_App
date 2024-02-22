
import React, { useContext, useRef } from 'react'
import { TodoObjcontext } from '../store/Todo-obj-store';

function TodoInput() {

   const {addNewItem}= useContext(TodoObjcontext)
  const newItem = useRef();
  const newDate  = useRef();

  // function getItem(event)
  // {
  //   setNewItem(event.target.value);
  // }
  // function getDate(event)
  // {
  //   setNewDate(event.target.value);
  // }

  function getRes(event)
  {
    event.preventDefault();
    const todoitem = newItem.current.value;
    const duedate = newDate.current.value;
    newDate.current.value = "";
    newItem.current.value = "";
    addNewItem(todoitem , duedate);
    
  }

  return (
    <form className='w-[100%] flex sm:gap-7 gap-3 ' onSubmit={getRes}>
        <div className='w-[40%] '>
            <input type="text" className='border-[1px] border-[gray] w-full rounded-md py-2 bg-[#d3c9c9]' placeholder='Enter todo item' ref={newItem}/>
        </div>
        <div className='w-[37%]'>
        <input type="date" className='border-[1px] border-[gray] w-full rounded-md py-2 bg-[#d3c9c9]' placeholder='Enter todo item' ref={newDate}/>
        </div>
        <div className='w-[15%] bg-[red] rounded-xl text-center'>
            <button className='text-[white] text-[20px] pt-1 '>Add</button>
        </div>
    </form>
  )
}

export default TodoInput

