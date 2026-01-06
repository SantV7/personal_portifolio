import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import '../../style/footer/services.css'
import { FaArrowCircleDown } from "react-icons/fa";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";



const Services = () => {


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
                <p>Para serviços</p>
                
            <span>
              Entre em contato
            </span>
            </div>

            <div id="arrow_indicador">
              <FaArrowCircleDown size={23}  />
              <FaArrowCircleDown size={23} />
              <FaArrowCircleDown size={23} />
              <FaArrowCircleDown size={23} />
              <FaArrowCircleDown size={23} />
            </div>


            <div id="area_icons_contact">
                <FaInstagram className="icons_contact" size={46} />
                <FaLinkedin className="icons_contact" size={46} />
                <FaYoutube className="icons_contact" size={46} />
                <FaGithub className="icons_contact" size={46} />
                <MdEmail className="icons_contact" size={46}  />
            </div>
          </footer>
        </>
    )
}

export default Services 