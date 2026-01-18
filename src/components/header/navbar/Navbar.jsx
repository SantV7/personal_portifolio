import { useState } from 'react'
import '../../../style/header/navbar.css'
import BtnContact from "../navbar/BtnContact"

const Navbar = () => {

    const [ showMenu, setShowMenu] = useState(true)
   
   
    return(
        <>

        { showMenu
          ? (
            <nav>
                <ul>
                    <li>inicio</li>
                    <li>Projetos</li>
                </ul>
            </nav>
          )
          : ('')
        }

        <nav id='nav-desktop'>
            <ul id='ul-desktop'>
                <li><a className='a_navbar' href="#inicio-text">Inicio</a></li>
                <li><a href="#">Projetos</a></li>
                <BtnContact />
            </ul>
        </nav>
        </>
    )
}

export default Navbar

