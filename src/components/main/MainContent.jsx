import '../../style/main/mainContent.css'
import { LuArrowBigDownDash } from "react-icons/lu";
import '../../style/main/my_img.css'
const MainContent = () => {


  

  
    return(
        <>
          <main>
            <section  className='infoContent'>
              <div className='text_about_me'>
                 <h3>Sobre mim  <LuArrowBigDownDash id='arrow_me' /></h3>
                 <p>Me chamo Vinícius. Tenho 18 anos.</p>
                 <p>Gosto bastante de tecnologia e informática. Comecei a estudar a cerca de 1 ano e meio. Porém só agora eu comecei a praticar em projetos reais.</p>
              </div>
            </section>
          </main>
        </>
    )
}


export default MainContent