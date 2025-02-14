import "./leadQuestionAnswer.css";
import {mockData} from "./mockData.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Scores from "../components/Scores.jsx";
import {useEffect, useState} from "react";

export default function LeadQuestionAnswer() {
  const [scoreJson, setScoreJson] = useState([]);
  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("X-Api-Key", `${import.meta.env.VITE_API_KEY}`);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    fetch(`${import.meta.env.VITE_API_URL}/default/generateMenoScore?submissionId=3`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setScoreJson(result)

      })
      .catch((error) => console.error(error));
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="lead-question-answer-wrapper">
        <Breadcrumbs />
        <div className="lead-question-answer-container">
          <div className="lead-question-text">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.75 4.5C1.75 2.98122 2.98122 1.75 4.5 1.75H19.5C21.0188 1.75 22.25 2.98122 22.25 4.5V19.5C22.25 21.0188 21.0188 22.25 19.5 22.25H4.5C2.98122 22.25 1.75 21.0188 1.75 19.5V4.5ZM11 16.5C11 15.9477 11.4477 15.5 12 15.5H12.009C12.5613 15.5 13.009 15.9477 13.009 16.5C13.009 17.0523 12.5613 17.5 12.009 17.5H12C11.4477 17.5 11 17.0523 11 16.5ZM11 9.5C11 8.94772 11.4477 8.5 12 8.5C12.5523 8.5 13 8.94772 13 9.5C13 9.70057 12.942 9.88454 12.8422 10.0397C12.7241 10.2232 12.5739 10.4167 12.3889 10.6466L12.2993 10.7576C12.1441 10.9494 11.9687 11.1665 11.8088 11.3862C11.4328 11.903 11 12.6184 11 13.5C11 14.0523 11.4477 14.5 12 14.5C12.5523 14.5 13 14.0523 13 13.5C13 13.277 13.1099 12.9973 13.426 12.5629C13.5532 12.3881 13.6904 12.2182 13.8449 12.027L13.9471 11.9004C14.1337 11.6684 14.3433 11.4028 14.5241 11.1219C14.8253 10.6537 15 10.0957 15 9.5C15 7.84315 13.6569 6.5 12 6.5C10.3431 6.5 9 7.84315 9 9.5C9 10.0523 9.44772 10.5 10 10.5C10.5523 10.5 11 10.0523 11 9.5Z" fill="#1E3723"/>
            </svg>
            {mockData.LeadQuestionText}
          </div>
          <div className="lead-question-answer">{mockData.LeadQuestionAnswer}</div>
        </div>
        <div className="recommendations">
          <div className="recommendations-tabs">
            {mockData.recommendations?.lifestyle?.length > 0 && (
              <div className="tab active">
                Lifestyle
              </div>
            )}
            {mockData.recommendations?.programs?.length > 0 && (
              <div className="tab">
                Programs
              </div>
            )}
            {mockData.recommendations?.products?.length > 0 && (
              <div className="tab">
                Products
              </div>
            )}
          </div>
          <div className="recommendations-content">
            {
              mockData.recommendations?.lifestyle?.length > 0 && (
                <>
                  <h2>Lifestyle recommendations</h2>
                  {
                    mockData.recommendations.lifestyle?.map((r) => {
                      return (
                        <div className="recommendation lifestyle" key={r.recommendation.RecommendationTitle}>
                          <div className="title">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 17.6586V20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20V17.6586M12 2V3M3 12H2M5.5 5.5L4.8999 4.8999M18.5 5.5L19.1002 4.8999M22 12H21M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z" stroke="#627365" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            {r.recommendation.RecommendationTitle}
                          </div>
                          <div className="description">{r.recommendation.RecommendationDescription}</div>
                          <div className="science"><strong>Science:</strong> {r.recommendation.RecommendationScience}</div>
                        </div>
                      )
                    })
                  }
                </>
              )
            }
            {
              mockData.recommendations?.products?.length > 0 && (
                <>
                  <h2>Products recommendations</h2>
                  {
                    mockData.recommendations.products?.map((r) => {
                      return (
                        <div className="recommendation products" key={r.recommendation.RecommendationTitle}>
                          <div className="product">
                            <img src={r.recommendation.Product.ImageUrl} alt={r.recommendation.Product.Name} width={160} height={160} />
                            <div className="product-info">
                              <div className="name">{r.recommendation.Product.Name}</div>
                              <div className="description">{r.recommendation.Product.Description}</div>
                              <a href={r.recommendation.Product.Url} className="button button-primary" target="_blank">Order now</a>
                            </div>
                          </div>
                          <div className="description">{r.recommendation.RecommendationDescription}</div>
                          <div className="science"><strong>The science: </strong>{r.recommendation.RecommendationScience}</div>
                        </div>
                      )
                    })
                  }
                </>
              )
            }
            {
              mockData.recommendations?.programs?.length > 0 && (
                <>
                  <h2>Programs recommendations</h2>
                  {
                    mockData.recommendations.programs?.map((r) => {
                      return (
                        <div className="recommendation programs" key={r.recommendation.RecommendationTitle}>
                          <div className="title">{r.recommendation.RecommendationTitle}</div>
                          <div className="description">{r.recommendation.RecommendationDescription}</div>
                          <div className="science">{r.recommendation.RecommendationScience}</div>
                        </div>
                      )
                    })
                  }
                </>
              )
            }

          </div>
        </div>
        <div className="assesments">
          <h2>It should be easy to get the answers you need</h2>
          <p>Choose your next step to uncover deeper health insights.</p>
          <div className="assesment-carousel">
            <Swiper
              spaceBetween={30}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="assesment-card">
                  <p className="assesment-title">What lifestyle changes can enhance my sleep?</p>
                  <a href="#" className="read-more">Start assessment</a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="assesment-card">
                  <p className="assesment-title">What lifestyle changes can enhance my sleep?</p>
                  <a href="#" className="read-more">Start assessment</a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="assesment-card">
                  <p className="assesment-title">What lifestyle changes can enhance my sleep?</p>
                  <a href="#" className="read-more">Start assessment</a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="assesment-card">
                  <p className="assesment-title">What lifestyle changes can enhance my sleep?</p>
                  <a href="#" className="read-more">Start assessment</a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="assesment-card">
                  <p className="assesment-title">What lifestyle changes can enhance my sleep?</p>
                  <a href="#" className="read-more">Start assessment</a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="assesment-card">
                  <p className="assesment-title">What lifestyle changes can enhance my sleep?</p>
                  <a href="#" className="read-more">Start assessment</a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <Scores />
    </>
  );
}