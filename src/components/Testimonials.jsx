import React, { useRef } from "react";
import Title from "./Title";
import next_icon from "../assets/next-icon.png";
import back_icon from "../assets/back-icon.png";
import user_1 from "../assets/user-1.png";
import user_2 from "../assets/user-2.png";
import user_3 from "../assets/user-3.png";
import user_4 from "../assets/user-4.png";
import "./Testimonials.css";

const Testimonials = () => {
     const slider = useRef();
     let tx = 0;

     const slideforward = () => {
          if(tx > -50){
            tx -= 25;
          }
          slider.current.style.transform = `translateX(${tx}%)`;
     } 
     const slidebackward = () => {
        if(tx < 0){
          tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
   } 
  return (
    <>
      <Title subTitle="Testimonals" title="What students says" />
      <div className="testimonials">
        <img src={next_icon} alt="" className="next-icon" onClick={slideforward}/>
        <img src={back_icon} alt="" className="back-icon" onClick={slidebackward}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="slide-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>Leona Fable</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  I had an incredible learning experience at Edusity. The
                  courses are well-structured, and the faculty provides
                  excellent guidance. The hands-on approach to projects and
                  real-world applications helped me build a solid foundation in
                  web development. I highly recommend Apna College for anyone
                  looking to start or advance their career in tech!
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="slide-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, California</span>
                  </div>
                </div>
                <p>
                Edusity College offers an innovative and flexible approach to learning. The curriculum is industry-relevant, and the instructors are experienced professionals who guide students effectively. It's a great place for anyone looking to gain practical skills and succeed in the tech industry.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="slide-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>Mira Solace</h3>
                    <span>Edusity, Japan</span>
                  </div>
                </div>
                <p>
                Edusity College excels in delivering high-quality education through its comprehensive and up-to-date courses. The instructors are knowledgeable, and the projects offered provide valuable experience that prepares students for real-world challenges. I highly recommend it for anyone serious about their career growth.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="slide-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>Eryx Caldwell</h3>
                    <span>Edusity, China</span>
                  </div>
                </div>
                <p>
                Edusity College has a great balance of flexibility and academic rigor. The online platform is easy to navigate, and the instructors are always available to offer support. I found the practical projects to be extremely helpful in building a strong portfolio.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
