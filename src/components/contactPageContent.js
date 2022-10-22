import { useState } from 'react';
import './contactPageContent.css';

const ContactPageContent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    setMessage('');
    setName('');
    setTitle('');
    alert('Thank you for reaching out!!');
  }

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
          <img src="./images/circle.png" alt="" className='circle-image'/>
        </div>
      </div>
      <div className="form-box">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={handleName}
            required
            placeholder="Name"
            className="input"
          />
          <input
            type="email"
            value={email}
            onChange={handleEmail}
            required
            placeholder="Email"
            className="input"
          />
          <input
            type="text"
            value={title}
            onChange={handleTitle}
            required
            placeholder="Title"
            className="input"
          />
          <textarea
            value={message}
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