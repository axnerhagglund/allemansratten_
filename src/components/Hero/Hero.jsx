import "./hero.css"

function Hero() {
  return (
    <main>
    <section className="hero">
        <h3 className="hero__title">Lär dig mer om</h3>
        <h1 className="hero__subtitle">Allemansrätten</h1>
    </section>
    <img className="hero__image" src="/images/heroimage.png" alt="background image for the hero"/>
    </main>
  )
}

export default Hero