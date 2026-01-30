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
         delay: 130
      },)

      ScrollReveal().reveal('.paragraph_text_about_me', {
         reset: true,
      })

      ScrollReveal().reveal('#skills_container' ,{
         reset: true , 
         duration: 1050,
      },)
   }, [])

   

    return(
        <>
          <main id='main-info-content'>
            <section className='infoContent'>
               <div id='inicio-text' className='text_about_me'>
                  <h3>Sobre mim  <LuArrowBigDownDash id='arrow_me' /></h3> 
                  <lord-icon id="icon-man-people" src="https://cdn.lordicon.com/daeumrty.json"  
                  colors="primary:#d59f80,secondary:#848484,tertiary:#0a4e5c,quaternary:#242424" 
                  delay="1730" state="hover-hower" trigger="loop"></lord-icon>

                  <p className='paragraph_text_about_me'>Me chamo Vinícius. Tenho 18 anos.</p>
                  <p className='paragraph_text_about_me'>Sou um Desenvolvedor Web - Frontend, gosto bastante de tecnologia.
                   Tenho o foco em criar interfaces modernas e funcionais. Minha jornada na programação começou há cerca de um ano e meio,
                   e atualmente dedico-me ao domínio das tecnologias essenciais para a web: HTML, CSS, JavaScript e React.</p>
                  <p className='paragraph_text_about_me'>Estou em busca da minha primeira oportunidade profissional na área de tecnologia, 
                  onde possa contribuir com minhas habilidades, aprender com uma equipe experiente e evoluir constantemente como desenvolvedor.</p>
               </div>          
            </section>

            <div id="transition_for_skills"></div>

            <section id='skills_container'>
               <Skills />
            </section>
          </main>
        </>
    )
}

export default MainContent