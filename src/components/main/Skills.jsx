import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";7
import { FaGitAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import '../../style/main/skills.css'


const Skills = () => {




    
    return(
        <>
         <div>
             <h3>Skills</h3>
         </div>
            
        <div id="area_skills">
            <div><FaHtml5 className="icons_skills" id="icon_html"/></div>
            <div><FaCss3Alt className="icons_skills" id="icon_css"/></div>
            <div><FaJsSquare className="icons_skills" id="icon_js" /></div>
            <div><FaReact className="icons_skills" id="icon_react"/></div>
            <div><FaGitAlt className="icons_skills" id="icon_git"/></div>
            <div><a href="https://github.com/SantV7"><FaGithub className="icons_skills" id="icon_github"/>
            </a></div>
        </div>
        
        </>
    )
}

export default Skills