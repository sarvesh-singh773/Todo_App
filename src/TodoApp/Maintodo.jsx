import React, { useReducer, useState } from 'react'
import TodoHead from './component/TodoHead'
import TodoInput from './component/TodoInput'
import Todoitems from './component/Todoitems'
import Massage from './component/Massage'
import { TodoObjcontext } from './store/Todo-obj-store'

const todoItemsReducer = (currItem ,action) => {

     let newArr = currItem;
    if(action.type === "NEW_ITEM")
    {
      if(action.payload.todoitem === "" && action.payload.duedate === "")
      {
        alert("Please enter the todo item and duedate");
      }
      else
      {
        newArr = [...currItem , {item:action.payload.todoitem , date: action.payload.duedate}];
      }
    }
    else if(action.type === "DELETE_ITEM")
    {

    }
  
     return newArr;
}

function Maintodo() {
    
    const [obj , dispatchTodoItems] = useReducer(todoItemsReducer , []);
    //const [obj , setObj] = useState([]);

    function addNewItem(todoitem , duedate)
    {
      const newItemAction = {

        type : "NEW_ITEM",
        payload: {
          todoitem,
          duedate
        }
      }
      dispatchTodoItems(newItemAction);
      
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
        <div className='sm:w-[50%] border-2 border-[gray] rounded-2xl sm:p-[30px] p-[15px]'>
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