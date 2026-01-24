import '../../style/main/mainContent.css'
import { LuArrowBigDownDash } from "react-icons/lu";
import Skills from './Skills';
import ScrollReveal from "scrollreveal";
import { useEffect } from 'react';
<a href="https://lordicon.com/">Icons by Lordicon.com</a>



const MainContent = () => {


   useEffect(() => {
      ScrollReveal().reveal('.text_about_me' ,{
         reset: true ,
         duration: 1040,
         delay: 130,
         distance: '80px'
      })

      ScrollReveal().reveal('#skills_container' ,{
         reset: true , 
         duration: 1050,
         distance: '30px',
         delay: 130,
      })
   }, [])

   

    return(
        <>
          <main id='main-info-content'>
            <section className='infoContent'>
               <div id='inicio-text' className='text_about_me'>
                  <h3>Sobre mim  <LuArrowBigDownDash id='arrow_me' /></h3> <lord-icon id="icon-man-people" src="https://cdn.lordicon.com/daeumrty.json"  colors="primary:#d59f80,secondary:#848484,tertiary:#0a4e5c,quaternary:#242424" delay="1830" state="hover-hower" trigger="loop"></lord-icon>
                  <p>Me chamo Vinícius. Tenho 18 anos.</p>
                  <p>Sou um desenvolvedor Frontend Júnior apaixonado por tecnologia, com foco em criar interfaces modernas e funcionais. Minha jornada na programação começou há cerca de um ano e meio, e atualmente dedico-me ao domínio das tecnologias essenciais para a web: <span className="span-usage-language" id='html-span'>HTML</span>, <span className="span-usage-language" id='css-span'>CSS</span>, <span className="span-usage-language" id='javascript-span'>JavaScript</span> e <span className="span-usage-language" id='react-span'>React</span>.</p>
                  <p>Estou em busca da minha primeira oportunidade profissional na área de tecnologia, onde possa contribuir com minhas habilidades, aprender com uma equipe experiente e evoluir constantemente como desenvolvedor.</p>
               </div>          
            </section>

            <section id='skills_container'>
               <Skills />
            </section>
          </main>
        </>
    )
}

export default MainContent