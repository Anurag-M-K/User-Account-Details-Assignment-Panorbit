import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to='/profile'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/posts'>Posts</Link>
                    </li>
                    <li>
                        <Link to='/gallery'>Gallery</Link>
                    </li>
                    <li>
                        <Link to='/todo'>ToDo</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar