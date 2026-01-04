import { useEffect, useState } from "react"
import '../../style/header/btnChangeTheme.css'
import { FaRegMoon } from "react-icons/fa";
import { PiSunLight } from "react-icons/pi";
const BtnChangeTheme =() => {


    const [themeDefaultWhite, setThemeDefaultWhite] = useState(true)



    if (themeDefaultWhite == true) {
       useEffect(() => {
          document.body.style.backgroundColor = '#f6f6feff'
          document.body.style.color = 'black'
        },[ themeDefaultWhite])       
    }
    else {
       useEffect(() => {
         
          document.body.style.backgroundColor = '#1c1a23ff'
          document.body.style.color = 'white'
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