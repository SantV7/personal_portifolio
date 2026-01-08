import { useEffect, useState } from "react"
import '../../style/header/btnChangeTheme.css'
import { FaRegMoon } from "react-icons/fa";
import { PiSunLight } from "react-icons/pi";
import Services, { color_footer } from "../footer/Services";


const BtnChangeTheme =() => {
   
color_footer


    const [themeDefaultWhite, setThemeDefaultWhite] = useState(true)
    

    if (themeDefaultWhite == true) {
       useEffect(() => {
           const color_footer = document.querySelector('.text_footer')

          document.body.style.backgroundColor = '#f6f6feff'
          document.body.style.color = 'black'
          color_footer.style.color = '#ffffffff'
        },[themeDefaultWhite])       
    } else {
       useEffect(() => {
          document.body.style.backgroundColor = '#6e6a7bff'
          color_footer.style.color = '#fcfcffff'
       },[themeDefaultWhite])             
    }


    return(
        <>
         <button aria-description="mudar tema" id="btn_change_theme"
         onClick={() => setThemeDefaultWhite(!themeDefaultWhite)}>
            {
               themeDefaultWhite
               ? <FaRegMoon className="iconChangeTheme" />
               : <PiSunLight className="iconChangeTheme" id="sunIcon"/>
            }
         </button>
        </>
    )
}

export default BtnChangeTheme