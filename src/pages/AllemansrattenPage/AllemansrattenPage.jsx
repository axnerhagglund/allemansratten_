import React from 'react'
import "./allemansratten.css"
import { Link } from 'react-router-dom'
function Allemansratten() {
  return (
    <section className="allemansratten">
      <h1 className="allemansratten__h1">Coming soon</h1>
      <p className="allemansratten__p">I promise</p>
      <Link to="/">
      <button className="allemansratten__button">Go back</button>
      </Link>
    </section>
  )
}

export default Allemansratten