import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {

    const [activeBtn,setActiveBtn] = useState('profile');

    const handleActiveBtn = (button)=> {
        setActiveBtn(button);
    }
   
return (
    <>
        <div className="sidebar">
            <ul className='sideBar-link'>
                <li className={activeBtn === "profile" ? "active" : ""} onClick={()=>handleActiveBtn('profile')}>
                    <Link to='/profile'>Profile</Link>
                </li>
                <li className={activeBtn === "posts" ? "active" : ""} onClick={()=>handleActiveBtn('posts')}>
                    <Link to='/posts'>Posts</Link>
                </li >
                <li className={activeBtn === "gallery" ? "active" : ""}  onClick={()=>handleActiveBtn('gallery')}>
                    <Link to='/gallery'>Gallery</Link>
                </li>
                <li className={activeBtn === "todo" ? "active" : ""} onClick={()=>handleActiveBtn('todo')}>
                    <Link to='/todo'>ToDo</Link>
                </li>
            </ul>
        </div>
    </>
)
}

export default Sidebar