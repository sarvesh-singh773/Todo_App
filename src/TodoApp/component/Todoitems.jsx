import React from 'react'
import Todoitem from './Todoitem'

function Todoitems(props) {
  return (
    <div>
        {
          props.object.map((item , index) =>(
            <Todoitem item={item} HandalRemove={props.HandalRemove} index ={index}/>
          ))
        }
    </div>
  )
}

export default Todoitems;