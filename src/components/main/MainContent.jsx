import '../../style/main/mainContent.css'
import { LuArrowBigDownDash } from "react-icons/lu";
import Skills from './Skills';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MainContent = () => {
    const mainRef = useRef(null);

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
                    <h3 id='h3-about-me' title='Apresentação sobre'>
                        Sobre mim <LuArrowBigDownDash id='arrow_me' />
                    </h3> 
                    
                    <lord-icon 
                        id="icon-man-people" 
                        src="https://cdn.lordicon.com/daeumrty.json"  
                        colors="primary:#d59f80,secondary:#848484,tertiary:#0a4e5c,quaternary:#242424" 
                        delay="1730" 
                        state="hover-hower" 
                        trigger="loop"
                        style={{ width: '160px', height: '160px' }}>
                    </lord-icon>

                    <p className='paragraph_text_about_me' title='Vinícius dos Santos Oliveira, 18 anos'>
                        Me chamo Vinícius. Tenho 18 anos.
                    </p>
                    <p id='p-box' className='paragraph_text_about_me' title='Desenvolvedor Web - Frontend'>
                        Sou um Desenvolvedor Web - Frontend, gosto bastante de tecnologia.
                        Tenho o foco em criar interfaces modernas e funcionais. Atualmente estudo as tecnologias essenciais para a web: HTML, CSS, JavaScript e React.
                        Estou em busca da minha primeira oportunidade profissional na área de tecnologia, 
                        onde possa contribuir com minhas habilidades, aprender e evoluir constantemente como desenvolvedor.
                    </p>
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