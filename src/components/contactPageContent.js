import { useState } from 'react';
import './contactPageContent.css';

const ContactPageContent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

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
    <div className="contact-page-content-wrapper">
      <div className="contact-section-title ">
        <div className="line" />
        <h1>contact me</h1>
        <div className="pic-box">
          <img src="./images/circle.png" alt="" className="circle-image" />
        </div>
      </div>
      <div className="form-box">
        <form
          action="https://formspree.io/f/xeqnwkdj"
          method="post"
          className="contact-form"
        >
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
            name='message'
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
  );
}
 
export default ContactPageContent;