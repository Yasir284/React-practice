import "./ContactSec.css";
import { LineBreak } from "./LineBreak";

function ContactSec() {
  return (
    <section id="ContactSec">
      <h1>CONTACT ME</h1>
      <LineBreak lineStyle={{ backgroundColor: "#2c3e50" }} />

      <form action="">
        <div className="form-floating">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" placeholder="First Name" />
          <input type="email" id="email" placeholder="First Name" />
          <input type="number" id="phoneNumber" placeholder="First Name" />
          <textarea name="" id="message"></textarea>
        </div>
      </form>
    </section>
  );
}

export default ContactSec;
