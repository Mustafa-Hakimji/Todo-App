import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {


    return (
        <>
            <div style={{ minHeight: '70vh' }} >

                <h1 className='text-center mt-5 mb-5'>Todo's List </h1>

                {props.todo.length === 0 ? (<h2 className='text-center'>No Todo's to display.</h2>) : props.todo.map((item, index) => {
                    return (<>
                        <TodoItem key={index} todo={item} onDelete={props.onDelete} /><hr />
                    </>
                    )
                })}


            </div>
        </>
    )
}

export default TodoList