import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import '../../style/footer/services.css'
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";



const Services = () => {

  const color_footer = document.querySelector('.text_footer')

  
  

  useEffect(() => {
    ScrollReveal().reveal('#footer', {
      reset: true ,
      duration:960
    })
  }, [])



    return(
        <>
          <footer id="footer">
            <div id="services_info">
                <p className="text_footer">Para serviços</p>
                <span className="text_footer">Entre em contato</span>
            </div>


            <div id="area_icons_contact">
                <a className="icones_contact_link" href="https://www.instagram.com/__sant_v/">
                  <FaInstagram  id="instagram_icon" className="icons_contact" size={48} />
                </a>
                <a className="icones_contact_link" href="https://www.linkedin.com/in/viniciussant07">
                  <FaLinkedin id="linkedin_icon" className="icons_contact" size={48} />
                </a>
                <a className="icones_contact_link" href="www.youtube.com/@vy.S17">
                  <FaYoutube id="yt_icon" className="icons_contact" size={48} />
                </a>
                <a className="icones_contact_link" href="https://github.com/SantV7">
                  <FaGithub id="github_icon" className="icons_contact" size={48} />
                </a>
                <a className="icones_contact_link" href="mailto:3izuna@gmail.com">
                  <MdEmail id="email_icon" className="icons_contact" size={48} />
                </a>
            </div>
          </footer>
        </>
    )
}

export default Services 
export const color_footer = document.querySelector('.text_footer')