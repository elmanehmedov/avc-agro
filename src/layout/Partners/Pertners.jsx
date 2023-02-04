import React from 'react'
 import './partners.css'
 import Carousel from "react-bootstrap/Carousel";
  import Stack from 'react-bootstrap/Stack'
  import biomin from '../../assets/images/partners/biominPartner.png'
  import dsm from '../../assets/images/partners/dsmPartner.png'


 
const Pertners = () => {

  return (
    <section className="section-partners">
    <div class="container">
      <div className="section-header-partner">
        <p className="section--news-header">PARTNYORLAR</p>
      </div>
      <Carousel indicators={false} >
     
      <Carousel.Item   interval={500}>
        <div className="slider-flex">

       
        <img
         
          src={biomin}
          alt="Second slide"
        />
        <img
         
         src={dsm}
         alt="Second slide"
       />
       
       <img
         
          src={dsm}
          alt="Second slide"
        />
          <img
         
         src={dsm}
         alt="Second slide"
       />
         </div>
        
      </Carousel.Item >
  
      
     
     

    </Carousel>


     
      </div>
      </section>
  )
}

export default Pertners