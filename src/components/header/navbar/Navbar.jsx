import '../../../style/header/navbar.css'
import BtnChangeTheme from '../BtnChangeTheme'
import BtnContact from "../navbar/BtnContact"

const Navbar = () => {
   
   
    return(
        <>
        <nav>
            <ul>
                <li><a className='a_navbar' href="#">Inicio</a></li>
                <li><a className='a_navbar' href="#">Serviços</a></li>
                <BtnChangeTheme />
                <BtnContact />
            </ul>
        </nav>
        </>
    )
}

export default Navbar

