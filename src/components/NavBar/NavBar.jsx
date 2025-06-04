import { Link } from "react-router-dom"
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
        <Link className="links" to={"/"}>
        <h1 className="mobile-view-logo">Logo</h1>
        </Link>
        {screenWidth > 900 ? 
        <div  className="desktop__menu">
        <ul className="desktop__menu-list">
            <Link className="links"  to={"/about"}>
            <a  className="desktop__menu--item">Om oss</a>
            </Link>
            <a className="desktop__menu--item">Vårt mål</a>
            <a className="desktop__menu--item">Allemansrätten</a>
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
                <Link onClick={toggleview} className="links" to={"/"}>
                <li className="overlay__list-item">Hem</li>
                </Link>
                <Link onClick={toggleview} className="links"  to={"/about"}>
                <a className="overlay__list-item">Om oss</a>
                </Link>
                <li className="overlay__list-item">Vårt mål</li>
                <li className="overlay__list-item">Allemansrätten</li>
            </ul>
        </section>
        
     </>
        
    
    
    
  )
}

export default NavBar