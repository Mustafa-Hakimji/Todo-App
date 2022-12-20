import React from 'react'

const Todo = ({ todo, onDelete }) => {
  return (
    <div className='container text-center'>
      <h5>{todo.title}</h5>
      <p>{todo.desc}</p>
      <button className='btn btn-danger btn-sm mb-3' onClick={() => { onDelete(todo) }} >Delete</button>
    </div>
  )
}

export default Todo