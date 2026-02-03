import './style/global.css'
import Header from './components/header/Header'
import MainContent from './components/main/MainContent'
import Services from './components/footer/Services'
import './style/projects/projects.css'

function App() {

  return (
    <>
      <Header />
      <MainContent />

      <section id='projects-area'>
        <header id='projects-header'>
          <h3>Projetos</h3>
        </header>

        <div className="card-projects">
          <div className="card card-one"></div>
          <div className="card card-Two"></div>
          <div className="card card-Three"></div>
        </div>
      </section>

      <Services />
    </>
  )
}

export default App
