import "./hamburgermenu.css"
import { useState } from "react"
function HamburgerMenu() {

    const [ isOpen, setIsOpen ] = useState(false)
    function toggleview(){ 
        setIsOpen((prev) => !prev)
        console.log(isOpen)
    }
    
  return (
    <>
     <section className="mobile-view">
        <h1 className="mobile-view-logo">Logo</h1>
        <i onClick={toggleview} className="ri-menu-4-line"></i>
    </section>
    
        <section className={`overlay ${isOpen ? "open" : ""}`}>
            <ul className="overlay__list">
                <li className="overlay__list-item">Hem</li>
                <li className="overlay__list-item">Om oss</li>
                <li className="overlay__list-item">Vårt mål</li>
            </ul>
        </section> 
        
    
    
    </>
  )
}

export default HamburgerMenu