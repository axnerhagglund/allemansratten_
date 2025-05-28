import "./hero.css"
import Bird from "../BirdsFlying/BirdsFlying"
function Hero() {
  return (
    <main>
        <section className="birds">
        <Bird delay={0} speed={5000} />
        <div className="birdBox"></div>
        <Bird delay={1} speed={6000} />
        <div className="birdBox"></div>
        <Bird delay={2} speed={7000} />
        </section>
    <section className="hero">
        <h3 className="hero__title">Lär dig mer om</h3>
        <h1 className="hero__subtitle">Allemansrätten</h1>
    </section>
    <img className="hero__image" src="/images/heroimage.png" alt="background image for the hero"/>
    </main>
  )
}

export default Hero