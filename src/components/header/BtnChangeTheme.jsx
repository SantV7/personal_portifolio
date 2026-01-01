import { useEffect, useState } from "react"
import '../../style/header/btnChangeTheme.css'
import { FaRegMoon } from "react-icons/fa";
import { PiSunLight } from "react-icons/pi";
const BtnChangeTheme =() => {


    const [themeDefaultWhite, setThemeDefaultWhite] = useState(true)

    
    if (themeDefaultWhite == true){
       useEffect(() => {
          window.document.body.style.backgroundColor = 'white'
        },[ themeDefaultWhite])       
    }
    else {
       useEffect(() => {
          window.document.body.style.backgroundColor = 'black'
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