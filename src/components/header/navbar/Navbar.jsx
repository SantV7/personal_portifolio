import { PiHouseLineDuotone } from "react-icons/pi";
import BtnContact from "../navbar/BtnContact"
import { GrProjects } from "react-icons/gr";
import { AiOutlineCluster } from "react-icons/ai";
import { useEffect } from "react";
import gsap from "gsap";


const Navbar = () => {
    useEffect(() => {
        gsap.fromTo('.li-gsap', {
            opacity: 0.65,
            scale: 0.95,
            y: -140
        }, {
            y: 0, 
            duration: 1.8,
            ease: 'power2',
            opacity: 1
        })
    }, [])
   const waitForProjects = () => {
     alert('Espere mais um pouco. As imagens são só ilustrações, e não projetos reais...\nAss by: Vinícius')
   }

    return(
        <>

        <nav id='nav-desktop'>
            <ul id='ul-desktop'>
                <li className="li-gsap"><a className='a_navbar' href="#inicio-text">Inicio</a> <div><PiHouseLineDuotone className="icon-header-hover" size={27} /></div></li>
                <li className="li-gsap"><a onClick={() => waitForProjects()} href="#projects-area">Projetos</a> <div><GrProjects size={21.65} className="icon-header-hover" /></div></li>
                <li className="li-gsap"><a href="#skills_container">Skills</a> <AiOutlineCluster className="icon-header-hover" size={30} /></li>
                <BtnContact />
            </ul>
        </nav>
        </>
    )
}

export default Navbar

