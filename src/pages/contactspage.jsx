import { useState } from "react";
import '../css/contactpage.css';

function ContactPage(){
  return(
    <div className="contact_wrapper">
      <div className="contact_card">
        <h1>Contact Us</h1>
        <form className="contact_form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="6" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;