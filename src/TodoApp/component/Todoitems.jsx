import React, { useContext } from 'react'
import Todoitem from './Todoitem'
import { TodoObjcontext } from '../store/Todo-obj-store';

function Todoitems() {

  const {obj} = useContext(TodoObjcontext)
  return (
    <div>
        {
          obj.map((item , index) =>(
            <Todoitem item={item} index ={index}/>
          ))
        }
    </div>
  )
}

export default Todoitems;