import React from 'react'
import Logo from '../../assets/svg/logo.svg'
 import {FaInstagramSquare} from 'react-icons/fa'
 import {AiFillFacebook} from 'react-icons/ai'
 import './footer.css'

const Footer = () => {
  return (
   <section id="footer">
    <div className="footer-flex">
       <div className="footer-logo">
          <img src={Logo} />
       </div>
       
       <div className='footer-menu'>
         <div className="company-menu">
             <ul>
                <li >Şirkət</li>
                <li >Haqqımızda</li>
                <li >Kataloq</li>
                <li >Xəbərlər</li>
                <li >Əlaqə</li>
             </ul>
            </div> 
            <div className="product-menu">
             <ul>
                <li >Məhsullar</li>
                <li >Bitkiçilik</li>
                <li >Baytarlıq</li>
                
             </ul>
            </div> 
            <div className="contact-menu">
             <ul>
                <li >+994555436547</li>
                <li >avcagrobaku@gmail.com</li>
                <li >Bab'k Prospekti, Rich Plaza</li>
                
             </ul>
            </div> 

       </div>
       <div className="social-icons">
        <h5>Bizi İzləyin</h5>
        <FaInstagramSquare/>
        <AiFillFacebook/>


       </div>
    </div>


   </section>
  )
}

export default Footer