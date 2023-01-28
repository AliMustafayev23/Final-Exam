import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
const Features = () => {
  const [features, setFeatures] = useState([])
  const [click, setClick] = useState(true)
  useEffect(() => {
    axios("http://localhost:8000/features").then(response=>{
      setFeatures(response.data)
    })
  }, [])
  const search=(value)=>{
    axios("http://localhost:8000/features").then(response=>{
      let searched=response.data.filter((e)=>e.name.toLowerCase().includes(value.toLowerCase()))
      setFeatures(searched)
    })
  }
  const sort=()=>{
    if(click==true){
      axios("http://localhost:8000/features").then(response=>{
      let sorted=response.data.sort((a,b)=>a.price-b.price)
      setFeatures(sorted)
      setClick(false)
    })
    }
    if(click==false){
      axios("http://localhost:8000/features").then(response=>{
      setFeatures(response.data)
      setClick(true)
    })
    }
  }
  return (
    <div className='container'>
      <div className="features">
        <h1>Features That Make Us Hero</h1>
        <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price.<br/> You may see some for as low as $.17 each.</p>
      <div className="searchside">
        <input type="text" onChange={(e)=>search(e.target.value)} />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <button className='sort' onClick={()=>sort()}>Sort by Price</button>
      <div className="featurecards">
{features.map((e)=>{return(<Link className='featurecard' to={`/detail/${e._id}`}>
<i className={e.image}></i>
<h2>{e.name}</h2>
<p>{e.description}</p>
<p>${e.price}</p>
</Link>)})}
      </div>
      </div>
    </div>
  )
}

export default Features