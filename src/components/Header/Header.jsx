import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { setLoggedUser } from '../../redux/userSlice';
import './Header.css'

const Header = () => {
  const dispatch = useDispatch();
  const profileMenu = () => {
    const togglemenu = document.querySelector('.menu');
    togglemenu.classList.toggle('active')
  }

  const { users } = useSelector(state => state.users);
  const { loggedUser } = useSelector(state => state.users);

  const changeLoggedUser = (id) => {
    dispatch(setLoggedUser(users.filter((us) => us.id === id)[0]));
  }
  return (
    <>
      <div className="container-fluid">
        <div className="header" onClick={profileMenu}>
          <h5>Profile</h5>
          <div className="account d-flex">
            <img src={loggedUser?.profilepicture} width='30px' alt="" style={{ borderRadius: '50%' }} />
            <span>{loggedUser?.name}</span>
          </div>
        </div>
        <div className="menu">
          <div className='img'>
            <img src={loggedUser?.profilepicture} width="60px" alt="" style={{ borderRadius: '50%' }} />
          </div>
          <p className="name">{loggedUser?.name}</p>
          <p className="email">{loggedUser?.email}</p>
          <ul className='user-list mt-2'>
            {users.map((values) => {
              return (
                <li onClick={() => changeLoggedUser(values.id)}><img src={values?.profilepicture} width="20px" alt="c" style={{ borderRadius: '50%' }} /><Link href="#">{values.name}</Link></li>
              )
            })}
          </ul>
          <Link to='/' className='btn btn-danger'>Sign out</Link>
        </div>
      </div>
    </>
  )
}

export default Header