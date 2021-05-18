import React from 'react'

import './App.css';
import {AiOutlineWhatsApp,AiOutlineMenu,AiOutlineInstagram} from 'react-icons/ai'
import {FaFacebookMessenger} from 'react-icons/fa'

function Header(){
    return(
        <div className="Header">
        
         <div className="titulo">Travis</div>
         <div className="contacto">
            <div className="whats"><AiOutlineWhatsApp size={30}/></div>
            <div className="insta"><AiOutlineInstagram size={30}/></div>
            <div className="face"><FaFacebookMessenger size={30}/></div>
            <div className="menu"><AiOutlineMenu size={30}/></div>
         </div>
        </div>
    )
}

export default Header