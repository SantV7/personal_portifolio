import '../../../style/header/navbar.css'
import BtnChangeTheme from '../BtnChangeTheme'
import BtnContact from "../navbar/BtnContact"

const Navbar = () => {

    return(
        <>
        <nav>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Projetos</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Serviços</a></li>
                <BtnChangeTheme />
                <BtnContact />
            </ul>
        </nav>
        </>
    )
}

export default Navbar