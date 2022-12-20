import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

const Home = () => {

    let initTodo
    if (localStorage.getItem('todos') === null) {

        initTodo = [];


    } else {
        initTodo = JSON.parse(localStorage.getItem('todos'));
    }

    const onDelete = (todo) => {
        console.log('I am on delete of todo', todo)
        // let index = todos.indexOf(todo);
        // todos.splice(index,1); Deleting this way in React does not work

        setTodos(todos.filter((item) => {
            return item !== todo;
        }));

        localStorage.setItem('todos', JSON.stringify(todos));
    }


    const addTodo = (title, desc) => {
        let sno;
        if (todos.length == 0) {
            sno = 1
        } else {
            sno = todos[todos.length - 1].sno + 1
        }
        const myTodo = {
            sno: sno,
            title: title,
            desc: desc,
        }
        setTodos([...todos, myTodo])
    }
    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    return (
        <>


            <AddTodo addTodo={addTodo} />
            <TodoList todo={todos} onDelete={onDelete} />

        </>
    )
}

export default Home