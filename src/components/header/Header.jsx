import Navbar from "./navbar/Navbar"
import '../../style/header/header.css'
import { FaBars } from "react-icons/fa";

const Header = () => {



                  

    return(
        <>
         <header>
            <div className="logo">
                <h1>Portfólio</h1>
            </div>
            
         <FaBars id="menubar" />
         <Navbar />
         
         
         </header>
        </>
    )
}

export default Header