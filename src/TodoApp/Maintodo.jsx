import React, { useState } from 'react'
import TodoHead from './component/TodoHead'
import TodoInput from './component/TodoInput'
import Todoitems from './component/Todoitems'
import Massage from './component/Massage'
import { TodoObjcontext } from './store/Todo-obj-store'

function Maintodo() {
    

    const [obj , setObj] = useState([]);

    function addNewItem(todoitem , duedate)
    {
      //console.warn(todoitem , duedate);
      if(todoitem === "" && duedate === "")
      {
        alert("Please enter the todo item and duedate");
      }
      else
      {
        let newArr = [...obj , {item:todoitem , date:duedate}];
         setObj(newArr);
      }
      
    }

    function removeItem(index)
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
    <TodoObjcontext.Provider value={{obj , addNewItem , removeItem}}>
    <div className='w-[100%] h-[100vh] flex justify-center'>
        <div className='w-[50%] border-2 border-[gray] rounded-2xl p-[30px]'>
            <TodoHead />
            <TodoInput />
            <Massage/>
            <Todoitems />
        </div>
    </div>
    </TodoObjcontext.Provider>
  )
}

export default Maintodo;