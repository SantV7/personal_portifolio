import Navbar from "./navbar/Navbar"
import '../../style/header/header.css'
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import '../../style/header/btnIcons.css'

const Header = () => {


    
    const [ showMenu, setShowMenu] = useState(false)

 
    return(
        <>
         <header>
            <div className="logo">
                <h1>Portfólio</h1>
            </div>
            

        { showMenu
        ? ('') 
          : (
          <nav id="nav-mobile">
              <ul id="ul-mobile">
                  <li>inicio</li>
                  <li>Projetos</li>
              </ul>
          </nav>
        )
        }


            <div onClick={() => setShowMenu(!showMenu)} id="menubar">
                {
                  showMenu
                  ? <FaBars size={30} />
                  : <IoClose size={30} id="close_buton" />
                }
            </div>

            <Navbar />
         </header>
        </>
    )
}

export default Header