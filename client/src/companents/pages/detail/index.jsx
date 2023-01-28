import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate, useParams } from 'react-router-dom'
import "./index.scss"
const Detail = () => {
  const [features, setFeatures] = useState([])
  const {_id}=useParams()
  const navigate=useNavigate()
  useEffect(() => {
    axios(`http://localhost:8000/features/${_id}`).then(response=>{
      setFeatures(response.data)
    })
  }, [])
 const delet=()=>{
  axios.delete(`http://localhost:8000/features/${_id}`);
  navigate("/")
 }
  return (
    
    <div className='detail'>
        <Helmet>
                <meta charSet="utf-8" />
                <title>{features.name}</title>
                <link rel="canonical" href="http://mysite.com/example" />
       </Helmet>
     <i className={features.image}></i>
<h2>{features.name}</h2>
<p>{features.description}</p>
<p>${features.price}</p>
<button className='delete' onClick={()=>delet()}>Delete</button>
    </div>
  )
}

export default Detail