import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


const Services = () => {

    return(
        <>
          <footer>
            <div>
                <p>Para mais serviços</p>
            </div>

            <div>
                <FaInstagram className="icons_contact" />
                <FaLinkedin className="icons_contact" />
                <FaYoutube className="icons_contact" />
                <FaGithub className="icons_contact" />
                <MdEmail className="icons_contact"  />
            </div>
          </footer>

        </>
    )
}

export default Services 