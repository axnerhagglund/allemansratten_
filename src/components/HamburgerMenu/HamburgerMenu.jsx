import "./hamburgermenu.css"
import { useEffect, useState } from "react"
function HamburgerMenu() {

    const [ isOpen, setIsOpen ] = useState(false)
    function toggleview(){ 
        setIsOpen((prev) => !prev)
        console.log(isOpen)
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
        <i onClick={toggleview} className={isOpen ? "ri-close-line" : "ri-menu-4-line"}></i>
    </section>
        
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

export default HamburgerMenu