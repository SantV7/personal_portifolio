import { useEffect, useState } from "react"
import '../../style/header/btnChangeTheme.css'
import { IoMoon } from "react-icons/io5";
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

    useEffect(() => {
        
    },[ themeDefaultWhite])









    return(
        <>
         <button aria-description="mudar tema" id="btn_change_theme" onClick={() => setThemeDefaultWhite(!themeDefaultWhite)}>
            {
               themeDefaultWhite
               ? <IoMoon className="iconChangeTheme" />
               : <PiSunLight className="iconChangeTheme" id="sunIcon"/>
            }
         </button>
        </>
    )
}

export default BtnChangeTheme