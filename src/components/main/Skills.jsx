import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaArrowTurnDown } from "react-icons/fa6";
import '../../style/main/skills.css'

const Skills = () => {



    
    return(
        <>
        <div id="redirection-skills"></div>

         <div className="logo_skills">
             <h3>Skills</h3>
         </div>
            
        <div id="area_skills">
            <div><FaHtml5 className="icons_skills" id="icon_html"/></div>
            <div><FaCss3Alt className="icons_skills" id="icon_css"/></div>
            <div><IoLogoJavascript  className="icons_skills" id="icon_js" /></div>
            <div><FaReact className="icons_skills" id="icon_react"/></div>
            <div><FaGitAlt className="icons_skills" id="icon_git"/></div>
            <div id="box-github">
                <FaArrowTurnDown id="arrow_to_github" />
                <a href="https://github.com/SantV7"><FaGithub className="icons_skills" id="icon_github"/></a>
            </div>
        </div>
        </>
    )
}

export default Skills