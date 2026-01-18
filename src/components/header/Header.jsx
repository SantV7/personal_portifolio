import Navbar from "./navbar/Navbar"
import '../../style/header/header.css'
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import '../../style/header/btnIcons.css'

const Header = () => {


    
    const [ showMenu, setShowMenu] = useState(true)

 
    return(
        <>
         <header>
            <div className="logo">
                <h1>Portfólio</h1>
            </div>
            
            
            <div onClick={() => setShowMenu(!showMenu)} id="menubar">
                {
                  showMenu
                  ? <FaBars />
                  : <IoClose id="close_buton" />
                }
            </div>

            <Navbar />
         </header>
        </>
    )
}

export default Header