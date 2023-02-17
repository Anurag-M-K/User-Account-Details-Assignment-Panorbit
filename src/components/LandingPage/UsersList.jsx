import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const UsersList = () => {
    const [userData, setUserData] = useState([]);
    useEffect(()=>{
        (async()=>{
            const users = await axios.get('https://panorbit.in/api/users.json')
            setUserData(users.data?.users)
        })();
    },[]);
    console.log(userData);
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
                                {userData.map((values)=>{
                                return(
                                    <li><Link to='/profile' ><img src={values.profilepicture} width='25px' alt="" /> <span>{values.name}</span></Link></li>
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