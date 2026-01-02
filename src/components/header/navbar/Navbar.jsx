import '../../../style/header/navbar.css'
import BtnChangeTheme from '../BtnChangeTheme'
import BtnContact from "../navbar/BtnContact"

const Navbar = () => {
   
   
    return(
        <>
        <nav>
            <ul id={ul_itens}>
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

export let ul_itens = document.getElementById('#ul_itens')