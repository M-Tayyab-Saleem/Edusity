import React from "react";
import Title from "./Title";
import "./Contact.css";
import msg_icon from "../assets/msg-icon.png";
import mail_icon from "../assets/mail-icon.png";
import phone_icon from "../assets/phone-icon.png";
import location_icon from "../assets/location-icon.png";
import white_arrow from '../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", '54b20d79-97c9-44d7-b10f-23eac62ecccd');

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <Title subTitle="Contact Us" title="Get In Touch" />
      <div className="contact">
        <div className="contact-col">
          <h3>
            Send Us Message <img src={msg_icon} alt="" />
          </h3>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, suggestion and questions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <ul>
            <li>
              <img src={mail_icon} alt="" /> edusity123@gmail.com
            </li>
            <li>
              <img src={phone_icon} alt="" /> +92 34918-52857
            </li>
            <li>
              <img src={location_icon} alt="" /> 77 Massachuset Ave, Cambridge
              <br />
              MA 00345, United States Of Pakistan
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name"/>
          <label>Your Phone</label>
          <input type="tel" placeholder="Enter your mobile phone" name="phone"/>
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder="Enter your message"></textarea>
          <button type="submit" className="btn dark-btn">Submit <img src={white_arrow} alt="" /></button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
