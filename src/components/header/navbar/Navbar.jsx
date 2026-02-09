import { PiHouseLineDuotone } from "react-icons/pi";
import BtnContact from "../navbar/BtnContact"
import { GrProjects } from "react-icons/gr";
import { AiOutlineCluster } from "react-icons/ai";


const Navbar = () => {

   const waitForProjects = () => {
     alert('Espere mais um pouco. As imagens são só ilustrações, e não projetos reais...\nAss by: Vinícius')
   }

    return(
        <>

        <nav id='nav-desktop'>
            <ul id='ul-desktop'>
                <li><a className='a_navbar' href="#inicio-text">Inicio</a> <div><PiHouseLineDuotone className="icon-header-hover" size={27} /></div></li>
                <li><a onClick={() => waitForProjects()} href="#projects-area">Projetos</a> <div><GrProjects size={21.65} className="icon-header-hover" /></div></li>
                <li><a href="#skills_container">Skills</a> <AiOutlineCluster className="icon-header-hover" size={30} /></li>
                <BtnContact />
            </ul>
        </nav>
        </>
    )
}

export default Navbar

