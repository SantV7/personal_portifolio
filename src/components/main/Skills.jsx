import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaArrowTurnDown } from "react-icons/fa6";
import '../../style/main/skills.css'
import gsap from "gsap";
import { useEffect, useState } from "react";

const Skills = () => {

    const [stateHtml, setStateHtml] = useState(null)
    const [stateCss, setStateCss] = useState(null)
    const [stateJs, setStateJs] = useState(null)
    const [stateReact, setStateReact] = useState(null)
 
    useEffect(() => {
        gsap.fromTo('.icons_skills' , {
            opacity: 0.8,
            y: -25
        }, {
          duration: 0.75,
          opacity: 1,
          ease: 'power2',
          stagger: {
            each: 0.35,
            from: 'start',
          },
          y: 0
         })

         setStateHtml(document.getElementById('htmlExplication'))
         setStateCss(document.getElementById('cssExplication'))
         setStateJs(document.getElementById('jsExplication'))
         setStateReact(document.getElementById('reactExplication'))
        }, [])




    const techNames = [
        {nomeTech: 'HTML5', textExplication: 'O HTML5 é a versão mais moderna da linguagem de marcação para a web, essencial para criar sites responsivos e interativos. é aqui com a estrutura é feita'}, 
        {nomeTech: 'CSS3', textExplication: 'O CSS3 é a linguagem de estilos que define a aparência visual dos elementos HTML, permitindo criar layouts bonitos, responsivos e animações interativas para uma experiência de usuário atraente'}, 
        {nomeTech: 'JavaScript', textExplication: 'O JavaScript é a linguagem de programação que adiciona interatividade e dinamismo às páginas web, permitindo manipular elementos, responder a eventos e criar funcionalidades complexas no navegador'}, 
        {nomeTech: 'React', textExplication: 'O React é uma biblioteca JavaScript para construir interfaces de usuário interativas, baseada em componentes reutilizáveis que facilitam a criação de aplicações web modernas e de alta performance'},
        {nomeTech: 'Git', textExplication: 'O Git é um sistema de controle de versão distribuído que permite rastrear alterações no código, colaborar com outros desenvolvedores e gerenciar diferentes versões de um projeto de forma eficiente'}
    ]

  
    const showHtml = () => {
        stateHtml.style.display = 'flex'
    }
    const showCss = () => {
        cssExplication.style.display = 'flex'
    }
    const showJs = () => {
        stateJs.style.display = 'flex'
    }
    const showReact = () => {
        reactExplication.style.display = 'flex'
    }


    const hiddenHtml = () => {
        stateHtml.style.display = 'none'
    }
    const hiddenCss = () => {
        cssExplication.style.display = 'none'
    }
    const hiddenJs = () => {
        stateJs.style.display = 'none'
    }    
    const hiddenReact = () => {
        reactExplication.style.display = 'none'
    }




    return(
        <>
         <div className="logo_skills">
             <h3>Skills</h3>
         </div>
            
        <div id="area_skills">
            <div 
            onMouseOver={() => showHtml()}
            onMouseOut={() => hiddenHtml()}>
            <FaHtml5  className="icons_skills" id="icon_html"/>
        </div>

        <div 
            onMouseOver={() => showCss()} 
            onMouseOut={() => hiddenCss()}
            >
            <FaCss3Alt className="icons_skills" id="icon_css"/>
        </div>

        <div 
            onMouseOver={() => showJs()} 
            onMouseOut={() => hiddenJs()}>
            <IoLogoJavascript className="icons_skills" id="icon_js" />
        </div>

        <div 
            onMouseOver={() => showReact()} 
            onMouseOut={() => hiddenReact()}>
            <FaReact className="icons_skills" id="icon_react"/>
        </div>

            <div><FaGitAlt className="icons_skills" id="icon_git"/></div>



            <div id="box-github">
                <FaArrowTurnDown id="arrow_to_github" />
                <a href="https://github.com/SantV7">
                    <FaGithub className="icons_skills" id="icon_github"/>
                </a>
            </div>
        </div>

        <div onMouseOver={() => showHtml()}
            onMouseOut={() => hiddenHtml()} className="classExplication" id="htmlExplication">
            <h3 id="tittle-html">{techNames[0].nomeTech}</h3>
            <div className="content-explication">
                <p>{techNames[0].textExplication}</p>
            </div>
        </div>


        <div onMouseOver={() => showCss()} 
            onMouseOut={() => hiddenCss()} className="classExplication" id="cssExplication">
            <h3 id="tittle-css">{techNames[1].nomeTech}</h3>
            <div className="content-explication">
                <p>{techNames[1].textExplication}</p>
            </div>
        </div>

        <div onMouseOver={() => showJs()} onMouseOut={() => hiddenJs()} className="classExplication" id="jsExplication">
            <h3 id="tittle-js">{techNames[2].nomeTech}</h3>
            <div className="content-explication">
                <p>{techNames[2].textExplication}</p>
            </div>
        </div>        

        <div onMouseOver={() => showReact()} onMouseOut={() => hiddenReact()}className="classExplication" id="reactExplication">
            <h3 id="tittle-react">{techNames[3].nomeTech}</h3>
            <div className="content-explication">
                <p>{techNames[3].textExplication}</p>
            </div>
        </div>


        </>
    )
}

export default Skills