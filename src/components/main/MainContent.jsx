import '../../style/main/mainContent.css'
import { LuArrowBigDownDash } from "react-icons/lu";
import Skills from './Skills';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoCloseCircleOutline } from "react-icons/io5";
import curriculo from '../../assets/Curriculo_Vinicius_dos_santos_oliveira.pdf'

gsap.registerPlugin(ScrollTrigger);

const MainContent = () => {
    const mainRef = useRef(null);
    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

            tl.fromTo('#h3-about-me', 
                { y: -100, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 1.2 }
            )
            .fromTo('.paragraph_text_about_me', 
                { x: -50, opacity: 0 }, 
                { x: 0, opacity: 1, duration: 0.8, stagger: 0.2 }, 
                "-=0.5"
            );

            gsap.from('#skills_container', {
                scrollTrigger: {
                    trigger: '#skills_container',
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 50,
                duration: 1.2,
                ease: 'power2.out'
            });
        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <main id='main-info-content' ref={mainRef}>
            <section className='infoContent'>
                <div id='inicio-text' className='text_about_me'>
                    <h3 id='h3-about-me'>
                        Sobre mim <LuArrowBigDownDash id='arrow_me'/>
                    </h3> 
                    
                    <div className="icon-wrapper">
                        <lord-icon 
                            id="icon-man-people" 
                            src="https://cdn.lordicon.com/daeumrty.json"  
                            colors="primary:#d59f80,secondary:#848484,tertiary:#0a4e5c,quaternary:#242424" 
                            delay="1730" 
                            state="hover-hower" 
                            trigger="loop">
                        </lord-icon>

                        <div id='area-curriculo'>
                            <a onClick={() => setShowOptions(true)}>Currículo</a>
                        </div>

                        {showOptions && (
                            <div id='menu-options'>
                                <header onClick={() => setShowOptions(false)}>
                                    <IoCloseCircleOutline />
                                </header>
                                <div id='flex_a'>
                                    <a target='_blank' rel="noreferrer" href={curriculo}>Visualizar</a>
                                    <a href={curriculo} download="Curriculo_Vinicius.pdf">Baixar</a>
                                </div>
                            </div>
                        )}
                    </div>

                    <p className='paragraph_text_about_me intro-name'>
                        VINÍCIUS
                    </p>
                    
                    <div id='p-box' className='paragraph_text_about_me'>
                        <p>
                            Desenvolvedor Web - Frontend. 
                            Crio interfaces modernas, funcionais e centradas em resolver problemas e criar soluções para o usuário.
                        </p>
                        <p>
                            Dedico meus estudos ao ecossistema front-end, sempre estudando e praticando <strong>HTML5, CSS3, JavaScript (ES6+) e React</strong>. Estou em busca da minha primeira oportunidade profissional, onde eu possa aplicar meus conhecimentos, contribuir com projetos e sistemas com objetivos em melhorar o dia a dia do usuário, e acelerar meu desenvolvimento como programador Frontend.
                        </p>
                    </div>
                </div>          
            </section>

            <div id="transition_for_skills" aria-hidden="true"></div>

            <section id='skills_container'>
                <Skills />
            </section>
        </main>
    );
}

export default MainContent;