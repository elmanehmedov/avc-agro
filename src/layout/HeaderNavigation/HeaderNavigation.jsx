import React, {useState} from 'react'
 import './headerNav.css'
  import Logo from '../../assets/svg/logo-white.svg'
  import Logobg from '../../assets/svg/logo.svg'
   import './scrooling.js'
   

  
 

const HeaderNavigation = () => {
    const [imageChange, setImageChange] = useState(Logo);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
            setImageChange(Logobg);
        }
        else{
          setImageChange(Logo);
        }
     };
     window.addEventListener('scroll', changeNavbarColor);
   
  return (
    <header>
    <nav  >
        <div className="wrapper">
            <div className="navbar-content scrolling">
                <div className="navbar-center">
                    <div className="logo">
                        <a href="index.html">
                            <img src={imageChange}  alt="avc-agro" />
                        </a>
                    </div>

                    <input type="radio" name="slider" id="menu-btn" />
                    <input type="radio" name="slider" id="close-btn" />
                    <ul className="nav-links scrolling2">
                        <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
                        <li className="list-p"><a href="corporate.html">Ana Səhifə</a></li>
                        <li className="list-p"><a href="cases.html">Haqqımızda</a></li>
                        <li className="list-p"><a href="news.html">Məhsullarımız</a></li>
                        <li className="list-p"><a href="career.html">Xəbərlər</a></li>
                        <li className="list-p"><a href="contact.html">Əlaqə</a></li>
                    </ul>
                    <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>

                    <div className="call-us btn-11 ">
                        <a href="">
                            <div className="call-box ">
                                <div className="call-box-icon">
                                    <img src="assets/svg/call.svg" alt="" />
                                </div>
                                <div className="call-box-text">
                                    <h5>Bizə zəng edin</h5>
                                    <p>+994 55 543 65 47</p>
                                </div>
                            </div>
                        </a>
                    </div>

                   

                </div>

            </div>

        </div>
    </nav>


</header>
  )
}

export default HeaderNavigation