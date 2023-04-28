import "./ContactSec.css";
import { LineBreak } from "./LineBreak";

function ContactSec() {
  return (
    <section id="ContactSec" className="min-vh-100">
      <h1>CONTACT ME</h1>
      <LineBreak lineStyle={{ backgroundColor: "#2c3e50" }} />

      <form action="" className="contactForm">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Full Name"
          />
          <label htmlFor="name">Full Name</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            placeholder="Phone Number"
          />
          <label htmlFor="phoneNumber">Phone Number</label>
        </div>

        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            id="message"
            placeholder="Message"
            cols="40"
            rows="10"
          ></textarea>
          <label htmlFor="message">Message</label>
        </div>

        <input className="send" type="submit" value="Send" />
      </form>
    </section>
  );
}

export default ContactSec;
