import { useEffect, useState } from "react"

const BtnChangeTheme =() => {

    window.document.body.style.backgroundColor = 'white'
    const [themeDefaultWhite, setThemeDefaultWhite] = useState(false)

    useEffect(() => {
        window.document.body.style.backgroundColor = 'black'
    }, [themeDefaultWhite])

    return(
        <>
         <button onClick={() => setThemeDefaultWhite(!themeDefaultWhite)}>
            icon to change
         </button>
        </>
    )
}

export default BtnChangeTheme