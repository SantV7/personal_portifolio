import '../../../style/header/navbar.css'
import BtnContact from "../navbar/BtnContact"

const Navbar = () => {
   
   
    return(
        <>
        <nav>
            <ul>
                <li><a className='a_navbar' href="#">Inicio</a></li>
                <li><a className='a_navbar' href="#">Serviços</a></li>
                <li><a href="#">Projetos</a></li>
                <BtnContact />
            </ul>
        </nav>
        </>
    )
}

export default Navbar

