import React, { useState } from 'react'

const AddTodo = (props) => {

    const [title,setTitle] = useState('');
    const [desc,setDesc] = useState('');

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title and Description both are required")
        }else{
        props.addTodo(title,desc);
        setTitle('');
        setDesc('');
        }
    };


    return (

        <div className='container'>
            <h3 className='text-center my-3'>Add a TODO</h3>

            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Todo</label>
                    <input type="text"  value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Todo's Task" />
                    <small id="emailHelp" className="form-text text-muted">Please enter your tasks which you want to perform today this app will keep them safe to remind you.</small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Description for your Todo's" />
                </div>

                <div className="form-check">
                </div>
                <button type="submit" className="btn btn-primary">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo