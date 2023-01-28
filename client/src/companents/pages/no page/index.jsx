import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./index.scss"
const NoPage = () => {
  const navigate=useNavigate()
  const backhome=()=>{
    navigate("/")
  }
  return (
    <div className='nopage'>
      <h1 className='notfound'>404 Not Found This Page</h1>
      <button className='backhome' onClick={()=>backhome()}>Back to Home</button>
    </div>
  )
}

export default NoPage