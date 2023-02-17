import React, { useState } from 'react'
import './ChatList.css'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ModeCommentIcon from '@material-ui/icons/ModeCommentOutlined';
import CloseOutlined from '@material-ui/icons/CloseOutlined';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import SendIcon from '@material-ui/icons/Send';
import { useSelector } from 'react-redux';


const ChatList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isChatsOpen, setIsChatOpen] = useState(false);
    const { users } = useSelector(state => state.users);
    const [chatWith, setChatWith] = useState('')

    const handleChatBarClick = () => {
        setIsOpen(!isOpen);
    };
    const handleViewChats = (name) => {
        setChatWith(name)
        setIsChatOpen(true);
    }
    return (
        <>
            {isChatsOpen &&
                <div className="chat-history">
                    <div className="chatlist-btn">
                        <div className="title">
                            <span>{chatWith}</span>
                        </div>
                        <div>
                            <span className='me-2'><KeyboardArrowDown  onClick={()=>setIsChatOpen(false)}/></span>
                            <span><CloseOutlined onClick={()=>setIsChatOpen(false)}/></span>
                        </div>
                    </div>
                    <div className="chat-list">
                        <ul className='message'>
                            <li className='self'>Lorem ipsum dolor sit amet, consectetur</li>
                            <li className='self'>Lorem ipsum dolor sit</li>
                        </ul>
                        <div className="time">
                            <span>9:16 AM</span>
                        </div>
                        <ul className="message">

                            <li className='other'>Lorem ipsum dolor</li>
                            <li className='other'>Lorem ipsum</li>
                        </ul>
                    </div>
                    <div className="msg">
                        <div className="txt-box d-flex">
                            <input type="text" />
                            <i><SendIcon style={{color: '#3874ba'}}/></i>
                        </div>
                    </div>
                </div>}
            <div className="chats">
                <div className="chatlist-btn" onClick={handleChatBarClick}>
                    <div className="title">
                        <ModeCommentIcon style={{background: 'transparent'}}/>
                        <span>Chats</span>
                    </div>
                    <span><KeyboardArrowUpIcon/></span>
                </div>
                {isOpen &&
                    <div className="user-list">
                        <ul>
                            {users.map((values)=>{
                            return(
                                <li onClick={()=>handleViewChats(values.name)}>
                                    <div className="chat-user">
                                        <img src={values.profilepicture} width='20px' alt="" />
                                        <label>{values.name}</label>
                                    </div>
                                    <div className="circle"></div>
                                </li>
                                )
                            })}
                        </ul>
                    </div>}
            </div>
        </>
    )
}

export default ChatList