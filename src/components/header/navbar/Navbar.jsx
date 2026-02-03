
import BtnContact from "../navbar/BtnContact"

const Navbar = () => {

   const waitForProjects = () => {
     alert('Espere mais um pouco. As imagens são só ilustrações, e não projetos reais...\nAss by: Vinícius')
   }

    return(
        <>

        <nav id='nav-desktop'>
            <ul id='ul-desktop'>
                <li><a className='a_navbar' href="#inicio-text">Inicio</a></li>
                <li><a onClick={() => waitForProjects()} href="#projects-area">Projetos</a></li>
                <li><a href="#skills_container">Skills</a></li>
                <BtnContact />
            </ul>
        </nav>
        </>
    )
}

export default Navbar

