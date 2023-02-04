import React from 'react'
 import Animals from '../../assets/svg/animals.svg'
 import Plants from '../../assets/svg/plants.svg'

const Products = () => {
  return (
    <section class="product-section">
    <div class="green-box-2"></div>
    <div class="container">
        <div class="product-section-box">
            <div class="product-section-box-content">
                <div class="product-img-box">
                    <img src="assets/img/product.png" alt="" />
                </div>

                <div class="product-categories">
                    <div class="product-title">
                        <h1>MƏHSULLARIMIZ</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>

                    <div class="categories">
                      <a href="">
                        <div class="category-box">
                            <div class="category-box-content">
                                <img src={Animals} alt="" />
                            <h4>Heyvandarlıq</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            
                        </div>
                      </a>  

                        <div class="line"></div>

                        <a href="">
                            <div class="category-box">
                                <div class="category-box-content">
                                    <img src={Plants} alt="" />
                                <h4>Bitkiçilik</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                
                            </div>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</section>
  )
}

export default Products