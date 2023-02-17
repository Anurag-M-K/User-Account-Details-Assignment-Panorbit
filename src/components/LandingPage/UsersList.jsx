import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setLoggedUser, setUsers } from '../../redux/userSlice';

const UsersList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { users } = useSelector(state => state.users)
    useEffect(() => {
        (async () => {
            const users = await axios.get('https://panorbit.in/api/users.json')
            dispatch(setUsers(users.data?.users))
        })();
    }, []);

    const hanldeLogin = (id)=>{
        dispatch(setLoggedUser(users.filter((us) => us.id === id)[0]));
        navigate('/profile')
    }
    return (
        <div className="user">
            <div className='user-list'>
                <div className="container">
                    <div className="title">
                        <span>Select a account</span>
                    </div>
                    <div className="list">
                        <div className="col-lg-12">
                            <ul className="list-group">
                                {users.map((values) => {
                                    return (
                                        <li><button className='btn' onClick={() => hanldeLogin(values.id)}><img src={values.profilepicture} width='25px' alt="" /> <span>{values.name}</span></button></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersList