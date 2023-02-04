import React from 'react'
 import AboutImage from '../../assets/images/about.png'

const About = () => {
  return (
    <section className="about-section">
    <div className="green-box"></div>
    <div className="container">
        <div className="about-content">
            <div className="about-box">
                <div className="about-box-content">
                    <h2>HAQQIMIZDA</h2>
                    <p>"AVC Agro" MMC 2002-ci ildə qurulmuşdur. Əvvəldən məqsədimiz, milli quşçuluq və heyvandarlıq sektorunun artan ehtiyaclarını ödəyə biləcək uzunmüddətli və keyfiyyətli bir layihə yaratmaq idi. spektr, əla xidmət, texniki dəstək və ən əsası dürüstlük və səriştəlikdir.</p>

                    <div className="more-btn2">
                        <a href="">
                            <div className="btn2">
                                Daha ətraflı
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="about-section-img">
                <img src={AboutImage} alt="" />
            </div>
        </div>
        
    </div>
   
</section>
  )
}

export default About