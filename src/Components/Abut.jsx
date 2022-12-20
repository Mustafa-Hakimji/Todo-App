import React from 'react'
import { Link } from 'react-router-dom'

const Abut = () => {
    return (
        <>
            <div className="container mt-5 text-center">
                <h1>Hi,</h1>
                <h1>I Mustafa Hakimji 'Web Developer'</h1>
                <p>wecomes you all to my app where I have created a app where you can add you daily tasks / Todo's. and can focus on your work as. you can add as many toso's you want to add and after you done with the task you can remove them as well.</p>

                <h2>If you find any sort of suggesstion you can mail me on <b>mustafa.hakimji@sims-indore.com</b></h2>
            </div>

            <Link to='/'>
                <button className='btn btn-success mr-auto'>Go back to Home</button>
            </Link>
        </>
    )
}

export default Abut