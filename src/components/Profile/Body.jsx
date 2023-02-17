import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../SideBar/Sidebar'
import './Profile.css'

const Body = () => {
    return (
        <>
            <div className="conatiner-fluid pt-4">
                <div className="row">
                    <div className="col-5">
                        <div className="user-details">
                            <div className="img">
                                <img src="../Public/Assets/avatar.png" width='150px' alt="" />
                            </div>
                            <div className="pb-2">
                                <div>Jibi George</div>
                                <table>
                                    <tr>
                                        <td className='key'>Username :</td>
                                        <td className='txt'>Jibi</td>
                                    </tr>
                                    <tr>
                                        <td className='key'>e-mail :</td>
                                        <td className='txt'>jibiyyan@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td className='key'>Phone :</td>
                                        <td className='txt'>8893482869</td>
                                    </tr>
                                    <tr>
                                        <td className='key'>Website :</td>
                                        <td className='txt'>www.google.com</td>
                                    </tr>
                                </table>
                            </div>
                            <hr />
                            <div className="pt-2">
                            <div>Company</div>
                                <table>
                                    <tr>
                                        <td className='key'>Name :</td>
                                        <td className='txt'>Jibi</td>
                                    </tr>
                                    <tr>
                                        <td className='key'>catchphrase :</td>
                                        <td className='txt'>jibiyyan@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td className='key'>bs :</td>
                                        <td className='txt'>8893482869</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="address">
                            <div className="title">
                                <span>Address:</span>
                                <table>
                                    <tr>
                                        <td className='key'>Street :</td>
                                        <td className='txt'>Jibi</td>
                                    </tr>
                                    <tr>
                                        <td className='key'>Suit :</td>
                                        <td className='txt'>jibiyyan@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td className='key'>City :</td>
                                        <td className='txt'>8893482869</td>
                                    </tr>
                                    <tr>
                                        <td className='key'>Zipcode :</td>
                                        <td className='txt'>8893482869</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body