import React, { useState } from 'react'
import './ChatList.css'

const ChatList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isChatsOpen, setIsChatOpen] = useState(false);

    const handleChatBarClick = () => {
        setIsOpen(!isOpen);
    };
    const handleViewChats = ()=>{
        setIsChatOpen(!isChatsOpen);
    }
    return (
        <>
        {isChatsOpen &&
            <div className="chat-history">
                <div className="chatlist-btn">
                    <div className="title">
                        <span>Chats</span>
                    </div>
                    <div>
                        <span className='me-2'>^</span>
                        <span>X</span>
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
                    <i>+</i>
                    </div>
                </div>
            </div>}
            <div className="chats">
                <div className="chatlist-btn" onClick={handleChatBarClick}>
                    <div className="title">
                        <span>Chats</span>
                    </div>
                    <span>^</span>
                </div>
                {isOpen &&
                    <div className="user-list">
                        <ul>
                            <li onClick={handleViewChats}>
                                <div className="chat-user">
                                    <img src="../Public/Assets/avatar.png" width='20px' alt="" />
                                    <label>Jibi George</label>
                                </div>
                                <div className="circle"></div>
                            </li>
                            <li>
                                <div className="chat-user">
                                    <img src="../Public/Assets/avatar.png" width='20px' alt="" />
                                    <label>Jibi George</label>
                                </div>
                                <div className="circle"></div>
                            </li>
                            <li>
                                <div className="chat-user">
                                    <img src="../Public/Assets/avatar.png" width='20px' alt="" />
                                    <label>Jibi George</label>
                                </div>
                                <div className="circle"></div>
                            </li>
                            <li>
                                <div className="chat-user">
                                    <img src="../Public/Assets/avatar.png" width='20px' alt="" />
                                    <label>Jibi George</label>
                                </div>
                                <div className="circle"></div>
                            </li>
                            <li>
                                <div className="chat-user">
                                    <img src="../Public/Assets/avatar.png" width='20px' alt="" />
                                    <label>Jibi George</label>
                                </div>
                                <div className="circle"></div>
                            </li>
                            <li>
                                <div className="chat-user">
                                    <img src="../Public/Assets/avatar.png" width='20px' alt="" />
                                    <label>Jibi George</label>
                                </div>
                                <div className="circle"></div>
                            </li>
                            <li>
                                <div className="chat-user">
                                    <img src="../Public/Assets/avatar.png" width='20px' alt="" />
                                    <label>Jibi George</label>
                                </div>
                                <div className="circle"></div>
                            </li>
                            <li>
                                <div className="chat-user">
                                    <img src="../Public/Assets/avatar.png" width='20px' alt="" />
                                    <label>Jibi George</label>
                                </div>
                                <div className="circle"></div>
                            </li>
                            <li>
                                <div className="chat-user">
                                    <img src="../Public/Assets/avatar.png" width='20px' alt="" />
                                    <label>Jibi George</label>
                                </div>
                                <div className="circle"></div>
                            </li>
                            <li>
                                <div className="chat-user">
                                    <img src="../Public/Assets/avatar.png" width='20px' alt="" />
                                    <label>Jibi George</label>
                                </div>
                                <div className="circle"></div>
                            </li>
                            <li>
                                <div className="chat-user">
                                    <img src="../Public/Assets/avatar.png" width='20px' alt="" />
                                    <label>Jibi George</label>
                                </div>
                                <div className="circle"></div>
                            </li>
                            <li>
                                <div className="chat-user">
                                    <img src="../Public/Assets/avatar.png" width='20px' alt="" />
                                    <label>Jibi George</label>
                                </div>
                                <div className="circle"></div>
                            </li>
                            <li>
                                <div className="chat-user">
                                    <img src="../Public/Assets/avatar.png" width='20px' alt="" />
                                    <label>Jibi George</label>
                                </div>
                                <div className="circle"></div>
                            </li>
                        </ul>
                    </div>}
            </div>
        </>
    )
}

export default ChatList