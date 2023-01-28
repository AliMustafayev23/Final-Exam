import React from 'react'
import Carousel from 'better-react-carousel'
import "./index.scss"
const FannySpencer = () => {
  return (
    <div className='container'>
      <div className="fannyspencer">
      <Carousel cols={1} rows={1} gap={10} loop>
      <Carousel.Item>
       <div className="slider">
       <img src="https://preview.colorlib.com/theme/educature/img/quote.png" alt="" />
        <h1>Fanny Spencer</h1>
        <div className="stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
       
        </div>
        <p>Lorem ipsum dolor sit amet consec tetur adipisicing elit,<br/> sed do eiusmod tempor incididunt labore.</p>
       </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slider">
        <img src="https://preview.colorlib.com/theme/educature/img/quote.png" alt="" />
        <h1>Fanny Spencer</h1>
        <div className="stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
     
        </div>
        <p>Lorem ipsum dolor sit amet consec tetur adipisicing elit,<br/> sed do eiusmod tempor incididunt labore.</p>
        </div>
      
      </Carousel.Item>
    </Carousel>
    <div className="photos">
      <img src="https://preview.colorlib.com/theme/educature/img/testimonial/t1.jpg" alt="" />
      <img src="https://preview.colorlib.com/theme/educature/img/testimonial/t2.jpg" alt="" />
      <img src="https://preview.colorlib.com/theme/educature/img/testimonial/t3.jpg" alt="" />
      <img src="https://preview.colorlib.com/theme/educature/img/testimonial/t4.jpg" alt="" />

    </div>
      </div>
    </div>
  )
}

export default FannySpencer