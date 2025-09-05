import "./hero.css"
import  {heroButtonClick}  from "../../utils.js"
function Hero() {
  return (
    
     <section className="hero-container">
          <h3 className="hero__title">What can <span>Allemansrätten</span></h3>
          <h1 className="hero__subtitle">Do for you?</h1>
          <i onClick={heroButtonClick} className="ri-arrow-down-s-line black"></i>
        </section>
  
    
  )
}

export default Hero