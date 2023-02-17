import React from 'react'
import './Header.css'

const Header = () => {
  const profileMenu = () => {
    const togglemenu = document.querySelector('.menu');
    togglemenu.classList.toggle('active')
  }
  return (
    <>
      <div className="container-fluid">
        <div className="header" onClick={profileMenu}>
          <h5>Profile</h5>
          <div className="account d-flex">
            <img src="../public/Assets/avatar.png" width='30px' alt="" />
            <span>Jibi George</span>
          </div>
        </div>
        <div className="menu">
          <div className='img'>
            <img src="../Public/Assets/avatar.png" width="60px" alt="" />
          </div>
          <p className="name">Jibi George</p>
          <p className="email">jibiyyan@gmail.com</p>
          <ul className='user-list mt-2'>
            <li><img src="" alt="c" /><a href="#">jihvnbwd</a></li>
            <li><img src="" alt="c" /><a href="#">jihvnbwd</a></li>
            <li><img src="" alt="v" /><a href="#">jihvnbwd</a></li>
            <li><img src="" alt="d" /><a href="#">jihvnbwd</a></li>
            <li><img src="" alt="s" /><a href="#">jihvnbwd</a></li>
          </ul>
          <button className='btn btn-danger'>Sign out</button>
        </div>
      </div>
    </>
  )
}

export default Header