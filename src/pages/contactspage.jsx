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
            <div className="contact_information">
              <div className="contact_title">
                <h1>Study design with us</h1>
              </div>
              <div className="contact_info1">
                <h2>You will be able to meet the increasing demand for designers who can work in a variety of media, such as websites, apps, gaming and virtual reality. </h2>
                <h2>Studying Design means you will apply theory and practice to research in areas related to how designers think, how they practice and what they produce. Design at Waikato is unique in New Zealand as a specialist design qualification that offers an integration of design and computer science. </h2>
                <h2>You’ll become a designer who can code – making you highly desirable. Waikato also trains design students to problem-solve, and to apply an aesthetic edge, while seeing the full range of creative design possibilities. </h2>
              </div>
              <div className="contact_title_2">
                <h1>Get in touch</h1>
              </div>
              <div className="contact_info2">
                <h2>Whether you are a prospective student looking to study, or you are in industry and would like to collaborate with us, or you just want to have a chat!</h2>
                <h2>We'd love to hear from you!</h2>
                <ul>
                  <ol><h3>Email: degreeshow@waikato.ac.nz</h3></ol>
                  <ol><h3>Faculty Phone: 0800 924 538</h3></ol>
                  <ol><h3>Degree info: www.waikato.ac.nz/go/bdes</h3></ol>
                </ul>
              </div>
      </div>
    </div>
  );
}

export default ContactPage;