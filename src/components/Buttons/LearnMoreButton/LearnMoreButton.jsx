import React from 'react'
import { Link } from 'react-router-dom'
import "./learnmorebutton.css"
function LearnMoreButton() {
  return (
    <Link to={"/allemansratten"}>
    <button className="learnMore">
        Learn more
    </button>
    </Link>
  )
}

export default LearnMoreButton