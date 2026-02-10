import './style/global.css'
import Header from './components/header/Header'
import MainContent from './components/main/MainContent'
import Services from './components/footer/Services'
import './style/projects/projects.css'
import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'


function App() {

  useEffect(() => {
    ScrollReveal().reveal('.card', {
      reset: true,
      easing: 'ease-out',
      duration: 2000,
      delay:134
    },)
  }, [])


  return (
    <>
      <Header />
      <MainContent />

      <section id='projects-area'>
        <header id='projects-header'>
          <h3>Projetos</h3>
        </header>

        <div className="card-projects">
          <div className="card card-one">
             <div className="card-img img-project-1"></div>
             <div className="tittle-project tittle-project-2"><p>Pizzaria</p> <a className='btn-see-project' href="https://pizzaria-zeta-six.vercel.app/">Ver site</a></div>
          </div>
          <div className="card card-two">
             <div className="card-img img-project-2"></div>
             <div className="tittle-project tittle-project-2"><p>Blog</p> <a className='btn-see-project' href="#">Ver site</a></div>
          </div>
          <div className="card card-three">
             <div className="card-img img-project-3"></div>
             <div className="tittle-project tittle-project-3"><p>Formulário</p> <a className='btn-see-project' href="#">Ver site</a></div>
          </div>
        </div>
      </section>

      <Services />
    </>
  )
}

export default App
