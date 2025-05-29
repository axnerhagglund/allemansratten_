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