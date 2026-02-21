import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import '../../style/footer/services.css'
import { MdEdgesensorHigh } from "react-icons/md";
import ScrollReveal from "scrollreveal";
import {useEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Services = () => {  
   useEffect(() => {
     ScrollReveal().reveal('#footer', {
       reset: true ,
       duration:2,
       opacity: 1
     })


     gsap.fromTo('.icones_contact_link', {
      x: -20,
      opacity: 0
     }, {
      opacity: 1,
      duration: 1,
      ease: 'power2',
       scrollTrigger: {
          trigger: '#area_icons_contact',
          start: 'top 90%', 
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
          },
      stagger: {
        each: 0.2,
        from: 'start'
      },
      x: 0      
     })
   }, [])






    return(
        <>
          <footer id="footer">
            <div id="services_info">
                <p className="text_footer">Para serviços</p>
                <span className="text_footer">Entre em contato <MdEdgesensorHigh size={30} color="orange" /></span>
            </div>


            <div id="area_icons_contact">
                <a target='_blank' role="link" className="icones_contact_link" href="https://www.instagram.com/__sant_v/">
                  <FaInstagram  id="instagram_icon" className="icons_contact" size={48} />
                </a>
                <a target='_blank' role="link" className="icones_contact_link" href="https://www.linkedin.com/in/viniciussant07">
                  <FaLinkedin id="linkedin_icon" className="icons_contact" size={48} />
                </a>
                <a target='_blank' role="link" className="icones_contact_link" href="www.youtube.com/@vy.S17">
                  <FaYoutube id="yt_icon" className="icons_contact" size={48} />
                </a>
                <a target='_blank' role="link" className="icones_contact_link" href="https://github.com/SantV7">
                  <FaGithub id="github_icon" className="icons_contact" size={48} />
                </a>
                <a target='_blank' role="link" className="icones_contact_link" href="mailto:3izuna@gmail.com">
                  <MdEmail id="email_icon" className="icons_contact" size={48} />
                </a>
            </div>
          </footer>
        </>
    )
}

export default Services 
export const color_footer = document.querySelector('.text_footer')