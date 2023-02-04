import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './layout/HeaderNavigation/headerNav.css'



import MainCarousel from './layout/MainCarousel';
import HeaderNavigation from './layout/HeaderNavigation/HeaderNavigation';
import About from './layout/About/About';
import Products from './layout/Products/Products';
import News from './layout/News/News';
import Pertners from './layout/Partners/Pertners';
import Footer from './layout/Footer/Footer';

function App() {
 

  return (
    
    < >
    <HeaderNavigation/>
      
     {/* <Navbar bg="light" expand="lg" >
     <Navbar.Brand href="#home" style={{marginLeft:'3rem'}} >React-Bootstrap</Navbar.Brand>
       
      <Container className='navbar-header'  >
    
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">Ana Səhifə</Nav.Link>
            <Nav.Link href="#link">Haqqımzda</Nav.Link>
            <Nav.Link href="#home">Ana Səhifə</Nav.Link>
            <Nav.Link href="#link">Haqqımzda</Nav.Link>
            <Nav.Link href="#home">Ana Səhifə</Nav.Link>
           
             
          </Nav>
        </Navbar.Collapse>
      </Container>
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
    </Navbar> */}
     <MainCarousel/>
     <About/>
     <Products/>
     <News/>
      <Pertners/>
      <Footer/>
     

    
    </>
  );
}

export default App;
