import '../../style/main/mainContent.css'
import { LuArrowBigDownDash } from "react-icons/lu";
import Skills from './Skills';
import ScrollReveal from "scrollreveal";
import { useEffect } from 'react';



const MainContent = () => {



   useEffect(() => {
      ScrollReveal().reveal('.text_about_me' ,{
         reset: true ,
         duration: 1040 ,
      })

      ScrollReveal().reveal('#skills_container' ,{
         reset: true , 
         duration: 1050
      })
   }, [])






    return(
        <>
          <main>
            <section className='infoContent'>
               <div className='text_about_me'>
                  <h3>Sobre mim  <LuArrowBigDownDash id='arrow_me' /></h3>
                  <p>Me chamo Vinícius. Tenho 18 anos.</p>
                  <p>Sou um desenvolvedor Frontend Júnior apaixonado por tecnologia, com foco em criar interfaces modernas e funcionais. Minha jornada na programação começou há cerca de um ano e meio, e atualmente dedico-me ao domínio das tecnologias essenciais para a web: HTML, CSS, JavaScript e React.</p>
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