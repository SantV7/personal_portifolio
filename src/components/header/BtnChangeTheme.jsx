import { useEffect, useState } from "react"

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
         <button onClick={() => setThemeDefaultWhite(!themeDefaultWhite)}>
            icon to change
         </button>
        </>
    )
}

export default BtnChangeTheme