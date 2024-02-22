import React, { useState } from 'react'
import TodoHead from './component/TodoHead'
import TodoInput from './component/TodoInput'
import Todoitems from './component/Todoitems'

function Maintodo() {
    const objData = [
        {item:"Suger" , date:"01-02-2024"},
        {item:"Suger" , date:"01-02-2024"},
        {item:"Suger" , date:"01-02-2024"},
    ]

    const [obj , setObj] = useState(objData);

    function HandalInput(todoitem , duedate)
    {
      //console.warn(todoitem , duedate);
      let newArr = [...obj , {item:todoitem , date:duedate}];
      setObj(newArr);
    }

    function HandalRemove(index)
    {
       let newArr = [];
       for(let i=0; i<obj.length; i++)
       {
        if(i !== index)
        {
          newArr.push(obj[i]);
        } 
       }
       setObj(newArr);
    }
  return (
    <div className='w-[100%] h-[100vh] flex justify-center'>
        <div className='w-[50%] border-2 border-[gray] rounded-2xl p-[30px]'>
            <TodoHead />
            <TodoInput HandalInput={HandalInput}/>
            <Todoitems object = {obj} HandalRemove={HandalRemove}/>
        </div>
    </div>
  )
}

export default Maintodo;