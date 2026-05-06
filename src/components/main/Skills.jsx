import { FaCss3Alt, FaHtml5, FaGitAlt, FaReact, FaGithub, FaSass, FaFigma, FaUserCheck } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";
import { FaArrowTurnDown } from "react-icons/fa6";
import '../../style/main/skills.css';
import gsap from "gsap";
import { useEffect, useState, useRef } from "react";

const Skills = () => {
    const [activeTech, setActiveTech] = useState(null);
    const explicationRef = useRef(null);

    const techData = [
        { id: 'html', name: 'HTML5', text: 'O HTML5 é a versão mais moderna da linguagem de marcação para a web, essencial para criar sites responsivos e interativos.', icon: <FaHtml5 className="icons_skills" id="icon_html" /> },
        { id: 'css', name: 'CSS3', text: 'O CSS3 é a linguagem de estilos que define a aparência visual dos elementos HTML, permitindo criar layouts e animações.', icon: <FaCss3Alt className="icons_skills" id="icon_css" /> },
        { id: 'js', name: 'JavaScript', text: 'O JavaScript é a linguagem de programação que adiciona interatividade e dinamismo às páginas web.', icon: <IoLogoJavascript className="icons_skills" id="icon_js" /> },
        { id: 'sass', name: 'Sass', text: 'Sass é um pré-processador CSS que permite o uso de variáveis e aninhamento, tornando o código mais organizado.', icon: <FaSass className="icons_skills" id="icon_sass" /> },
        { id: 'react', name: 'React', text: 'O React é uma biblioteca JavaScript para construir interfaces de usuário baseada em componentes reutilizáveis.', icon: <FaReact className="icons_skills" id="icon_react" /> },
        { id: 'git', name: 'Git', text: 'O Git é um sistema de controle de versão que permite rastrear alterações no código de forma eficiente.', icon: <FaGitAlt className="icons_skills" id="icon_git" /> },
        { id: 'figma', name: 'Figma', text: 'O Figma é uma ferramenta de design colaborativa para criação de interfaces e protótipos de alta fidelidade.', icon: <FaFigma className="icons_skills" id="icon_figma" /> },
        { 
            id: 'ui', 
            name: 'UI Design', 
            text: 'User Interface Design foca na criação de interfaces visuais intuitivas, estéticas e funcionais para o usuário.', 
            icon: <div className="icons_skills custom-box-icon ui-bg"><MdWeb /></div> 
        },
        { 
            id: 'ux', 
            name: 'UX Design', 
            text: 'User Experience Design foca na jornada do usuário, garantindo que a navegação seja lógica e satisfatória.', 
            icon: <div className="icons_skills custom-box-icon ux-bg"><FaUserCheck /></div> 
        },
        { 
            id: 'github', 
            name: 'GitHub', 
            text: 'O GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.', 
            icon: (
                <div id="box-github">
                    <FaArrowTurnDown id="arrow_to_github" />
                    <a href="https://github.com/SantV7" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="icons_skills" id="icon_github" />
                    </a>
                </div>
            ) 
        }
    ];

    useEffect(() => {
        gsap.fromTo('.icons_skills', { opacity: 0, y: -25 }, {
            duration: 0.75, opacity: 1, y: 0, ease: 'power2.out', stagger: 0.1
        });
    }, []);

    useEffect(() => {
        if (activeTech) {
            gsap.fromTo(explicationRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
        }
    }, [activeTech]);

    const currentTech = techData.find(t => t.id === activeTech);

    return (
        <section id="skills-section">
            <div className="logo_skills">
                <h3>Skills</h3>
            </div>
            <div id="area_skills">
                {techData.map((tech) => (
                    <div key={tech.id} onMouseEnter={() => setActiveTech(tech.id)} onMouseLeave={() => setActiveTech(null)} className="skill-icon-wrapper">
                        {tech.icon}
                    </div>
                ))}
            </div>
            <div className="explanation-container">
                {activeTech ? (
                    <div className="classExplication active" ref={explicationRef}>
                        <h3 className={`title-${activeTech}`}>{currentTech.name}</h3>
                        <div className="content-explication"><p>{currentTech.text}</p></div>
                    </div>
                ) : (
                    <div className="classExplication placeholder">
                        <p>Interaja com um ícone para ler a descrição</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Skills;