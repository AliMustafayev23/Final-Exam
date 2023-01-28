import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
const Over = () => {
  return (
    <div className='container'>
      <div className="over">
        <img src="https://preview.colorlib.com/theme/educature/img/about.jpg" alt="" />
        <div className="overleft">
          <h1>Over 2500 Courses<br/>
from 5 Platform</h1>
<p>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting<br/> to think about setting up your own viewing station. In the life of <br/>any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think<br/> about setting up your own viewing station.</p>
<Link className='explore' to={"/"}>Explore Course</Link>
        </div>
      
      </div>
    </div>
  )
}

export default Over