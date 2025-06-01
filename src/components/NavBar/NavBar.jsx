import "./navbar.css"
import { useEffect, useState } from "react"
function NavBar() {

    const [ isOpen, setIsOpen ] = useState(false)
    function toggleview(){ 
        setIsOpen((prev) => !prev)
        
    }
    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth)
    useEffect(()=> {
        const handleResize = () => setScreenWidth(window.innerWidth)

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize)
    },[])
    
  return (
    
    <>
     <section className="mobile-view">
        <h1 className="mobile-view-logo">Logo</h1>
        {screenWidth > 900 ? 
        <div  className="desktop__menu">
        <ul className="desktop__menu-list">
            <li className="desktop__menu--item">Om oss</li>
            <li className="desktop__menu--item">Vårt mål</li>
            <li className="desktop__menu--item">Hem</li>
        </ul>
        <button className="desktop__menu--button">Kontakt</button> 
        </div>
         : ""}
        
        <i onClick={toggleview} className="ri-menu-4-line"></i>
        
    </section>
        <div onClick={toggleview} className={`backdrop ${isOpen ? "active" : ""}`}></div>

        <section className={`overlay ${isOpen ? "open" : ""}`}>
            
            <ul className="overlay__list">
                <i onClick={toggleview} className={screenWidth < 675 ? "ri-arrow-down-s-line" :"ri-arrow-right-s-line"}></i>
                <li className="overlay__list-item">Hem</li>
                <li className="overlay__list-item">Om oss</li>
                <li className="overlay__list-item">Vårt mål</li>
            </ul>
        </section>
        
     </>
        
    
    
    
  )
}

export default NavBar