import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import Sidebar from '../components/SideBar/Sidebar'
import ProfilePage from '../pages/ProfilePage'

const Routelinks = () => {
    return (
        <>
            <section>
                <div className="row body">
                    {/* SideBar */}
                    <div className="col-2 sidebar-content">
                        <Sidebar/>
                    </div>
                    <div className="col-10">
                        {/* Header */}
                        <div className="col-12">
                            <Header/>
                        </div>
                        {/* RouteLink */}
                        <div className="col-12">
                            <Routes>
                                <Route exact path='/profile' element={<ProfilePage/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Routelinks