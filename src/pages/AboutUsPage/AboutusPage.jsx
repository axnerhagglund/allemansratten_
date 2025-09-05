import "./aboutuspage.css"
import {motion, useAnimation} from "framer-motion"
import { LuTrees } from "react-icons/lu";
function AboutusPage() {
  return (
     <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
      <section className="about">
      <section className="top">
        <h1 className="about__h1">Who are we?</h1>
        <LuTrees className="lu-tree"/>
      </section>
      <section className="about__sub">
        <p className="about__sub-p">
          My name is Axner and im just a frontend developer who likes to build stuff, and i noticed that there was no standalone site about allemansrätten, in which are a very nice feature to sweden if someone ever where to travel here. So i thought, lets build it! And hopefully learn some stuff on the way. Right now the project is mostly a shell, with little or not none information about Allemansrätten. But its coming!
        </p>
      </section>
      
    </section>
          
        </motion.div>
    
  )
}

export default AboutusPage