import React from "react";
import "./news.css";
import News1 from "../../assets/images/news1.png";
import News2 from "../../assets/images/news2.png";
import News3 from "../../assets/images/news3.png";
const News = () => {
  return (
    <section className="section-news">
      <div class="container">
        <div className="section-header-news">
          <p className="section--news-header">XƏBƏRLƏR</p>
          <h4 className="section-news-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            explicabo rem quisquam?
          </h4>
        </div>
        <div className="section-news-box">
          <div className="news--box-item">
            <img src={News1} alt="avc-agro news" />
            <h5 className="news-date">06-05-2022</h5>
            <p className="news-title">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="news--box-item">
            {" "}
            <img src={News2} alt="avc-agro news" />
            <h5 className="news-date">06-05-2022</h5>
            <p className="news-title">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="news--box-item">
            {" "}
            <img src={News3} alt="avc-agro news" />
            <h5 className="news-date">06-05-2022</h5>
            <p className="news-title">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>

      <div className="more-btn-news">
        <a href="">
          <div className="btn-green">Daha ətraflı</div>
        </a>
      </div>
    </section>
  );
};

export default News;
