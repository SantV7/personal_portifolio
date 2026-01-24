import Navbar from "./navbar/Navbar"
import '../../style/header/header.css'
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import '../../style/header/btnIcons.css'
import BtnContact from "./navbar/BtnContact";

const Header = () => {


    
    const [ showMenu, setShowMenu] = useState(true)

    const closeClickLink = () => {
        return  setShowMenu(!showMenu)
    }

 
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
                  <li><a onClick={() => closeClickLink()} href="#main-info-content">Inicio</a></li>
                  <li><a onClick={() => closeClickLink()} href="#">Projetos</a></li>
                  <li><a onClick={() => closeClickLink()} href="#transition_for_skills">Skills</a></li>          
                  <BtnContact />
              </ul>
          </nav>
        )
        }


            <div onClick={() => setShowMenu(!showMenu)} id="menubar">
                {
                  showMenu
                  ? <FaBars size={30} />
                  : <IoClose size={34} id="close_buton" />
                }
            </div>

            <Navbar />
         </header>
        </>
    )
}

export default Header