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
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      duration: 1200,
      distance: '40px',
      origin: 'bottom',
      interval: 100
    })
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
          <div className="card">
            <div className="card-img img-project-1"></div>
            <div className="tittle-project">
              <p>Pizzaria</p> 
              <a target='_blank' rel='noopener noreferrer'
               className='btn-see-project'
               href="https://pizzaria-zeta-six.vercel.app/">Ver site</a>
            </div>
          </div>
          
          <div className="card">
            <div className="card-img img-project-3"></div>
            <div className="tittle-project">
              <p>Formulário</p> 
              <a target='_blank' rel='noopener noreferrer' className='btn-see-project'
              href="https://formulario-eta-six.vercel.app/">Ver site</a>
            </div>
          </div>

          <div className="card">
            <div className="card-img img-project-4"></div>
            <div className="tittle-project">
              <p>Dashboard</p> 
              <a target='_blank' rel='noopener noreferrer' className='btn-see-project'
              href="https://dashboard-coins.vercel.app/">Ver site</a>
            </div>
          </div>

          <div className="card">
            <div className="card-img img-project-5"></div>
            <div className="tittle-project">
              <p>Banco Mobile fictício (não foi feito para desktop)</p> 
              <a target='_blank' rel='noopener noreferrer' className='btn-see-project'
              href="https://invoice-manager-nu-tawny.vercel.app/">Ver site</a>
            </div>
          </div>          
        </div>
      </section>

      <Services />
    </>
  )
}

export default App