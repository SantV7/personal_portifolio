import Navbar from "./navbar/Navbar"
import '../../style/header/header.css'
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import '../../style/header/btnIcons.css'

const Header = () => {

const [menuopen, setMenuOpen] = useState(true)

                //   Fazer os icons do menu Mobile.

    return(
        <>
         <header>
            <div className="logo">
                <h1>Portfólio</h1>
            </div>
            
         
            <div onClick={() => setMenuOpen(!menuopen)} id="menubar">
                {
                    menuopen
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