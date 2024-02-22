import React, { useContext } from 'react'
import { TodoObjcontext } from '../store/Todo-obj-store'

function Massage() {

    const {obj} = useContext(TodoObjcontext)
  return (
    obj.length === 0 && <h1 className='text-center py-4 text-[30px] text-[red]'>List is Empty.</h1>
  )
}

export default Massage