import '../../../style/header/navbar.css'
import BtnChangeTheme from '../BtnChangeTheme'
import BtnContact from "../navbar/BtnContact"

const Navbar = () => {
   
   
    return(
        <>
        <nav>
            <ul id={ul_itens}>
                <li><a className='a_navbar' href="#">Inicio</a></li>
                <li><a className='a_navbar' href="#">Projetos</a></li>
                <li><a className='a_navbar' href="#">Sobre</a></li>
                <li><a className='a_navbar' href="#">Serviços</a></li>
                <BtnChangeTheme />
                <BtnContact />
            </ul>
        </nav>
        </>
    )
}

export default Navbar

export let ul_itens = document.getElementById('#ul_itens')
export let a_navbar = document.querySelector('.a_navbar')