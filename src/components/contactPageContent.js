import { useState, useRef } from 'react';
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import './contactPageContent.css';
import emailjs from "@emailjs/browser";

const ContactPageContent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(true);

   const form = useRef();
   const serviceId = `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`;
   const templateId = `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`;
   const publicKey = `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`;

    const sendEmail = async (e) => {
      e.preventDefault();
      try {
        await  emailjs.sendForm(
          serviceId,
          templateId,
          form.current,
          publicKey
        )
      } catch (error) {
        console.log(error.text);
      }
        setEmail('');
        setMessage('');
        setName('');
        setTitle('');
        setSuccess(false);
    };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="contact-main-wrapper">
      {success ? (
        <div className="contact-page-content-wrapper">
          <div className="contact-section-title ">
            <div className="line" />
            <h1>contact me</h1>
            <div className="pic-box">
              <img src="./images/circle.png" alt="" className="circle-image" />
            </div>
          </div>
          <div className="form-box">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleName}
                required
                placeholder="Name"
                className="input"
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmail}
                required
                placeholder="Email"
                className="input"
              />
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleTitle}
                required
                placeholder="Title"
                className="input"
              />
              <textarea
                value={message}
                name="message"
                onChange={handleMessage}
                required
                className="text-area"
                placeholder="message"
              />
              <button type="submit" className="submit-btn">
                submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="success-box">
          <div className="success-message">
            <FaThumbsUp className="thumbsUp" />
            <h1>thank you for reaching us!!</h1>
          </div>
          <Link to="/">back to home</Link>
        </div>
      )}
    </div>
  );
}
 
export default ContactPageContent;