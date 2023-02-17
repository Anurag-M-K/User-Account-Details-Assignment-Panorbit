import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ChatList from '../components/chatlist/ChatList'
import Header from '../components/Header/Header'
import Sidebar from '../components/SideBar/Sidebar'
import ComingSoonPage from '../pages/ComingSoonPage'
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
                        <div className="col-12" style={{height: '50%'}}>
                            <Routes>
                                <Route exact path='/profile' element={<ProfilePage/>}/>
                                <Route exact path='/posts' element={<ComingSoonPage/>}/>
                                <Route exact path='/gallery' element={<ComingSoonPage/>}/>
                                <Route exact path='/todo' element={<ComingSoonPage/>}/>
                            </Routes>
                    <ChatList/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Routelinks