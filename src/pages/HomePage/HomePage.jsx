import {motion, useAnimation} from "framer-motion"
import { useInView } from "react-intersection-observer"
import React from "react"
import Hero from "../../components/Hero/Hero"
import SectionOne from "../../components/SectionOne/SectionOne"
import SectionTwo from "../../components/SectionTwo/SectionTwo"
import SectionThree from "../../components/SectionThree/SectionThree"
import Footer from "../../components/Footer/Footer"
import "./homepage.css"


function ScrollSection({children}){
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.7 })
  React.useEffect(() => {
    if(inView){
      controls.start("visible")
    }
  },[controls, inView])
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.8 }}
      className="section1"
    >
      {children}
    </motion.div>
  )
}
function HomePage() {
  return (
    <>
    
    <section className="snap-container">
       <section className="snap-section intro bg-intro">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          <Hero/>
        </motion.div>
      </section>
      <section className="snap-section bg-one"> 
        <ScrollSection>
         <SectionOne/>
        </ScrollSection>
      </section>
      
      <section className="snap-section bg-two"> 
        <ScrollSection>
         <SectionTwo />
        </ScrollSection>
      </section>

      <section className="snap-section bg-three"> 
        <ScrollSection>
          <SectionThree/>
        </ScrollSection>
      </section>

    </section>
    
    
    </>
  )
}

export default HomePage