import React from 'react'
import { useSelector } from 'react-redux'
import './Profile.css'

const Body = () => {
    const { loggedUser } = useSelector(state => state.users);
    return (
        <>
            <div className="conatiner-fluid pt-4">
                <div className="row">
                    <div className="col-5">
                        <div className="user-details">
                            <div className="img">
                                <img src={loggedUser?.profilepicture} width='150px' alt="" />
                            </div>
                            <div className="pb-2">
                                <div>{loggedUser?.name}</div>
                                <table>
                                    <tr>
                                        <td className='key'>Username :</td>
                                        <td className='txt'>{loggedUser?.username}</td>
                                    </tr>
                                    <tr>
                                        <td className='key'>e-mail :</td>
                                        <td className='txt'>{loggedUser?.email}</td>
                                    </tr>
                                    <tr>
                                        <td className='key'>Phone :</td>
                                        <td className='txt'>{loggedUser?.phone}</td>
                                    </tr>
                                    <tr>
                                        <td className='key'>Website :</td>
                                        <td className='txt'>{loggedUser?.website}</td>
                                    </tr>
                                </table>
                            </div>
                            <hr />
                            <div className="pt-2">
                                <div>Company</div>
                                <table>
                                    <tr>
                                        <td className='key'>Name :</td>
                                        <td className='txt'>{loggedUser?.company?.name}</td>
                                    </tr>
                                    <tr>
                                        <td className='key'>catchphrase :</td>
                                        <td className='txt'>{loggedUser?.company?.catchPhrase}</td>
                                    </tr>
                                    <tr>
                                        <td className='key'>bs :</td>
                                        <td className='txt'>{loggedUser?.company?.bs}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="address">
                            <div className="title">
                                <span className='key'>Address:</span>
                                <table>
                                    <tr>
                                        <td className='key'>Street :</td>
                                        <td className='txt'>{loggedUser?.address?.street}</td>
                                    </tr>
                                    <tr>
                                        <td className='key'>Suite :</td>
                                        <td className='txt'>{loggedUser?.address?.suite}</td>
                                    </tr>
                                    <tr>
                                        <td className='key'>City :</td>
                                        <td className='txt'>{loggedUser?.address?.city}</td>
                                    </tr>
                                    <tr>
                                        <td className='key'>Zipcode :</td>
                                        <td className='txt'>{loggedUser?.address?.zipcode}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="col-12">
                            <iframe width="100%" height="250" id="gmap_canvas" src={`https://maps.google.com/maps?q=${loggedUser?.address?.geo.lng},${loggedUser?.address?.geo.lat}=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            <div className="map-dire">
                                <label className='me-5'><span className='key'>Lat:</span>{loggedUser?.address?.geo.lat}</label>
                                <label><span className='key'>Lat:</span>{loggedUser?.address?.geo.lng}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body