import "./Contact.scss";
import Footer from "../../components/Footer/Footer";
import { ReactComponent as LinkedIn } from "../../assets/socials/linkedIn.svg";
import { ReactComponent as Github } from "../../assets/socials/github.svg";
import { ReactComponent as Instagram } from "../../assets/socials/instagram.svg";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact-container">
          <h2>Get In Touch</h2>
          <div className="form-and-info">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <hr />
              <a>(704)770-8371</a>
              <a>jlbroughton88@gmail.com</a>
              <div className="socials-parent">
                <LinkedIn />
                <Github />
                <Instagram />
              </div>
            </div>
            <form className="contact-form">
              <div className="firstname-lastname-parent">
                <div className="contact-form-item">
                  <input />
                  <label for="">First Name</label>
                </div>

                <div className="contact-form-item">
                  <input />
                  <label for="">Last Name</label>
                </div>
              </div>

              <div className="contact-form-item">
                <input />
                <label for="">Email</label>
              </div>

              <div className="contact-form-item">
                <input />
                <label for="">Phone Number (Optional)</label>
              </div>

              <div className="contact-form-item">
                <input />
                <label for="">Current Website (Optional)</label>
              </div>

              <div className="contact-form-item">
                <textarea />
                <label for="">Message</label>
              </div>
              <input className="submit-button" type="submit" placeholder="submit"/>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
