import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
import SlideImg from "../assets/images/img1.png";
import SlideImg2 from "../assets/images/img2.png";

const MainCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={SlideImg} alt="First slide" />
        <Carousel.Caption>
          <div class="slide-details">
            <h1>Təsərrüfatınızı bizimlə inkişaf etdirin!</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>

            <a href="" className="custom-btn btn-12">
              <span>Keçid edin!</span>
              <span>Ətraflı baxmaq üçün</span>
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          style={{ height: "100vh" }}
          src={SlideImg2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Təsərrüfatınızı bizimlə inkişaf etdirin!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={SlideImg} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <a href="" class="custom-btn btn-12">
            <span>Keçid edin!</span>
            <span>Ətraflı baxmaq üçün</span>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MainCarousel;
