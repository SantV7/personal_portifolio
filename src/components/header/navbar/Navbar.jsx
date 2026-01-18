import { useState } from 'react'
import BtnContact from "../navbar/BtnContact"

const Navbar = () => {

   
    return(
        <>

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

